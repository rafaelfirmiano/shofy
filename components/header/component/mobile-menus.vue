<template>
  <nav class="tp-main-menu-content">
    <ul>
      <li v-for="(menu, i) in mobile_menu" :key="i">
        <nuxt-link v-if="!menu.drop_down" :key="i" :to="menu.link">{{ menu.title }}</nuxt-link>

        <nuxt-link class="dropdown-link" v-else :href="menu.link" role="button" id="dropdownMobileMenuLink" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
          {{ menu.title }} <div class="arrow"></div>
        </nuxt-link>
        <div class="divider"></div>
        <ul v-if="menu.drop_down && menu.drop_down_type == 'shop'" class="dropdown-menu dropdown-parent" :aria-labelledby="menu.attr_id">
          <li>
            <a class="dropdown-item" href="#" role="button" id="RVDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
              <div class="image-menu-item RV">
                <svg-rv />
              </div>
              RV<div class="arrow"></div>
            </a>
            <ul class="dropdown-menu dropdown-submenu" aria-labelledby="RVDropdownMenuLink">
              <li>
                <a class="dropdown-item" href="/shop/rvs">Browse All RVs</a>
              </li>
              <li>
                <a class="dropdown-item" href="/shop/rvs">Toy Haulers</a>
              </li>
              <li>
                <a class="dropdown-item" href="/shop/rvs">5th Wheels</a>
              </li>
              <li>
                <a class="dropdown-item" href="/shop/rvs">Travel Trailers</a>
              </li>
              <li>
                <a class="dropdown-item" href="/shop/rvs">Motorhomes</a>
              </li>
            </ul>
          </li>
          <li>
            <a class="dropdown-item" href="#" role="button" id="vehiclesDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
              <div class="image-menu-item Vehicles">
                <svg-vehicles />
              </div>
              Vehicles<div class="arrow"></div>
            </a>
            <ul class="dropdown-menu dropdown-submenu" aria-labelledby="vehiclesDropdownMenuLink">
              <li>
                <a class="dropdown-item" href="/shop/rvs">Cars</a>
              </li>
              <li>
                <a class="dropdown-item" href="/shop/rvs">Trucks</a>
              </li>
              <li>
                <a class="dropdown-item" href="/shop/rvs">SUV</a>
              </li>
              <li>
                <a class="dropdown-item" href="/shop/rvs">Vans</a>
              </li>
            </ul>
          </li>

          <li>
            <a class="dropdown-item" href="#" role="button" id="PowersportsDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
              <div class="image-menu-item Powersports">
                <svg-powersports />
              </div>
              Powersports<div class="arrow"></div>
            </a>
            <ul class="dropdown-menu dropdown-submenu" aria-labelledby="PowersportsDropdownMenuLink">
              <li>
                <a class="dropdown-item" href="/shop/rvs">Motorhomes</a>
              </li>
              <li>
                <a class="dropdown-item" href="/shop/rvs">ATV</a>
              </li>
              <li>
                <a class="dropdown-item" href="/shop/rvs">Utility</a>
              </li>
            </ul>
          </li>
          <li>
            <a class="dropdown-item" href="/shop/rvs">
              <div class="image-menu-item Boats">
                <svg-boats />
              </div>
              Boats
            </a>
            <div class="divider"></div>
          </li>
        </ul>
        <ul v-if="menu.drop_down && menu.drop_down_type == 'default'" class="dropdown-menu dropdown-parent default" :aria-labelledby="menu.attr_id" >
          <li>
            <a class="dropdown-item" href="/company/about">About Us</a>
          </li>
          <li>
            <a class="dropdown-item" href="/company/team">Our Team</a>
          </li>
          <li>
            <a class="dropdown-item" href="/company/contact">Contact Us</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { mobile_menu } from "@/data/menu-data";

let isActiveMenu = ref<string>("");

const handleOpenSubMenu = (title: string) => {
  if (title === isActiveMenu.value) {
    isActiveMenu.value = "";
  } else {
    isActiveMenu.value = title;
  }
};
</script>


