<template>
    <div>
      <!-- filter container start -->
      <header-sub />
      <!-- filter container end -->
  
      <!-- breadcrumb start -->
      <breadcrumb-1
        title="ATV for sale"
        page="powersports"
        current="ATV"
      />
      <!-- breadcrumb end -->
  
      <!-- shop filter offcanvas area start -->
      <shop-filter-offcanvas-area />
      <!-- shop filter offcanvas area end -->
  
      <!-- offcanvas sidebar start -->
      <offcanvas-sidebar />
      <!-- offcanvas sidebar end -->
    </div>
  </template>
  
  <script setup lang="ts">
  useSeoMeta({ title: "ATV Offcanvas Page" });
  </script>
  