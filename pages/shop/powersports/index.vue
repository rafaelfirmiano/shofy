<template>
    <div>
      <!-- filter container start -->
      <header-sub />
      <!-- filter container end -->
  
      <!-- breadcrumb start -->
      <breadcrumb-1
        title="Powersports for sale"
        page="powersports"
        :current="title"
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
  useSeoMeta({ title: "Powersports Offcanvas Page" });
  const route = useRoute()
  const lables: any = { 86: 'ATV', 85: 'Motorcycle', 92: 'Boats', 91: 'Utiltiy', 89: 'Trailer' }
    const title = computed(()=> /^[+-]?\d+$/.test(`${route.query.style}`) ? lables[route.query.style as string] : 'All')
  </script>
  