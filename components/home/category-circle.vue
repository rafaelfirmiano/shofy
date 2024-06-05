<template>
  <div class="container">
    <div class="row row-cols-md-2 row-cols-xl-4 g-3">
      <div class="col">
        <div class="category-circle">
          <div class="transparent-circle">
            <div class="front ">
              <svg-rv2 />
              <div class="content">
                <div class="category-title">RVs</div>
                <nuxt-link class="options">219 options <span class="arrow-right"></span></nuxt-link>
              </div>
            </div>
          </div>
          <div class="red-circle">
            <div class="back">
              <ul>
                <li><nuxt-link href="/shop/rvs">All RVs</nuxt-link></li>
                <li><nuxt-link href="/shop/rvs?style=4">5<sup>th</sup> Wheels</nuxt-link></li>
                <li><nuxt-link href="/shop/rvs?style=13">Travel Trailers</nuxt-link></li>
                <li><nuxt-link href="/shop/rvs?style=7">Motorhomes</nuxt-link></li>
                <li><nuxt-link href="/shop/rvs?style=toyhauler">Toy Haulers</nuxt-link></li>
                <li><nuxt-link href="/shop/rvs?style=popup">Pop ups</nuxt-link></li>
                <li><nuxt-link href="/shop/rvs?style=slidein">Truck Bed</nuxt-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="category-circle">
          <div class="transparent-circle">
            <div class="front">
              <svg-vehicles2 />
              <div class="content">
                <div class="category-title">Vehicles</div>
                <nuxt-link class="options">101 options <span class="arrow-right"></span></nuxt-link>
              </div>
            </div>
          </div>
          <div class="red-circle">
            <div class="back">
              <ul>
                <li><nuxt-link href="/shop/auto">All Vehicles</nuxt-link></li>
                <li><nuxt-link href="/shop/auto">Cars</nuxt-link></li>
                <li><nuxt-link href="/shop/auto?style=55">Trucks</nuxt-link></li>
                <li><nuxt-link href="/shop/auto?style=56">SUVs</nuxt-link></li>
                <li><nuxt-link href="/shop/auto?style=60">Vans</nuxt-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="category-circle">
          <div class="transparent-circle">
            <div class="front">
              <svg-boats2 />
              <div class="content">
                <div class="category-title">Boats</div>
                <nuxt-link class="options">10 options <span class="arrow-right"></span></nuxt-link>
              </div>
            </div>
          </div>
          <div class="red-circle">
            <div class="back">
              <ul>
                <li><nuxt-link href="/shop/boat">All Boats</nuxt-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="category-circle">
          <div class="transparent-circle">
            <div class="front">
              <svg-powersports2 />
              <div class="content">
                <div class="category-title">Powersports</div>
                <div class="options">32 options <span class="arrow-right"></span></div>
              </div>
            </div>
          </div>
          <div class="red-circle">
            <div class="back">
              <ul>
                <li><nuxt-link href="/shop/motorcycle">All Powersports</nuxt-link></li>
                <li><nuxt-link href="/shop/atv">ATV</nuxt-link></li>
                <li><nuxt-link href="/shop/utility">Utility</nuxt-link></li>
                <li><nuxt-link href="/shop/trailer">Trailer</nuxt-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>