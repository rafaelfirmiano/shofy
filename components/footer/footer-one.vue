<template>
  <footer>
    <div class="tp-footer-area">
      <div class="tp-footer-top">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div class="tp-footer-widget-content">
                <div class="tp-footer-logo">
                  <nuxt-link href="/">
                    <img src="/img/custom/footer-logo.svg" alt="logo">
                  </nuxt-link>
                </div>
                <p class="tp-footer-desc time"><svg-clock /> Monday - Saturday: 9:00am - 7:00pm</p>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8">
              <nav class="tp-footer-menu">
                <ul>
                  <li><nuxt-link href="/">Home</nuxt-link></li>
<!--                  <li><nuxt-link href="/services">Services</nuxt-link></li>-->
<!--                  <li><nuxt-link href="/value-your-trade">Values your trade</nuxt-link></li>-->
                  <li><nuxt-link href="/finance">Finance</nuxt-link></li>
<!--                  <li><nuxt-link href="/news">News</nuxt-link></li>-->
<!--                  <li><nuxt-link href="#">Privacy Policy</nuxt-link></li>-->
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <!-- bottom area start -->
      <div class="tp-footer-bottom">
        <div class="container">
          <div class="tp-footer-bottom-wrapper">
            <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-3">
              <div class="col">
                <div class="tp-footer-widget">
                  <h4 class="tp-footer-widget-title">Midway Auto & RV - Billings</h4>
                  <ul class="tp-footer-widget-contact">
                    <li>
                      <div class="tp-footer-contact-icon">
                        <svg-location-2 />
                      </div>
                      <div class="tp-footer-contact-content">
                        6260 S. Frontage Rd. Billings, MT 59101
                      </div>
                    </li>
                    <li>
                      <div class="tp-footer-contact-icon">
                        <svg-phone />
                      </div>
                      <div class="tp-footer-contact-content">
                        (406) 831-7232
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col">
                <div class="tp-footer-widget">
                  <h4 class="tp-footer-widget-title">Midway Auto & RV - Cody</h4>
                  <ul class="tp-footer-widget-contact">
                    <li>
                      <div class="tp-footer-contact-icon">
                        <svg-location-2 />
                      </div>
                      <div class="tp-footer-contact-content">
                        2226 Big Horn Ave Cody, WY 82414
                      </div>
                    </li>
                    <li>
                      <div class="tp-footer-contact-icon">
                        <svg-phone />
                      </div>
                      <div class="tp-footer-contact-content">
                        (307) 587-7571
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col">
                <div class="tp-footer-widget">
                  <h4 class="tp-footer-widget-title">Midway Auto & RV - Sheridan</h4>
                  <ul class="tp-footer-widget-contact">
                    <li>
                      <div class="tp-footer-contact-icon">
                        <svg-location-2 />
                      </div>
                      <div class="tp-footer-contact-content">
                        1506 N Main St. Sheridan, WY 82801
                      </div>
                    </li>
                    <li>
                      <div class="tp-footer-contact-icon">
                        <svg-phone />
                      </div>
                      <div class="tp-footer-contact-content">
                        (307) 456-4304
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col">
                <div class="tp-footer-widget">
                  <h4 class="tp-footer-widget-title">Midway Auto & RV - Worland</h4>
                  <ul class="tp-footer-widget-contact">
                    <li>
                      <div class="tp-footer-contact-icon">
                        <svg-location-2 />
                      </div>
                      <div class="tp-footer-contact-content">
                        500 Big Horn Ave Worland, WY 82401
                      </div>
                    </li>
                    <li>
                      <div class="tp-footer-contact-icon">
                        <svg-phone />
                      </div>
                      <div class="tp-footer-contact-content">
                        (307) 347-4123
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tp-footer-copyright">
        <p class="tp-footer-desc">© 2002 - {{ new Date().getFullYear() }} Midway Auto & RV | All Rights Reserved</p>
      </div>
      <!-- bottom area end -->
    </div>
  </footer>
</template>
<script setup lang="ts">
</script>