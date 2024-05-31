import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
import type { IModel, IVehicleData, IOpt } from '@/types/product-type';
import { useUtilityStore } from "@/pinia/useUtilityStore";

export const useProductFilterStore = defineStore("product_filter", () => {
  const { getItems } = useDirectusItems();
  const route = useRoute();
  const utilsStore = useUtilityStore();
  
  const maxProductPrice = ref<number>(0)
  const priceValues = ref([0, maxProductPrice.value]);
  const minYear = ref<number>(0);
  const selectedStartYear = ref<number>(0);
  const selectedEndYear = ref<number>(0);
  const currentFilters = ref()
  const sortType = ref<string>('')
  const ascSort = ref<boolean>(true)
  const loading = ref<boolean>(false)
  const vehicles = ref<IVehicleData[]>([]);
  const modelOptions = ref<IModel[]>()

  const handlePriceChange = (value: number[]) => {
    priceValues.value = value;
  };

  type IPath = 'rvs' | 'auto' | 'powersports' | 'boat' | 'atv' | 'motorcycle' | 'trailer' | 'utility'
  const category = { rvs: '2', auto: '3', powersports: '15', boat: '15', atv: '15', motorcycle: '15', trailer: '15', utility: '15'}
  const path: IPath = route.path.split('/')[2] || 'rvs'
  const categoryId = computed(() => category[path])

  const selectedOpt = ref<IOpt>({
    style: [], seats: [], make: [], length: [], mileage: [], model: [], condition: []
  });

  // Function to generate year options
  const generateYears = (startYear: number, endYear: number): number[] => {
    const years: number[] = [];
    for (let year = endYear; year >= startYear; year--) {
      years.push(year);
    }
    return years;
  };

  const defaultSort = computed(() => {
    if(ascSort.value) return ['make.name', 'model.name', 'year']
    return ['-make.name', '-model.name', '-year']
  })

  const fetchItems = async () => {
    loading.value = true
    await fetchMaxPriceProduct()
    vehicles.value = await getItems<IVehicleData>({ 
      collection: 'expautos_admanager', 
      params: {
        filter: currentFilters.value,
        fields: ['*', 'make.*', 'model.*', 'city.*', 'extcolor.*'],
        sort: sortType.value ? [`${ascSort.value ? '': '-' }${sortType.value}`] : defaultSort.value
      }
    })

    if (categoryId.value !== '3') {
      vehicles.value = vehicles.value.map(v => { 
        return { ...v, bprice: `${utilsStore.calculateMonthlyPayment(Number(v.bprice))}` } 
      })
    }

    loading.value = false
    if (!modelOptions.value || (selectedOpt.value.make.length && selectedOpt.value.model.length === 0)) {
      modelOptions.value = getUniqueModels(vehicles.value)
    }
  }

  // Function to filter unique models
  function getUniqueModels(response: IVehicleData[]): IModel[] {
    const modelMap: { [key: string]: IModel } = {};

    response.forEach(item => {
      if (item.model) {
        if (!modelMap[item.model.id]) {
          modelMap[item.model.id] = item.model;
        }
      }
    });

    return Object.values(modelMap);
  }

  const fetchMaxPriceProduct = async () => {
    const resp = await getItems<IVehicleData>({ collection: 'expautos_admanager', 
      params: { filter: currentFilters.value, fields: ['bprice'], sort: ['-bprice'], limit: 1 }
    })
    maxProductPrice.value = resp.length ? Number(resp[0].bprice || '0') : 0
    priceValues.value = [priceValues.value[0], maxProductPrice.value];
  }

  // Watch for changes in selected start year to update end years
  watch(selectedStartYear, (newStartYear) => {
    if (selectedStartYear.value && newStartYear) {
      // update end year options based on selected start year
      endYears.value = generateYears(selectedStartYear.value, currentYear);
      if (selectedEndYear.value !== 0 && selectedEndYear.value < selectedStartYear.value) {
        selectedEndYear.value = 0;
      }
    }
  });

  const handleResetFilter = async () => {
    priceValues.value = [0, 0];
    selectedOpt.value.style = []
    selectedOpt.value.seats = []
    selectedOpt.value.make = []
    selectedOpt.value.length = []
    selectedOpt.value.mileage = []
    selectedOpt.value.condition = []
    selectedStartYear.value = 0
    selectedEndYear.value = 0
  };

  const startYears = ref<number[]>([]);
  const endYears = ref<number[]>([]);
  const currentYear = new Date().getFullYear();

  const fetchMinYear = async () => {
    const resp = await getItems<IVehicleData>({ collection: 'expautos_admanager', 
      params: { filter: {...currentFilters.value, year: {"_gte": 1}}, fields: ['year'], sort: ['year'], limit: 1 }
    })
    const min = resp.length ? Number(resp[0].year || '0') : minYear.value
    if (min !== minYear.value) {
      minYear.value = min
      selectedStartYear.value < min && (selectedStartYear.value = 0)
      selectedEndYear.value < min && (selectedEndYear.value = 0)
      startYears.value = generateYears(min, currentYear);
      endYears.value = generateYears(min, currentYear);
    }
  }

  // filteredProducts
  const filteredProducts = computed(() => {});

  // filteredProducts
  const searchFilteredItems = computed(() => {});

  watch(
    () => route.query || route.path,
    () => {}
  );
  return {
    priceValues,
    filteredProducts,
    handlePriceChange,
    handleResetFilter,
    searchFilteredItems,
    selectedOpt,
    startYears,
    endYears,
    maxProductPrice,
    currentFilters,
    modelOptions,
    fetchItems,
    vehicles,
    ascSort,
    sortType,
    loading,
    categoryId,
    selectedStartYear,
    selectedEndYear,
    fetchMinYear
  };
});
