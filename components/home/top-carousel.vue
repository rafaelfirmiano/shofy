<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div>
            <Swiper
                :slidesPerView="2"
                :spaceBetween="32"
                :pagination="{
                el: '.slider-dot',
                clickable: true,
              }"
                :breakpoints="{
                '1200': {
                  slidesPerView: 2,
                },
                '992': {
                  slidesPerView: 2,
                },
                '768': {
                  slidesPerView: 1,
                },
                '576': {
                  slidesPerView: 1,
                },
                '0': {
                  slidesPerView: 1,
                },
              }"
                :modules="[Pagination, Navigation]"
                class="tp-product-arrival-active swiper-container"
            >
              <SwiperSlide v-for="(product, index) in new_arrivals" :key="index">
                <div class="top-carousel-item">
                  <div class="title-above">Starting at <span>{{ product.startingPrice }}</span></div>
                  <div class="title">{{ product.title }}</div>
                  <div class="text">Exclusive offer <span>{{ product.discount }}</span> off this week</div>
                  <nuxt-link class="finance-btn" href="/finance">Finance</nuxt-link>
                  <nuxt-link class="explore-options-btn" style="cursor: default;">Explore Options <svg-arrow-right /></nuxt-link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <div>
              <div class="slider-dot"></div>
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

const new_arrivals = [
  {
    startingPrice: "$800.00",
    title: "RV for your family",
    discount: "-35%"
  },
  {
    startingPrice: "$800.00",
    title: "RV for your family",
    discount: "-35%"
  },
  {
    startingPrice: "$800.00",
    title: "RV for your family",
    discount: "-35%"
  },
  {
    startingPrice: "$800.00",
    title: "RV for your family",
    discount: "-35%"
  }
];
</script>
