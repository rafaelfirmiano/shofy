<template>
    <div>
      <!-- filter container start -->
      <header-sub />
      <!-- filter container end -->
  
      <!-- breadcrumb start -->
      <breadcrumb-1
        title="Trailer for sale"
        page="Powersports"
        :current="$route.query.style ? `${$route.query.style}` : 'Trailer'"
      />
      <!-- breadcrumb end -->
  
      <!-- shop filter offcanvas area start -->
      <shop-filter-offcanvas-area :bodyType="89" />
      <!-- shop filter offcanvas area end -->
  
      <!-- offcanvas sidebar start -->
      <!-- <offcanvas-sidebar /> -->
      <!-- offcanvas sidebar end -->
    </div>
  </template>
  
  <script setup lang="ts">
  useSeoMeta({ title: "Utility Offcanvas Page" });
  </script>
  