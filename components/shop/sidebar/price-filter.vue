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
        <span class="input-range text-light">
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
  queryParams['minPrice'] = store.priceValues[0] > 1 ? calcPriceFromMonthlyPayment(store.priceValues[0]) : store.priceValues[0]
  queryParams['maxPrice'] = calcPriceFromMonthlyPayment(store.priceValues[1])
  emit('priceChange', queryParams);
};

const calcPriceFromMonthlyPayment = (monthlyPayment: number) => {
    const downPaymentRate = 0.20;
    const annualInterestRate = 8.99 / 100;
    const monthlyInterestRate = annualInterestRate / 12;
    let loanTermMonths;

    // We need to check different loan terms to find the right one
    const loanTerms = [120, 144, 180, 240];
    let price;

    for (let term of loanTerms) {
        loanTermMonths = term;

        // Calculate the price using the reverse formula
        const loanAmount = (monthlyPayment * (Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1)) /
                           (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermMonths));
        price = loanAmount / (1 - downPaymentRate);

        // Verify the calculated price falls within the range for the term
        if ((loanTermMonths === 120 && price <= 14999) ||
            (loanTermMonths === 144 && price >= 15000 && price <= 24999) ||
            (loanTermMonths === 180 && price >= 25000 && price <= 49999) ||
            (loanTermMonths === 240 && price >= 50000)) {
            return Math.round(price);
        }
    }
}

onMounted(() => {
  if (route.query.minPrice && route.query.maxPrice) {
    store.priceValues = [
      Number(route.query.minPrice),
      Number(route.query.maxPrice),
    ];
  }
});
</script>
