<template>
  <div class="tp-product-item-2">
  <nuxt-link :href="`/details/${item.id}`">
    <div class="tp-product-thumb-2 p-relative z-index-1 fix w-img">
        <div class="image-container">
          <img :src="`${BASE_IMG}/${item.imgmain}`" @error="handleImageError" alt="product-img" loading="lazy" />
        </div>

      <!-- product action -->
      <div class="tp-product-action-2 tp-product-action-blackStyle">
        <div class="tp-product-action-item-2 d-flex flex-column">
          <!-- @click="wishlistStore.add_wishlist_product(item)" -->
          <button
            type="button"
            :class="`tp-product-action-btn-2 tp-product-add-to-wishlist-btn ${isItemInWishlist(item)? 'active': ''}`"
          >
            <svg-wishlist-2 />
          </button>
          <button
              type="button"
              class="tp-product-action-btn-2 tp-product-quick-view-btn"
              data-bs-toggle="modal"
          >
            <svg-quick-view />
          </button>
        </div>
      </div>
    </div>
    <div class="tp-product_content">
      <h3 class="tp-product_title">
        <nuxt-link href="/details" class="d-flex flex-column gap-2">
          {{ item.year }} {{ item.make?.name }}
          <span>{{ item.model?.name }} {{ item.specificmodel }}</span>
        </nuxt-link>
      </h3>
      <div class="tp-product_short_description">
        <ul>
          <div v-if="$route.name === 'shop-rvs'">
            <li v-if="item.seats"><strong>Sleeps:</strong>{{ item.seats }}</li>
            <li v-if="Number(item.length)"><strong>Length:</strong>{{ `${item.length}' ${item.length_in}"` }}</li>
            <li v-if="Number(item.grweight)"><strong>Weight:</strong>{{ `${item.grweight} lbs` }}</li>
          </div>
          <div v-else>
            <li v-if="Number(item.mileage) > 1"><strong>Mileage:</strong>{{ Number(item.mileage).toLocaleString() }}</li>
            <li v-if="item.specificcolor"><strong>Color:</strong>{{ item.specificcolor }}</li>
          </div>
          <li v-if="item.city?.city_name"><strong>Location:</strong>{{ item.city?.city_name }} {{ item.city?.city_state }}</li>
          <li><strong>Stock:</strong>{{ item.stocknum }}</li>
        </ul>
        <ul class="d-flex flex-column mt-1">
          <!-- <li v-if="item?.toyhauler"><strong>Garage:</strong>{{ item.hits }} feet</li> -->
          <li><strong>Condition:</strong>{{ item.condition == '1' ? 'New' : 'Pre-Owned' }}</li>
          <li v-if="styleLabel"><strong>Style:</strong>{{ styleLabel }}</li>
          <li class="d-flex align-items-center"><strong>Vin:</strong><p class="mb-0">{{ item.vincode }}</p></li>
        </ul>
      </div>
      <div class="divider"></div>
      <div class="tp-product_price">
        <div>
          <span class="price">
            {{ item.catid === '3' ? '' : 'As Low As' }} {{ price }} {{ item.catid === '3' ? '' : '/Month' }}
          </span>
        </div>
      </div>
    </div>
  </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { type IVehicleData } from "@/types/product-type";
import { useWishlistStore } from "@/pinia/useWishlistStore";

const wishlistStore = useWishlistStore();
const BASE_IMG = 'https://www.midwayautorv.com/media/com_expautospro/images/middle'

function isItemInWishlist(product: IVehicleData) {
  return wishlistStore.wishlists.some((prd) => prd.id === product.id);
}

const handleImageError = (e: Event) => {
  if (e.target instanceof HTMLImageElement) {
    e.target.src = `${BASE_IMG}/no_photo.jpg`
  }
}

const props = withDefaults(
  defineProps<{ item: IVehicleData; spacing?: boolean }>(),
  {
    spacing: true,
  }
);

const styleLabel = computed (() => {
  let str = ''
  str += props.item?.popup ? ' popup .' : props.item?.toyhauler ? ' Toy Hauler .' : props.item?.slidein ? ' slide in .' : ''
  str += props.item.bodytype === '4' ? ' 5th Wheel .' : props.item.bodytype === '7' ? ' Motorhome .' : props.item.bodytype === '13' ? ' Travel Trailer': ''
  return str
})

const price = computed(() => {
  if (props.item.bprice) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(Number(props.item.bprice)).replace(/(\.|,)00$/g, '')
  }
  return 0
}) 
</script>