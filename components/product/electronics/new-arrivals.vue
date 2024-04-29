<template>
  <section class="tp-product-arrival-area pb-55">
    <div class="container">
      <div class="row align-items-end tp-section-title-outter">
        <div class="col-8 col-xl-5 col-sm-6 p-lg-0">
          <div class="tp-section-title-wrapper">
            <h3 class="tp-section-title">
              Most Popular
            </h3>
          </div>
        </div>
        <div class="col-4 col-xl-7 col-sm-6 d-none d-md-block p-lg-0">
          <div class="tp-product-arrival-more-wrapper d-flex justify-content-end ">
            <div class="tp-product-arrival-arrow tp-swiper-arrow mb-40 text-end tp-product-arrival-border">
              <button type="button" class="tp-arrival-slider-button-prev me-2">
                <svg-prev-nav />
              </button>
              <button type="button" class="tp-arrival-slider-button-next">
                <svg-next-nav />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-product-arrival-slider fix">
            <Swiper
                :slidesPerView="4"
                :spaceBetween="30"
                :pagination="{
                el: '.tp-arrival-slider-dot',
                clickable: true,
              }"
                :navigation="{
                nextEl: '.tp-arrival-slider-button-next',
                prevEl: '.tp-arrival-slider-button-prev',
              }"
                :breakpoints="{
                '1200': {
                  slidesPerView: 4,
                },
                '992': {
                  slidesPerView: 3,
                },
                '768': {
                  slidesPerView: 2,
                },
                '576': {
                  slidesPerView: 2,
                },
                '0': {
                  slidesPerView: 1,
                },
              }"
                :modules="[Pagination, Navigation]"
                class="tp-product-arrival-active swiper-container"
            >
              <SwiperSlide v-for="(item, i) in new_arrivals" :key="i">
                <ProductElectronicsItem :item="item" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="tp-product-arrival-more-wrapper mobile d-flex justify-content-end d-md-none">
            <div class="tp-product-arrival-arrow tp-swiper-arrow mb-40 text-end tp-product-arrival-border">
              <button type="button" class="tp-arrival-slider-button-prev me-2">
                <svg-prev-nav />
              </button>
              <div class="tp-arrival-slider-dot"></div>
              <button type="button" class="tp-arrival-slider-button-next">
                <svg-next-nav />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";

import product_data from "@/data/product-data";

const new_arrivals = product_data.filter(p => p.productType === 'electronics').slice(-5);
</script>