<template>
  <div>
    <!-- filter container start -->
    <header-sub />
    <!-- filter container end -->

    <!-- breadcrumb start -->
    <breadcrumb-1
      title="Cars for sale"
      page="Cars"
      :current="$route.query.style ? `${$route.query.style}` : 'cars'"
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
</script>
