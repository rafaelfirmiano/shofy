<template>
    <div>
      <!-- filter container start -->
      <header-sub />
      <!-- filter container end -->
  
      <!-- breadcrumb start -->
      <breadcrumb-1
        title="Boats for sale"
        page="Boats"
        current="boats"
      />
      <!-- breadcrumb end -->
  
      <!-- shop filter offcanvas area start -->
      <shop-filter-offcanvas-area :bodyType="92" />
      <!-- shop filter offcanvas area end -->
  
      <!-- offcanvas sidebar start -->
      <!-- <offcanvas-sidebar /> -->
      <!-- offcanvas sidebar end -->
    </div>
  </template>
  
  <script setup lang="ts">
  useSeoMeta({ title: "Boats Offcanvas Page" });
  </script>
  