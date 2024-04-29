<template>
  <div class="tp-product-item-2">
    <div class="tp-product-thumb-2 p-relative z-index-1 fix w-img">
      <nuxt-link href="/details">
        <img :src="item.img" alt="product-img" />
      </nuxt-link>

      <!-- product action -->
      <div style="display: none;" class="tp-product-action-2 tp-product-action-blackStyle">
        <div class="tp-product-action-item-2 d-flex flex-column">
          <button
              @click="wishlistStore.add_wishlist_product(item)"
              type="button"
              :class="`tp-product-action-btn-2 tp-product-add-to-wishlist-btn ${isItemInWishlist(item)? 'active': ''}`"
          >
            <svg-wishlist-2 />
          </button>
          <button
              type="button"
              class="tp-product-action-btn-2 tp-product-quick-view-btn"
              data-bs-toggle="modal"
              :data-bs-target="`#${utilityStore.modalId}`"
              @click="utilityStore.handleOpenModal(`product-modal-${item.id}`,item)"
          >
            <svg-quick-view />
          </button>
        </div>
      </div>
    </div>
    <div class="tp-product_content">
      <h3 class="tp-product_title">
        <nuxt-link href="/details">2020 Chevrolet Blazer</nuxt-link>
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
      <div class="tp-product_price">
        <div>
          <span class="price">As Low As $800/Month</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type IProduct } from "@/types/product-type";
import { useUtilityStore } from "@/pinia/useUtilityStore";
import { useWishlistStore } from "@/pinia/useWishlistStore";

const wishlistStore = useWishlistStore();
const utilityStore = useUtilityStore();

function isItemInWishlist(product: IProduct) {
  return wishlistStore.wishlists.some((prd) => prd.id === product.id);
}

const props = withDefaults(
    defineProps<{ item: IProduct; spacing?: boolean }>(),
    {
      spacing: true,
    }
);
</script>