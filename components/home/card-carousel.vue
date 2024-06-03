<template>
  <div class="row row-cols-1 row-cols-xl-2 g-3">
    <div class="col">
      <div class="slide-cards-container">
        <div>
          <swiper
              :effect="'coverflow'"
              :grabCursor="true"
              :centeredSlides="true"
              :slidesPerView="'2'"
              :coverflowEffect="{
              rotate: 0,
              stretch: 0,
              depth: 400,
              modifier: 1,
              slideShadows: true,
            }"
              :pagination="false"
              :modules="modules"
              class="mySwiper"
              @slideChange="onSlideChange"
          >
            <swiper-slide v-for="(slide, index) in slides" :key="index">
              <figure><img :src="slide.image" /></figure>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="navigation-instructions">
        <span><svg-arrow-left2/></span>
        <span><svg-hand /></span>
        <span><svg-arrow-right2 /></span>
        <p>Drag or click on the image to see more</p>
      </div>
    </div>
    <div class="col">
      <div class="product-content">
        <h3 class="product-title">
          <nuxt-link href="/details">{{ currentSlide.title }}</nuxt-link>
        </h3>
        <p class="product-description">{{ currentSlide.description }}</p>
        <div class="product-short-list">
          <ul>
            <li>Mileage:<strong>{{ currentSlide.mileage }}</strong></li>
            <li>Color:<strong>{{ currentSlide.color }}</strong></li>
            <li>Vin:<strong>{{ currentSlide.vin }}</strong></li>
            <li>Location:<strong>{{ currentSlide.location }}</strong></li>
            <li>Stock:<strong>{{ currentSlide.stock }}</strong></li>
          </ul>
        </div>
        <div class="product-price">
          <span><svg-price-bg /></span>
          <span>{{ currentSlide.price }}</span>
        </div>
        <nuxt-link class="readmore" style="cursor: default;">Check It Out <svg-arrow-right /></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slides = ref([
      {
        image: 'https://www.midwayautorv.com/media/com_expautospro/images/middle/2002-fleetwood-elkhorn-9-k-le-9986c-29.jpg',
        title: '2002 Fleetwood Elkhorn 9-K-LE',
        description: 'Some description of the new vehicle. Some description of the new vehicle. Some description of the new vehicle. Some description of the new vehicle. Some description of the new vehicle.',
        mileage: '120,000',
        color: 'White',
        vin: 'VIN123456789',
        location: 'Los Angeles, CA',
        stock: 'Stock1234',
        price: 'As Low As $250/Month'
      },
      {
        image: '/img/custom/card-image1.png',
        title: '2022 Alliance RV Paradigm 385FL',
        description: 'Description for 2022 Alliance RV Paradigm 385FL.',
        mileage: '80,000',
        color: 'Blue',
        vin: 'VIN987654321',
        location: 'New York, NY',
        stock: 'Stock5678',
        price: 'As Low As $400/Month'
      },
      {
        image: 'https://midwayautorv.com/media/com_expautospro/images/middle/2024-crossroads-volante-270bh-1917b-0.jpg',
        title: '2002 Fleetwood Elkhorn 9-K-LE',
        description: 'Description for 2002 Fleetwood Elkhorn 9-K-LE.',
        mileage: '120,000',
        color: 'White',
        vin: 'VIN123456789',
        location: 'Los Angeles, CA',
        stock: 'Stock1234',
        price: 'As Low As $250/Month'
      },
      {
        image: 'https://www.midwayautorv.com/media/com_expautospro/images/middle/2022-alliance-rv-paradigm-385fl-c1351l-0.jpg',
        title: '2022 Alliance RV Paradigm 385FL',
        description: 'Description for 2022 Alliance RV Paradigm 385FL.',
        mileage: '80,000',
        color: 'Blue',
        vin: 'VIN987654321',
        location: 'New York, NY',
        stock: 'Stock5678',
        price: 'As Low As $400/Month'
      },
      {
        image: 'https://www.midwayautorv.com/media/com_expautospro/images/middle/2024-crossroads-volante-270bh-1919b-0.jpg',
        title: '2002 Fleetwood Elkhorn 9-K-LE',
        description: 'Description for 2002 Fleetwood Elkhorn 9-K-LE.',
        mileage: '120,000',
        color: 'White',
        vin: 'VIN123456789',
        location: 'Los Angeles, CA',
        stock: 'Stock1234',
        price: 'As Low As $250/Month'
      },

      // Add more slide objects as needed...
    ]);

    const currentSlide = ref(slides.value[0]);

    const onSlideChange = (swiper) => {
      currentSlide.value = slides.value[swiper.activeIndex];
    };

    return {
      modules: [EffectCoverflow, Pagination],
      slides,
      currentSlide,
      onSlideChange
    };
  }
};
</script>
