<template>
  <div>
    <!-- filter container start -->
    <header-sub />
    <!-- filter container end -->

    <!-- breadcrumb start -->
    <breadcrumb-1
      :title="`${title} for sale`"
      page="Cars"
      :current="titleC"
    />
    <!-- breadcrumb end -->

    <!-- shop filter offcanvas area start -->
    <shop-filter-offcanvas-area />
    <!-- shop filter offcanvas area end -->

    <!-- offcanvas sidebar start -->
    <!-- <offcanvas-sidebar /> -->
    <!-- offcanvas sidebar end -->
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Cars Offcanvas Page" });
const route = useRoute()
const lables: any = { 55: 'Truck', 56: 'SUV', 57: 'CARS', 60: 'VAN', 62: 'WAGON' }
const title = computed(()=> /^[+-]?\d+$/.test(`${route.query.style}`) ? lables[route.query.style as string] : 'Cars')
const titleC = computed(()=> /^[+-]?\d+$/.test(`${route.query.style}`) ? lables[route.query.style as string] : 'All')
</script>
