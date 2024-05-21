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
                      <!-- hide the button to open the filter on mobile and tablet for now  -->
                      <!--                      <button @click="prdStore.handleOpenFilterOffcanvas()" type="button" class="tp-filter-btn filter-open-dropdown-btn">-->
                      <!--                          <span>-->
                      <!--                             <svg-filter/>-->
                      <!--                          </span>-->
                      <!--                        Filter-->
                      <!--                      </button>-->
                      <button type="button" @click="openLeftFilterDesktop" class="tp-filter-btn filter-open-dropdown-btn desktop-left-filter-btn">
                          <span>
                             <svg-filter/>
                          </span>
                        Show Filter
                      </button>
                    </div>
                    <shop-sidebar-filter-select
                        @handle-select-filter="store.handleSelectFilter"
                    />
                    <div class="subcategory-select">
                      <ui-nice-select
                          :options="[
                            { value: 'default-sorting', text: 'Subcategory' },
                            { value: 'motorhome', text: 'Motorhome' },
                            { value: 'low-to-high', text: 'Low to High' },
                            { value: 'high-to-low', text: 'High to Low' },
                            { value: 'new-added', text: 'New Added' },
                            { value: 'on-sale', text: 'On Sale' },
                          ]"
                          name="Subcategory"
                          :default-current="0"
                      />
                    </div>

                  </div>
                </div>
                <div class="col-md-12 col-xl-6">
                  <div class="tp-shop-top-right d-flex align-items-center">
                    <div class="tp-shop-top-result">
                      <p>
                        Showing 1–{{ store.filteredProducts?.slice(0,perView).length }} of
                        {{ product_data.length }} results
                      </p>
                    </div>
                    <div class="tp-shop-top-tab tp-tab">
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
<!--                          <button-->
<!--                              :class="`nav-link ${active_tab === 'list' ? 'active' : ''}`"-->
<!--                              @click="handleActiveTab('list')"-->
<!--                          >-->
<!--                            <svg-list />-->
<!--                          </button>-->
                          <button :class="`nav-link ${active_tab === 'list' ? 'active' : ''}`">
                            <svg-list />
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="listing-container">
              <!-- begin - left filter desktop -->
              <div class="desktop-left-filter" :class="{ 'active' : activeFilterDesktop }">
                <shop-sidebar-load-more />
              </div>
              <!-- end - left filter desktop -->

              <div class="tp-shop-items-wrapper tp-shop-item-primary" :class="{ 'active' : activeFilterDesktop }">
                <div v-if="active_tab === 'grid'">
                  <div class="row infinite-container">
                    <div
                        v-for="item in store.filteredProducts?.slice(0,perView)"
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

                <div v-if="active_tab === 'list'">
                  <div class="row">
                    <div class="col-xl-12">
                      <product-list-item
                          v-for="item in store.filteredProducts?.slice(0,perView)"
                          :key="item.id"
                          :item="item"
                      />
                    </div>
                  </div>
                </div>

                <button v-if="store.filteredProducts && perView < store.filteredProducts.length" @click="handlePerView" type="button" class="btn-loadmore tp-btn tp-btn-border tp-btn-border-primary">
              <span>
<!--                <svg-load />-->
              </span>
                  Load More Products
                </button>

                <p v-else class="btn-loadmore-text">End Of Products</p>

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
import product_data from "@/data/product-data";
import { useProductFilterStore } from "@/pinia/useProductFilterStore";
import { useProductStore } from "@/pinia/useProductStore";
import { type IProduct } from "@/types/product-type";
const route = useRoute();

const active_tab = ref<string>("grid");
const store = useProductFilterStore();
const prdStore = useProductStore();

const activeFilterDesktop = ref(true);

let filteredProductsItems = ref<IProduct[]>(store.filteredProducts!);
let startIndex = ref<number>(0);
let endIndex = ref<number>(store.filteredProducts?.length!);
let perView = ref<number>(9);

const handlePagination = (data: IProduct[], start: number, end: number) => {
  filteredProductsItems.value = data;
  startIndex.value = start;
  endIndex.value = end;
};

function handleActiveTab(tab: string) {
  active_tab.value = tab;
}

function handlePerView() {
  perView.value = perView.value + 3
}

function openLeftFilterDesktop(){
  activeFilterDesktop.value = !activeFilterDesktop.value;
}

watch(
    () => route.query || route.params,
    (newStatus) => {
      startIndex.value = 0;
      endIndex.value =
          store.filteredProducts && store.filteredProducts.length > 9 ? 9 : store.filteredProducts?.length!;
    }
);
</script>