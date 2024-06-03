<template>
  <div class="container">
    <ul class="category-links">
      <li>
        <a id="RVs" :class="{'active': activeLink === 'RVs', 'highlight': currentSubtitle === 1}" class="sub-title-1" href="#" @click.prevent="toggleDropdown('RVs')">RVs</a>
      </li>
      <li>
        <a id="Vehicles" :class="{'active': activeLink === 'Vehicles', 'highlight': currentSubtitle === 2}" class="sub-title-2" href="#" @click.prevent="toggleDropdown('Vehicles')">Vehicles</a>
      </li>
      <li>
        <nuxt-link id="Boats" :class="{'active': activeLink === 'Boats', 'highlight': currentSubtitle === 3}" class="sub-title-3" href="/shop/boat" >Boats</nuxt-link>
      </li>
      <li>
        <nuxt-link id="Powersports" :class="{'active': activeLink === 'Powersports', 'highlight': currentSubtitle === 4}" class="sub-title-4" href="/shop/powersports" >Powersports</nuxt-link>
      </li>
    </ul>
    <div :class="{'d-none': !dropdownOpen, 'dropdown-filter': true}">
      <ul>
        <li>
          <a href="#" id="dropdownMenuBed" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
            <svg-bed />
            Sleeping Capacity
            <span class="arrow"></span>
          </a>
          <ul class="dropdown-menu child-option" aria-labelledby="dropdownMenuBed">
            <li>
              <label>All options
                <input type="checkbox" >
                <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
              </label>
              <div class="gradient-line"></div>
            </li>
            <li>
              <label>Sleeps 4
                <input type="checkbox" >
                <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
              </label>
              <div class="gradient-line"></div>
            </li>
            <li>
              <label>Sleeps 6
                <input type="checkbox" >
                <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
              </label>
              <div class="gradient-line"></div>
            </li>
            <li>
              <label>Sleeps 8
                <input type="checkbox" >
                <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
              </label>
              <div class="gradient-line"></div>
            </li>
            <li>
              <label>Sleeps 8
                <input type="checkbox" >
                <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
              </label>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" id="dropdownMenuWeight" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
            <svg-weight />
            Weight
            <span class="arrow"></span>
          </a>
          <ul class="dropdown-menu child-option" aria-labelledby="dropdownMenuWeight">
            <li>
              <label>All options
                <input type="checkbox" >
                <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
              </label>
              <div class="gradient-line"></div>
            </li>
            <li>
              <label>Under 3500lbs
                <input type="checkbox" >
                <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
              </label>
              <div class="gradient-line"></div>
            </li>
            <li>
              <label>Under 8500lbs
                <input type="checkbox" >
                <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
              </label>
              <div class="gradient-line"></div>
            </li>
            <li>
              <label>Under 8500lbs
                <input type="checkbox" >
                <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
              </label>
              <div class="gradient-line"></div>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" id="dropdownMenuPayment" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
            <svg-payment />
            Monthly Payment
            <span class="arrow"></span>
          </a>
          <ul class="dropdown-menu child-option" aria-labelledby="dropdownMenuPayment">
            <li>
              <label>All options
                <input type="checkbox" >
                <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
              </label>
              <div class="gradient-line"></div>
            </li>
            <li>
              <label>UNDER $199
                <input type="checkbox" >
                <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
              </label>
              <div class="gradient-line"></div>
            </li>
            <li>
              <label>$200 - $299
                <input type="checkbox">
                <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
              </label>
              <div class="gradient-line"></div>
            </li>
            <li>
              <label>OVER $300
                <input type="checkbox">
                <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
              </label>
              <div class="gradient-line"></div>
            </li>
          </ul>
        </li>
        <li>
          <button class="browse-all">
            Browse All
          </button>
          <button class="quick-search-btn">
            <SvgSearch />
            <span>Quick Search</span>
          </button>
        </li>
      </ul>
    </div>
    <div v-if="!dropdownOpen" id="subtitle-area">
      <div id="sub-title-0" :class="{'d-none': currentSubtitle !== 0}" class="subtitle-item">
        <p>Start the buying journey here! Select an inventory category above</p>
      </div>
      <div id="sub-title-1" :class="{'d-none': currentSubtitle !== 1}" class="subtitle-item">
        <span class="sub-title-1"><svg-spin-arrow1 /><svg-spin-arrow2 /></span>
        <p>Sweet new & pre-owned 5th wheels, pull-behinds, toy haulers & motorized campers. Find the perfect floor plan!</p>
      </div>
      <div id="sub-title-2" :class="{'d-none': currentSubtitle !== 2}" class="subtitle-item">
        <span class="sub-title-2"><svg-spin-arrow2 /><svg-spin-arrow3 /></span>
        <p>Best selection of cars, trucks, SUVs & vans in the region! Let’s get started!</p>
      </div>
      <div id="sub-title-3" :class="{'d-none': currentSubtitle !== 3}" class="subtitle-item">
        <span class="sub-title-3"><svg-spin-arrow3 /><svg-spin-arrow2 /></span>
        <p>Check out these new & pre-owned boats!</p>
      </div>
      <div id="sub-title-4" :class="{'d-none': currentSubtitle !== 4}" class="subtitle-item">
        <span class="sub-title-4"><svg-spin-arrow4 /><svg-spin-arrow3 /></span>
        <p>Motorcycles, Snowmobiles, ATVs, & More! Click Here!</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const dropdownOpen = ref(false);
const activeLink = ref<string | null>(null);
const currentSubtitle = ref(0);
const redBorder = ref(false); // New reference for red border
let interval: ReturnType<typeof setInterval>;

const startInterval = () => {
  interval = setInterval(() => {
    currentSubtitle.value = (currentSubtitle.value + 1) % 5;
  }, 2000);
};

const stopInterval = () => {
  clearInterval(interval);
};

const toggleDropdown = (id: string) => {
  if (activeLink.value === id) {
    dropdownOpen.value = false;
    activeLink.value = null;
    startInterval(); // Restart the interval when the dropdown is closed
    redBorder.value = true; // Show red border when dropdown is closed
  } else {
    dropdownOpen.value = true;
    activeLink.value = id;
    stopInterval(); // Stop the interval when the dropdown is opened
    currentSubtitle.value = false; // Remove red border when dropdown is opened
  }
};

onMounted(() => {
  startInterval(); // Start the interval when the component is mounted
});

onBeforeUnmount(() => {
  stopInterval(); // Clear the interval when the component is unmounted
});
</script>
