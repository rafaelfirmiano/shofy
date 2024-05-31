<template>
    <div class="quick-search-container">
      <div class="container">
        <ul class="category-links">
          <li><a :class="{'active': $route.name === 'shop-rvs'}" href="/shop/rvs">RVs</a></li>
          <li><a :class="{'active': $route.name === 'shop-auto'}" href="/shop/auto">Vehicles</a></li>
          <li><a :class="{'active': $route.name === 'shop-boat'}" href="/shop/boat">Boats</a></li>
          <li>
            <a 
              :class="{'active': urls.includes($route.name as string)}" 
              href="/shop/powersports"
            >
              Powersports
            </a>
          </li>
        </ul>
        <div class="dropdown-filter">
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
      </div>
    </div>
</template>
<script setup lang="ts">
const urls = ['shop-powersports', 'shop-mototcycle', 'shop-atv', 'shop-utility', 'shop-trailer']
</script>