<template>
  <div id="homepage">

    <!-- begin - banner section -->
    <div id="banner-section">
      <div class="container">
        <div id="top-video">
          <img src="/img/custom/banner-carousel.svg" alt="">
        </div>
        <!-- filter container start -->
        <div class="quick-search-container">
          <home-quick-search />
        </div>
        <!-- filter container end -->
      </div>
    </div>
    <!-- end - banner section -->

    <!-- begin - category circle section -->
    <div class="category-circle-container">
      <home-category-circle />
    </div>
    <!-- end - category circle section -->

    <!-- begin - home top-carousel -->
    <div id="home-top-carousel-container">
      <home-top-carousel />
    </div>
    <!-- end - home top-carousel -->

    <!-- begin - home cards -->
    <div id="home-cards-container">
      <home-cards />
    </div>
    <!-- end - home cards -->

    <!-- begin - what-s-new -->
    <div id="what-s-new">
      <h2>What's new?</h2>
      <div class="container">
        <home-card-carousel />
      </div>
    </div>
    <!-- end -  what-s-new -->

    <!-- begin - Trending Products -->
    <div id="home-featured-products">
      <div class="container">
        <home-trending-products />
      </div>
    </div>
    <!-- end - Trending Products -->

    <!-- begin - banner bottom -->
    <div class="bottom-banner">
      <home-banner-bottom />
    </div>
    <!-- end - banner bottom -->

  </div>
</template>
<script setup lang="ts">
</script>