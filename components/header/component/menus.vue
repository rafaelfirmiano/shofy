<template>
  <ul class="main-menu">
    <li v-for="(item,i) in menu_data" :key="i" :class="`${item.drop_down?'has-dropdown':item.mega_menu?'has-dropdown has-mega-menu':''}`">

      <nuxt-link v-if="!item.drop_down" :href="item.link" :id="item.attr_id">{{item.title}}</nuxt-link>

      <nuxt-link v-else class="dropdown-toggle" :href="item.link" role="button" :id="item.attr_id" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
        {{ item.title }}
      </nuxt-link>
      <ul v-if="item.drop_down && item.drop_down_type == 'shop'" class="dropdown-menu dropdown-parent" :aria-labelledby="item.attr_id" >
        <li>
          <a class="dropdown-item" href="#" role="button" id="RVDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
            <div class="inner-text">
              <div class="image-menu-item RV">
                <svg-rv />
              </div>
              RVs<div class="arrow-right"></div>
              <div class="gradient-line"></div>
            </div>
          </a>

          <ul class="dropdown-menu dropdown-submenu" aria-labelledby="RVDropdownMenuLink">
            <li>
              <a class="dropdown-item" href="/shop/rvs">Browse All RVs
                <div class="gradient-line"></div>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/shop/rvs?style=5th-wheel">5th Wheels
                <div class="gradient-line"></div>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/shop/rvs?style=motorhome">Motorhomes</a>
              <div class="gradient-line"></div>
            </li>
            <li>
              <a class="dropdown-item" href="/shop/rvs?style=travel-trailer">Travel Trailers
                <div class="gradient-line"></div>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/shop/rvs?style=toy-Hauler">Toy Haulers
                <div class="gradient-line"></div>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/shop/rvs?style=pop-up">Pop up
                <div class="gradient-line"></div>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/shop/rvs?style=slide-in">Slide In
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a class="dropdown-item" href="#" role="button" id="vehiclesDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
            <div class="inner-text">
              <div class="image-menu-item Vehicles">
                <svg-vehicles />
              </div>
              Vehicles<div class="arrow-right"></div>
              <div class="gradient-line"></div>
            </div>
          </a>
          <ul class="dropdown-menu dropdown-submenu" aria-labelledby="vehiclesDropdownMenuLink">
            <li>
              <a class="dropdown-item" href="/shop/auto">All Cars
                <div class="gradient-line"></div>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/shop/auto?style=trucks">Trucks
                <div class="gradient-line"></div>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/shop/auto?style=suv">SUV
                <div class="gradient-line"></div>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/shop/auto?style=vans">Vans</a>
            </li>
          </ul>
        </li>
        <li>
          <a class="dropdown-item" href="#" role="button" id="PowersportsDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
            <div class="inner-text">
              <div class="image-menu-item Powersports">
                <svg-powersports />
              </div>
              Powersports<div class="arrow-right"></div>
              <div class="gradient-line"></div>
            </div>
          </a>
          <ul class="dropdown-menu dropdown-submenu" aria-labelledby="PowersportsDropdownMenuLink">
            <li>
              <a class="dropdown-item" href="/shop/motorcycle">Motorcycle
                <div class="gradient-line"></div>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/shop/atv">ATV
                <div class="gradient-line"></div>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/shop/utility">Utility</a>
            </li>
          </ul>
        </li>
        <li>
          <a class="dropdown-item" href="/shop/boat">
            <div class="inner-text">
              <div class="image-menu-item Boats">
                <svg-boats />
              </div>
              Boats
            </div>
          </a>
        </li>
      </ul>
      <ul v-if="item.drop_down && item.drop_down_type == 'default'" class="dropdown-menu dropdown-parent default" :aria-labelledby="item.attr_id" >
        <li>
          <a class="dropdown-item" href="/company/about">
            About Us
            <div class="gradient-line"></div>
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="/company/team">
            Our Team
            <div class="gradient-line"></div>
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="/company/contact">
            Contact Us
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { menu_data } from "@/data/menu-data";
</script>
