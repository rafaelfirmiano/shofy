<template>
  <div
      :class="`offcanvas__area offcanvas__radius ${
      utilsStore.openMobileMenus ? 'offcanvas-opened' : ''
    }`"
  >
    <div class="offcanvas__wrapper">
      <div class="offcanvas__close">
        <button
            @click="utilsStore.handleOpenMobileMenu()"
            class="offcanvas__close-btn offcanvas-close-btn"
        >
          <svg-close-2 />
        </button>
      </div>
      <div class="offcanvas__content">
        <div
            class="offcanvas__top mb-70 d-flex justify-content-between align-items-center"
        >
          <div class="offcanvas__logo logo">
            <nuxt-link href="/">
              <img src="/img/custom/logo.svg" alt="logo" />
            </nuxt-link>
          </div>
        </div>
        <div class="tp-main-menu-mobile fix d-lg-none mb-40">
          <!-- mobile menus start -->
          <header-component-mobile-menus />
          <!-- mobile menus end -->
        </div>
      </div>
    </div>
  </div>

  <div
      @click="utilsStore.handleOpenMobileMenu()"
      :class="`body-overlay ${utilsStore.openMobileMenus ? 'opened' : ''}`"
  ></div>
</template>

<script setup lang="ts">
import { useUtilityStore } from "@/pinia/useUtilityStore";
const props = defineProps<{ productType: string }>();
const utilsStore = useUtilityStore();

let isToggleActive = ref<string>("");
// handle active
const handleToggleActive = (type: string) => {
  if (type === isToggleActive.value) {
    isToggleActive.value = "";
  } else {
    isToggleActive.value = type;
  }
};
</script>