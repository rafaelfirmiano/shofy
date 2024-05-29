<template>
  <div class="tp-shop-widget-content">
    <div class="tp-shop-widget-filter price__slider">
      <div id="slider-range" class="mb-10">
        <Slider
          :value="store.priceValues"
          :tooltips="false"
          @change="store.handlePriceChange"
          :max="store.maxProductPrice"
        />
      </div>
      <div
        class="tp-shop-widget-filter-info d-flex align-items-center justify-content-between"
      >
        <span class="input-range text-light" v-if="store.maxProductPrice">
          ${{ store.priceValues[0] }} - {{ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(Number(store.priceValues[1])).replace(/(\.|,)00$/g, '') }}
        </span>
        <button
          @click="handlePriceFilter"
          class="tp-shop-widget-filter-btn"
          type="button"
        >
          Filter
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.css";
import { useProductFilterStore } from "@/pinia/useProductFilterStore";

const emit = defineEmits(['priceChange'])
const store = useProductFilterStore();
const router = useRouter();
const route = useRoute();

const handlePriceFilter = () => {
  const queryParams = { ...router.currentRoute.value.query };
  queryParams['minPrice'] = store.priceValues[0]
  queryParams['maxPrice'] = store.priceValues[1]
  emit('priceChange', queryParams);
};

onMounted(() => {
  if (route.query.minPrice && route.query.maxPrice) {
    store.priceValues = [
      Number(route.query.minPrice),
      Number(route.query.maxPrice),
    ];
  }
});
</script>
