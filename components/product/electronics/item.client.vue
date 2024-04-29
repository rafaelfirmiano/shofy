<template>
  <div class="tp-product-item carousel-prod-list">
    <div class="tp-product-thumb p-relative fix m-img">
      <nuxt-link href="/details">
        <img :src="item.img" alt="product-electronic" />
      </nuxt-link>
    </div>
    <!-- product content -->
    <div class="tp-product-content">
      <div style="display: none; " class="tp-product-sku">4d SUV AWD RS</div>
      <h3 class="tp-product-title">
        <nuxt-link href="/details">
          {{ item.title }}
        </nuxt-link>
      </h3>
      <div class="tp-product_short_description">
        <ul>
          <li><strong>Mileage:</strong>138,896</li>
          <li><strong>Color</strong>silver</li>
          <li><strong>Vin:</strong>WAUHFAFLXBN025144</li>
          <li><strong>Location:</strong>Billings MT</li>
          <li><strong>Stock:</strong>1449LB</li>
        </ul>
      </div>
      <div class="divider"></div>
      <div class="tp-product-price">As Low As $800/Month</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/pinia/useCartStore";
import { useWishlistStore } from "@/pinia/useWishlistStore";
import { useUtilityStore } from "@/pinia/useUtilityStore";
import { type IProduct } from "@/types/product-type";
import { useTimer, type UseTimer } from "vue-timer-hook";

const props = defineProps<{ item: IProduct; offer_style?: boolean }>();
const cartStore = useCartStore();
const wishlistStore = useWishlistStore();
const utilityStore = useUtilityStore();

function isItemInWishlist(product: IProduct) {
  return wishlistStore.wishlists.some((prd) => prd.id === product.id);
}
function isItemInCart(product: IProduct) {
  return cartStore.cart_products.some((prd) => prd.id === product.id);
}

let timer: UseTimer;
if (props.item.offerDate) {
  const endTime = new Date(props.item.offerDate.endDate);
  const endTimeMs = endTime.getTime();
  timer = useTimer(endTimeMs);
}
</script>