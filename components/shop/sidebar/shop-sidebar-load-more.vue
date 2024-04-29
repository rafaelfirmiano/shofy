<template>
  <div class="tp-shop-sidebar mr-10">
    <!-- reset filter start -->
    <shop-sidebar-reset-filter :load_more="true" />
    <!-- reset filter end -->
    <!-- filter -->
    <div class="tp-shop-widget mb-35">
      <h3 class="tp-shop-widget-title no-border">Price Filter</h3>
      <!-- price filter start -->
      <shop-sidebar-price-filter :load_more="true"/>
      <!-- price filter end -->
    </div>

  </div>
</template>

<script setup lang="ts">
</script>