<template>
  <section class="tp-shop-area pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-shop-main-wrapper">
            <div class="tp-shop-top mb-45">
              <div class="row">
                <div class="col-md-12 col-xl-6">
                  <div class="tp-shop-top-left  d-md-flex">
                    <div class="tp-shop-top-filter">
                      <button type="button" @click="openLeftFilterDesktop" class="tp-filter-btn filter-open-dropdown-btn desktop-left-filter-btn">
                          <span>
                            <svg-filter/>
                          </span>
                        Show Filter
                      </button>
                    </div>
                    <shop-sidebar-filter-select
                      :asc="store.ascSort"
                      @handle-select-filter="onSort"
                    />
                  </div>
                </div>
                <div class="col-md-12 col-xl-6">
                  <div class="tp-shop-top-right d-flex align-items-center">
                    <div class="tp-shop-top-result">
                      <p>
                        Showing 1–{{ store.vehicles?.slice(0,perView).length }} of
                        {{ store.vehicles.length }} results
                      </p>
                    </div>
                    <div class="tp-shop-top-tab tp-tab d-none">
                      <ul class="nav nav-tabs" id="productTab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button
                            :class="`nav-link ${active_tab === 'grid' ? 'active' : ''}`"
                            @click="handleActiveTab('grid')"
                          >
                            <svg-grid />
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button 
                            :class="`nav-link ${active_tab === 'list' ? 'active' : ''}`"
                            >
                            <!-- @click="handleActiveTab('list')" -->
                            <svg-list />
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="listing-container" class="d-flex">
              <!-- begin - left filter desktop -->
              <div class="desktop-left-filter" :class="{ 'active' : activeFilterDesktop }">
                <shop-sidebar-option-filters @close="activeFilterDesktop = false" @filter="onFilter" :bodyType="bodyType"/>
              </div>
              <!-- end - left filter desktop -->

              <div class="tp-shop-items-wrapper tp-shop-item-primary" :class="{ 'active' : activeFilterDesktop }">
                <div v-if="active_tab === 'grid'">
                  <div class="d-flex justify-content-center mt-4 pt-4" v-if="store.loading">
                    <div class="spinner-border" style="width: 10rem; height: 10rem;" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                  <div class="row infinite-container" v-else>
                    <div
                        v-for="item in store.vehicles?.slice(0,perView)"
                        :key="item.id"
                        class="col-xl-4 col-md-6 col-sm-6 infinite-item"
                    >
                      <product-fashion-product-item
                          :item="item"
                          :spacing="true"
                      />
                    </div>
                  </div>
                </div>
                <div v-if="!store.loading && store.vehicles.length">
                  <button v-if="perView < store.vehicles.length" @click="handlePerView" type="button" class="btn-loadmore tp-btn tp-btn-border tp-btn-border-primary">
                    Load More Products
                  </button>
                  <p v-else class="btn-loadmore-text">End Of Products</p>
                </div>
              </div>
            </div>
            <div class="divider listing"></div>

            <!-- product new arrivals area start -->
              <product-electronics-new-arrivals />
            <!-- product new arrivals area end -->

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { type LocationQueryRaw } from 'vue-router';
import { useProductFilterStore } from "@/pinia/useProductFilterStore";

const props = defineProps(['bodyType']);

const route = useRoute();
const router = useRouter();

const active_tab = ref<string>("grid");
const activeFilterDesktop = ref<boolean>(true);

let perView = ref<number>(9);

function handleActiveTab(tab: string) {
  active_tab.value = tab;
}

function handlePerView() {
  perView.value = perView.value + 3
}

function openLeftFilterDesktop(){
  activeFilterDesktop.value = !activeFilterDesktop.value;
}

const store = useProductFilterStore();

interface ConvertedObject {
  [key: string]: { _eq?: string, _lte?: number, _gte?: number, _between?: string[] };
}

interface filterObj {
  _or?: ConvertedObject[],
  _and?: ConvertedObject[]
}

const convertToObject = (key: string, values: string): ConvertedObject[] => {
  return values.split(',').map(value => {
      return { [key]: { _eq: value.trim() } };
  });
};

const convertNumString = (values: string): any => {
  return values.split(',').map(value => {
    if (!isNaN(parseInt(value))) {
      return {'bodytype': {_eq: value }}
    } else {
      return {[value]: {_eq: true }}
    }
  });
};

const priceComparison = (max: number, min: number): ConvertedObject[] => {
  return [{"bprice": {"_lte": max}},{"bprice": {"_gte": min}}]
}

const yearComparison = (start: number, end: number): ConvertedObject[] => {
  return [{"year": {"_lte": end}},{"year": {"_gte": start}}]
}

interface ConnectObject {
  make?:filterObj,
  model?:filterObj,
  maxPrice?:filterObj,
  end?:filterObj,
  style?:filterObj,
  length?:filterObj,
  seats?:filterObj,
  mileage?:filterObj,
  condition?:filterObj
}

const filters = (val: any) => {
  const con : ConnectObject = {}
  for (let key in val) {
    if (val.hasOwnProperty(key)) { 

      if (key === 'make' || key === 'model' || key === 'condition') {
        con[key] = { _or: convertToObject(key, val[key]) }
      }

      if (key === 'maxPrice') {
        con[key] = { _and: priceComparison(val.maxPrice, val?.minPrice) }
      }

      if (key === 'end') {
        con[key] = { _and : yearComparison(val.start, val?.end) }
      }

      if(key === 'style') {
        con[key] = { _or: convertNumString(val[key]) }
      }

      if (key === 'length' || key === 'seats' || key === 'mileage') {
        const values = val[key].split(',').map(Number);
        const andClauses: ConvertedObject[] = [];
        for (let i = 0; i < values.length; i += 2) {
          const betweenClause: ConvertedObject = {
            [key]: {
              _between: [values[i], values[i + 1]]
            }
          };
          andClauses.push(betweenClause);
        }
        con[key]= { _or: andClauses };
      }
    }
  }
  return { catid: store.categoryId, _and: Object.values(con), bodytype: props.bodyType };
}

watch(
  () => route.query,
  async (val, old) => {
    store.currentFilters = filters(val)
    await store.fetchItems()
  }
);

const  onFilter = (qp: LocationQueryRaw) => {
  router.push({ query: qp });
}

const onSort = async (val: string) => {
  if (val === store.sortType) {
    store.ascSort = !store.ascSort
  } else {
    store.sortType = val
  }
  await store.fetchItems()
}

onMounted(async ()=> {
  store.currentFilters = filters(route.query)
  await store.fetchItems()
  await store.fetchMinYear()
  store.selectedStartYear = Number(route.query?.start as string) || 0
  store.selectedEndYear = Number(route.query?.end as string) || 0
})
</script>