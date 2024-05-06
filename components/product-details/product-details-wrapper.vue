<template>
  <a href="/details" id="quickview-image">
    <img src="/img/custom/quickview.png" />
  </a>
</template>

<script setup lang="ts">
import { useProductStore } from '@/pinia/useProductStore';
import { type IProduct } from '@/types/product-type';
import { useCartStore } from "@/pinia/useCartStore";
import { useCompareStore } from "@/pinia/useCompareStore";
import { useWishlistStore } from "@/pinia/useWishlistStore";

// store
const compareStore = useCompareStore();
const wishlistStore = useWishlistStore();
const productStore = useProductStore();
const cartStore = useCartStore();
// props
const props = withDefaults(defineProps<{product:IProduct;isShowBottom?:boolean}>(), {
  isShowBottom:true,
})
let textMore = ref<boolean>(false)

const hasColorData = computed(() =>
  props.product.imageURLs.some(item => item?.color && item?.color?.name)
);

</script>
<style>
.tp-product-modal-content {
  padding: 0;
}
button.tp-product-modal-close-btn {
  display: none;
}
#quickview-image,
#quickview-image img {
  width: 100%;
}
</style>
