<template>
  <div>
    <!-- filter container start -->
    <header-sub />
    <!-- filter container end -->

    <!-- breadcrumb start -->
    <breadcrumb-1 :title="`${title} for sale`" page="RVs" :current="title"/>
    <!-- breadcrumb end -->

    <!-- shop filter offcanvas area start -->
    <shop-filter-offcanvas-area/>
    <!-- shop filter offcanvas area end -->

    <!-- begin - bottom banner (todo: move to a component) -->
    <div class="bottom-banner">

      <div class="container">

        <div class="row">
          <div class="col-12">
            <h2>Navigate Your Journey: Trade-In Assessment and Financing Solutions.</h2>
            <nuxt-link class="white-button">Value Your Trade</nuxt-link>
            <nuxt-link class="red-button">Apply For Financing Today!</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- begin - bottom banner -->

    <!-- offcanvas sidebar start -->
    <!-- <offcanvas-sidebar/> -->
    <!-- offcanvas sidebar end -->
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Shop Filter Offcanvas Page" });
const route =  useRoute()
const title = computed(() => /^[+-]?\d+$/.test(`${route.query.style}`) ? lables[route.query.style as string] : 'Rvs')
const lables: any = { 4: '5th wheel', 7: 'Motorhome', 13: 'Travel Trailer' }
</script>
