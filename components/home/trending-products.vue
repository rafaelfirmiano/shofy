<template>
  <h2>Trending Products</h2>
  <div class="row row-cols-md-2 row-cols-xl-4 g-3">
    <div class="col" v-for="(product, index) in products" :key="index">
      <div class="tp-product-item">
        <div class="tp-product-thumb p-relative fix m-img">
          <nuxt-link style="cursor: default;">
            <img :src="product.image" alt="" />
          </nuxt-link>
        </div>
        <!-- product content -->
        <div class="tp-product-content">
          <h3 class="tp-product-title">
            <nuxt-link style="cursor: default;">
              {{ product.title }}
            </nuxt-link>
          </h3>
          <div class="tp-product_short_description">
            <ul>
              <li v-for="(detail, detailIndex) in product.details" :key="detailIndex"><strong>{{ detail.label }}:</strong> {{ detail.value }}</li>
            </ul>
          </div>
          <div class="divider"></div>
          <div class="tp-product-price">{{ product.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const products = ref([
  {
    image: 'https://www.midwayautorv.com/media/com_expautospro/images/middle/2002-fleetwood-elkhorn-9-k-le-9986c-29.jpg',
    title: '2024 East to West ENTRADA 2200SF',
    details: [
      { label: 'Mileage', value: '138,896' },
      { label: 'Color', value: 'silver' },
      { label: 'Vin', value: 'WAUHFAFLXBN025144' },
      { label: 'Location', value: 'Billings MT' },
      { label: 'Stock', value: '1449LB' },
    ],
    price: 'As Low As $800/Month'
  },
  {
    image: 'https://www.midwayautorv.com/media/com_expautospro/images/middle/2002-fleetwood-elkhorn-9-k-le-9986c-29.jpg',
    title: '2024 East to West ENTRADA 2200SF',
    details: [
      { label: 'Mileage', value: '138,896' },
      { label: 'Color', value: 'silver' },
      { label: 'Vin', value: 'WAUHFAFLXBN025144' },
      { label: 'Location', value: 'Billings MT' },
      { label: 'Stock', value: '1449LB' },
    ],
    price: 'As Low As $800/Month'
  },
  {
    image: 'https://www.midwayautorv.com/media/com_expautospro/images/middle/2002-fleetwood-elkhorn-9-k-le-9986c-29.jpg',
    title: '2024 East to West ENTRADA 2200SF',
    details: [
      { label: 'Mileage', value: '138,896' },
      { label: 'Color', value: 'silver' },
      { label: 'Vin', value: 'WAUHFAFLXBN025144' },
      { label: 'Location', value: 'Billings MT' },
      { label: 'Stock', value: '1449LB' },
    ],
    price: 'As Low As $800/Month'
  },
  {
    image: 'https://www.midwayautorv.com/media/com_expautospro/images/middle/2002-fleetwood-elkhorn-9-k-le-9986c-29.jpg',
    title: '2024 East to West ENTRADA 2200SF',
    details: [
      { label: 'Mileage', value: '138,896' },
      { label: 'Color', value: 'silver' },
      { label: 'Vin', value: 'WAUHFAFLXBN025144' },
      { label: 'Location', value: 'Billings MT' },
      { label: 'Stock', value: '1449LB' },
    ],
    price: 'As Low As $800/Month'
  },
  {
    image: 'https://www.midwayautorv.com/media/com_expautospro/images/middle/2002-fleetwood-elkhorn-9-k-le-9986c-29.jpg',
    title: '2024 East to West ENTRADA 2200SF',
    details: [
      { label: 'Mileage', value: '138,896' },
      { label: 'Color', value: 'silver' },
      { label: 'Vin', value: 'WAUHFAFLXBN025144' },
      { label: 'Location', value: 'Billings MT' },
      { label: 'Stock', value: '1449LB' },
    ],
    price: 'As Low As $800/Month'
  },
  {
    image: 'https://www.midwayautorv.com/media/com_expautospro/images/middle/2002-fleetwood-elkhorn-9-k-le-9986c-29.jpg',
    title: '2024 East to West ENTRADA 2200SF',
    details: [
      { label: 'Mileage', value: '138,896' },
      { label: 'Color', value: 'silver' },
      { label: 'Vin', value: 'WAUHFAFLXBN025144' },
      { label: 'Location', value: 'Billings MT' },
      { label: 'Stock', value: '1449LB' },
    ],
    price: 'As Low As $800/Month'
  },
  {
    image: 'https://www.midwayautorv.com/media/com_expautospro/images/middle/2002-fleetwood-elkhorn-9-k-le-9986c-29.jpg',
    title: '2024 East to West ENTRADA 2200SF',
    details: [
      { label: 'Mileage', value: '138,896' },
      { label: 'Color', value: 'silver' },
      { label: 'Vin', value: 'WAUHFAFLXBN025144' },
      { label: 'Location', value: 'Billings MT' },
      { label: 'Stock', value: '1449LB' },
    ],
    price: 'As Low As $800/Month'
  },
  {
    image: 'https://www.midwayautorv.com/media/com_expautospro/images/middle/2002-fleetwood-elkhorn-9-k-le-9986c-29.jpg',
    title: '2024 East to West ENTRADA 2200SF',
    details: [
      { label: 'Mileage', value: '138,896' },
      { label: 'Color', value: 'silver' },
      { label: 'Vin', value: 'WAUHFAFLXBN025144' },
      { label: 'Location', value: 'Billings MT' },
      { label: 'Stock', value: '1449LB' },
    ],
    price: 'As Low As $800/Month'
  }
]);
</script>
