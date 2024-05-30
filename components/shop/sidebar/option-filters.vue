<template>
  <div class="tp-shop-sidebar mr-10">
    <div class="main-filter">
        <!-- reset filter start -->
        <shop-sidebar-reset-filter @reset="store.handleResetFilter" @close="$emit('close')"/>
        <!-- reset filter end -->
      <div class="accordion" id="main-filter">
        <!-- begin filter -->
        <div class="accordion-item">
            <h2 class="accordion-header" id="price-filter-accordion">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Price Filter
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="price-filter-accordion" data-bs-parent="#main-filter">
              <div class="accordion-body">
                <shop-sidebar-price-filter :load_more="true" @priceChange="(q) => filterReq(q)" />
              </div>
            </div>
          </div>
        <!-- begin filter -->

        <!-- begin conditon -->
        <div class="accordion-item" v-if="$route.name === 'shop-rvs'">
          <h2 class="accordion-header" id="style-filter-accordion">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseC" aria-expanded="false" aria-controls="collapseC">
              Condition
            </button>
          </h2>
          <div id="collapseC" class="accordion-collapse collapse" aria-labelledby="style-filter-accordion" data-bs-parent="#main-filter">
            <div class="accordion-body">
              <div class="custom-checkbox">
                <div class="checkbox-item" v-for="option in conditionOptions" :key="option.value">
                  <label>{{ option.label }}
                    <input type="checkbox"  :value="option.value" 
                    v-model="store.selectedOpt.condition" 
                    @change="onOptChange(option.value, 'condition')">
                    <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end condition -->  

        <!-- begin sleeps -->
        <div class="accordion-item" v-if="$route.name === 'shop-rvs'">
          <h2 class="accordion-header" id="style-filter-accordion">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Sleeps
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="style-filter-accordion" data-bs-parent="#main-filter">
            <div class="accordion-body">
              <div class="custom-checkbox">
                <div class="checkbox-item" v-for="option in sleepsOptions" :key="option.value">
                  <label>{{ option.label }}
                    <input type="checkbox"  :value="option.value" 
                    v-model="store.selectedOpt.seats" 
                    @change="onOptChange(option.value, 'seats')">
                    <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end sleeps -->   

        <!-- begin style -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="style-filter-accordion">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Style
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="style-filter-accordion" data-bs-parent="#main-filter">
            <div class="accordion-body">
              <div class="custom-checkbox">
                <div class="checkbox-item" 
                  v-for="option in $route.name === 'shop-rvs' ? styleOptions : $route.name ==='shop-auto' ? carStyleOptions : otherOptions" 
                  :key="option.value"
                >
                  <label>{{ option.label }}
                    <input type="checkbox"  :value="option.value" 
                    v-model="store.selectedOpt.style" 
                    @change="bodyType ? $router.push(`/shop/${option.label}`) : onOptChange(option.value, 'style')">
                    <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end style -->

        <!-- begin makes -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="makes-filter-accordion">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Makes
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="makes-filter-accordion" data-bs-parent="#main-filter">
            <div class="accordion-body">
              <div class="custom-checkbox">
                <div class="checkbox-item" 
                  v-for="option in $route.name === 'shop-rvs' ? makesOptions : $route.name === 'shop-auto' ? autoMakesOptions : othersMakesOptions" 
                  :key="option.value"
                >
                  <label>{{ option.label }}
                    <input type="checkbox"  :value="option.id" 
                    v-model="store.selectedOpt.make" 
                    @change="onOptChange(option.id, 'make')">
                    <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end makes -->


        <!-- begin Model -->
        <div class="accordion-item" v-if="store.selectedOpt.make.length">
          <h2 class="accordion-header" id="model-filter-accordion">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseModel" aria-expanded="false" aria-controls="collapseModel">
              Model
            </button>
          </h2>
          <div id="collapseModel" class="accordion-collapse collapse" aria-labelledby="model-filter-accordion" data-bs-parent="#main-filter">
            <div class="accordion-body">
              <div class="custom-checkbox">
                <div class="checkbox-item" 
                  v-for="option in store.modelOptions" 
                  :key="option?.id"
                >
                  <label>{{ option?.name }}
                    <input type="checkbox"  :value="option.id" 
                    v-model="store.selectedOpt.model" 
                    @change="onOptChange(option.id, 'model')">
                    <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end Model -->


        <!-- begin Year Filter -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="year-filter-filter-accordion">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              Year
            </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="year-filter-filter-accordion" data-bs-parent="#main-filter">
            <div class="accordion-body">
              <div class="d-flex gap-4">
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle price-ranges" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {{ store.selectedStartYear ? store.selectedStartYear : 'From' }}
                  </button>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li v-for="year in store.startYears" :key="year" :value="year"><a class="dropdown-item" @click="store.selectedStartYear=year;onYear()">{{ year }}</a></li>
                  </ul>
                </div>
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle price-ranges" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {{ store.selectedEndYear ? store.selectedEndYear : 'To' }}
                  </button>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li v-for="year in store.endYears" :key="year" :value="year"><a class="dropdown-item" @click="store.selectedEndYear=year;onYear()">{{ year }}</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end Year Filter -->

        <!-- begin Mileage -->
        <div class="accordion-item" v-if="$route.name !== 'shop-rvs'">
          <h2 class="accordion-header" id="mileage-filter-accordion">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
              Mileage
            </button>
          </h2>
          <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="mileage-filter-accordion" data-bs-parent="#main-filter">
            <div class="accordion-body">
              <div class="custom-checkbox">
                <div class="checkbox-item" v-for="option in mileageOpts" :key="option.value">
                  <label>{{ option.label }}
                    <input type="checkbox"  :value="option.value" 
                    v-model="store.selectedOpt.mileage" 
                    @change="onOptChange(option.value, 'mileage')">
                    <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end Mileage -->

        <!-- begin Length -->
        <div class="accordion-item" v-if="$route.name === 'shop-rvs'">
          <h2 class="accordion-header" id="style-filter-accordion">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLength" aria-expanded="false" aria-controls="collapseLength">
              Length
            </button>
          </h2>
          <div id="collapseLength" class="accordion-collapse collapse" aria-labelledby="style-filter-accordion" data-bs-parent="#main-filter">
            <div class="accordion-body">
              <div class="custom-checkbox">
                <div class="checkbox-item" v-for="option in lenOptions" :key="option.value">
                  <label>{{ option.label }}
                    <input type="checkbox"  :value="option.value" 
                    v-model="store.selectedOpt.length" 
                    @change="onOptChange(option.value, 'length')">
                    <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end style -->   
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, type LocationQueryRaw } from 'vue-router';
import { makesOptions, autoMakesOptions, othersMakesOptions} from "@/data/options-data";
import { useProductFilterStore } from "@/pinia/useProductFilterStore";

const emit = defineEmits(['filter', 'close']);
const route = useRoute();
const store = useProductFilterStore();
const props = defineProps(['bodyType']);

const conditionOptions = ref([
  { label: 'New', value: '1' },
  { label: 'Used', value: '2' },
]);

const styleOptions = ref([
  { label: '5th Wheel', value: '4' },
  { label: 'Motorhome', value: '7' },
  { label: 'Travel Trailer', value: '13' },
  { label: 'Toy Hauler', value: 'toyhauler' },
  { label: 'Pop up', value: 'popup' },
  { label: 'Slide In', value: 'slidein' },
]);

const carStyleOptions = ref([
  { label: 'CAR', value: '57' },
  { label: 'SUV', value: '56' },
  { label: 'TRUCK', value: '55' },
  { label: 'VAN', value: '60' },
  { label: 'WAGON', value: '62' },
])

const otherOptions = ref([
  { label: 'ATV', value: '86' },
  { label: 'BOAT', value: '92' },
  { label: 'MOTORCYCLE', value: '85' },
  { label: 'TRAILER', value: '89' },
  { label: 'UTILITY', value: '91' },
])

const sleepsOptions = ref([
  { label: 'less than 4', value: '0,3' },
  { label: '4 - 6', value: '4,6' },
  { label: '7 - 8', value: '7,8' },
  { label: 'More than 8', value: '8,100' },
])

const lenOptions = ref([
  {label: "18FT AND UNDER", value: "0,18" },
  {label: "19 - 24", value: "19,24" },
  {label: "25 - 33", value: "25,33" },
  {label: "34 - 39", value: "34,39" },
  {label: "40FT +", value: "40,1000" }
])

const mileageOpts = ref([
  { label: "15K", value: "0,15000" },
  { label: "15-30K", value: "15000,30000" },
  { label: "30-45K", value: "30000,45000" },
  { label: "45-60K", value: "45000,60000" },
  { label: "60-75K", value: "60000,75000" },
  { label: "75-100K", value: "75000,100000" },
  { label: "100-150K", value: "100000,150000" },
  { label: "150-200K", value: "150000,200000" },
  { label: "200+", value: "200000,1000000" }
])

type opts = 'style' | 'seats' | 'make' | 'mileage' | 'length' | 'model' | 'condition';

function formPairs(arr: string[]) {
  const pairs = [];
  for (let i = 0; i < arr.length; i += 2) {
    pairs.push(`${arr[i]},${arr[i + 1]}`);
  }
  return pairs;
}

const addToStateFromQuery = (opt: any) => {
  if (route.query[opt]) {
      const queryValue = route.query[opt] as string;
      if (queryValue.indexOf(',') === -1) {
        store.selectedOpt[opt as opts] = [queryValue];
      } else {
        queryValue.split(',').forEach((value) => { 
          store.selectedOpt[opt as opts].push(value || '');
        });
      }
    }
}

onMounted(async () => {
  // initaite selection values from query
  ['style', 'make', 'condition', 'model'].forEach((opt) => {
    addToStateFromQuery(opt)
  });

  if (props.bodyType) {
    store.selectedOpt.style.push(props.bodyType)
  }

  // initaite range values from query
  ['seats', 'length', 'mileage'].forEach((opt) => {
    if (route.query[opt]) {
      const pairs = formPairs(`${route.query[opt]}`.split(','))
      if (pairs.length > 1) {
        pairs.forEach((p) => { 
          store.selectedOpt[opt as opts].push(p || '');
        });
      } else if (pairs.length === 1) {
        store.selectedOpt[opt as opts] = pairs;
      }
    }
  })
});

const onYear = () => {
  if (store.selectedEndYear && store.selectedStartYear) {
    const queryParams = { ...route.query };
    queryParams['start'] = `${store.selectedStartYear}`
    queryParams['end'] = `${store.selectedEndYear}`
    filterReq(queryParams)
  }
}

const onOptChange = async (q: string, key: opts) => {
  const non = route.query[key]?.indexOf(q) === -1
  const queryParams = { ...route.query };
  if (route.query[key] === undefined || non) {
    queryParams[key] = queryParams[key] ? `${queryParams[key]},${q}` : q;
  }
  if(!non) {
    queryParams[key] = store.selectedOpt[key].join(',')
    if(!queryParams[key]) delete queryParams[key]
  }

  filterReq(queryParams)
};

const filterReq = async (qp: LocationQueryRaw) => {
  emit('filter', qp)
}
</script>