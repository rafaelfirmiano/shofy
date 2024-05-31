<template>
    <product-details-breadcrumb :item="item" />
    <div class="container d-flex gap-4 mt-4">
        <div class="image_carasouel">
            <div class="price_image mt-4 pt-2">
                <h3 class="text-dark"> As Low As {{ utilsStore.calculateMonthlyPayment(Number(item?.bprice)) }} /Month</h3>
            </div>
            <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
                <Slide v-for="slide in 10" :key="slide">
                    <div class="carousel__item">
                        <img :src="`${BASE_IMG}big/${item?.alias}-${`${item?.stocknum}`.toLowerCase()}-${slide + 1}.jpg`" @error="(e) => handleImageError(e, true)"/>
                    </div>
                </Slide>
            </Carousel>

            <Carousel
                id="thumbnails"
                :items-to-show="5"
                :wrap-around="true"
                snap-align="center"
                v-model="currentSlide"
                ref="carousel"
            >
                <Slide v-for="slide in 10" :key="slide">
                    <div class="carousel__item" @click="slideTo(slide - 1)" :class="{'border border-2 border-danger': slide - 1 === currentSlide}">
                        <img :src="`${BASE_IMG}thumbs/${item?.alias}-${`${item?.stocknum}`.toLowerCase()}-${slide + 1}.jpg`" @error="handleImageError"/>
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
        <div class="d-flex flex-column gap-2 availablity">
            <div class="price_info">
                <p class="d-flex justify-content-between fw-lighter"><span>MSRP:</span> $123,456</p>
                <div class="divider"></div>
                <p  class="d-flex justify-content-between text-danger fw-bold"><span>Midway Discount:</span> $23,232</p>
                <div class="divider"></div>
                <p class="d-flex justify-content-between fw-bold"><span>Low Price:</span> {{ price }}</p>
            </div>
            <div class="d-flex gap-4 align-items-center my-4">
                <button type="submit" class="tp-checkout-btn details_btn w-100 bg-secondary">Finance</button>
                <span class="w-100 text-center">Add to favourite</span>
            </div>
            <checkout-availablity />
        </div>
    </div>

    <div class="prod_details">
        <product-details-area :item="item" />
    </div>
    <div class="prod_details">
        <product-electronics-new-arrivals />
    </div>
</template>
<style scoped>
div img {
width: 100%;
}
</style>
<script setup lang="ts">
import type { IVehicleData } from '@/types/product-type';
const { getItemById } = useDirectusItems();
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { useUtilityStore } from "@/pinia/useUtilityStore";
const utilsStore = useUtilityStore();

const route = useRoute()
const item = ref<IVehicleData>()
const currentSlide = ref<number>(0)

onMounted(async () => {
    await fetchItem()
})
const BASE_IMG = 'https://www.midwayautorv.com/media/com_expautospro/images/'

const  slideTo = (val: number) => {
    currentSlide.value = val
}

const handleImageError = (e: Event, big?: boolean) => {
  if (e.target instanceof HTMLImageElement) {
    e.target.src = `${BASE_IMG}${big ? '':'thumbs'}/no_photo.jpg`
  }
}
const fetchItem = async () => {
  try {
    item.value = await getItemById<IVehicleData>({
      collection: "expautos_admanager",
      id: route.params.id
    });
    console.log(item)
  } catch (e) {}
};

const price = computed(() => {
  if (item.value?.bprice) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(Number(item.value.bprice)).replace(/(\.|,)00$/g, '')
  }
  return 0
}) 
</script>
<style lang="scss" scoped>
h3 {
    font-family: Kanit;
    font-weight: 400;
    padding-left: 30px;
}
.image_carasouel {
    width: 65%;
}

.availablity {
    width: 35%;
}

.price_info {
   p { margin-bottom: 0px; color: white }
   .divider { margin: 5px 0; }
}

.details_btn {
    border-radius: 10px;
}

.price_image {
    background-image: url('@/assets/images/pricebg.svg');
    height: 54px;
    background-repeat: no-repeat;
    background-size: contain;
    margin-bottom: 50px;
}

.prod_details { margin-top: 80px; }
</style>
<style lang="scss">
.carousel__item img{
    border-radius: 10px;
}
#thumbnails { 
    .carousel__track { gap: 20px; }
    .carousel__prev, .carousel__next {
        height: 105px;
        width: 40px;
        background-color: #1D2024;
        margin: 0;
        border: 1px solid #fff;
        border-radius: 4px;
    }
    .carousel__icon {
        fill: white;
    }
    .carousel__viewport {
        margin-left: 50px;
        margin-right: 50px;;
    }
}
</style>