<template>
  <header id="main-header">
    <div class="tp-header-area p-relative z-index-11">
      <!-- header main start -->
      <div class="tp-header-main tp-header-sticky">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-3 col-lg-3 col-md-4 col-6">
              <div class="logo">
                <nuxt-link href="/">
                  <img src="/img/custom/logo.svg" alt="logo" />
                </nuxt-link>
              </div>
            </div>
            <div class="col-xl-8 col-lg-8 d-none d-lg-block">
              <!-- top header start -->
              <div id="top-header">
                <div class="row row-cols-md-4 row-cols-xl-4 g-3">
                  <div class="col">
                    <div class="location-text">
                      <svg-location />
                      <address>Cody, WY</address>
                      <a href="tel:(307) 587-7571">(307) 587-7571</a>
                    </div>
                  </div>
                  <div class="col">
                    <div class="location-text">
                      <svg-location />
                      <address>Worland, WY</address>
                      <a href="tel:(307) 347-4123">(307) 347-4123</a>
                    </div>
                  </div>
                  <div class="col">
                    <div class="location-text">
                      <svg-location />
                      <address>Sheridan, WY</address>
                      <a href="tel:(307) 456-4304">(307) 456-4304</a>
                    </div>
                  </div>
                  <div class="col">
                    <div class="location-text">
                      <svg-location />
                      <address>Billings, MT</address>
                      <a href="tel:(406) 831-7232">(406) 831-7232</a>
                    </div>
                  </div>
                </div>
              </div>
              <!-- top header end -->
              <!-- menus start -->
              <header-component-menus />
              <!-- menus end -->
            </div>
            <div class="col-xl-1 col-lg-1 col-md-8 col-6">
              <!-- header right start -->
              <header-component-main-right />
              <!-- header right end -->
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- header sticky start -->
    <div id="header-sticky-2" :class="`tp-header-sticky-area ${isSticky ? 'header-sticky-2' : ''}`">
      <div class="container">
        <div class="tp-mega-menu-wrapper p-relative">
          <div class="row align-items-center">
            <div class="col-xl-3 col-lg-3 col-md-4 col-6">
              <div class="logo">
                <nuxt-link href="/">
                  <img src="/img/custom/logo.svg" alt="logo" />
                </nuxt-link>
              </div>
            </div>
            <div class="col-xl-8 col-lg-8 d-none d-lg-block">
              <div class="tp-header-sticky-menu main-menu menu-style-1">
                <nav id="mobile-menu">
                  <!-- menus start -->
                  <header-component-menus />
                  <!-- menus end -->
                </nav>
              </div>
            </div>
            <div class="col-xl-1 col-lg-1 col-md-8 col-6">
              <div class="tp-header-action d-flex align-items-center justify-content-end ml-50">
                <!-- header right start -->
                <header-component-main-right />
                <!-- header right end -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- header sticky end -->
  </header>
  <!-- cart offcanvas start -->
  <offcanvas-cart-sidebar/>
  <!-- cart offcanvas end -->

  <!-- cart offcanvas start -->
  <offcanvas-mobile-sidebar product-type="electronics"/>
  <!-- cart offcanvas end -->
</template>

<script setup lang="ts">
import { useCartStore } from '@/pinia/useCartStore';
import { useWishlistStore } from '@/pinia/useWishlistStore';
import { useUtilityStore} from '@/pinia/useUtilityStore';

const {isSticky} = useSticky();
const cartStore = useCartStore();
const wishlistStore = useWishlistStore();
const utilsStore = useUtilityStore();
</script>
