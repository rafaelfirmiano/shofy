<template>
  <div>
    <!-- filter container start (todo: move to a component) -->
    <div class="quick-search-container">
      <div class="container">
        <ul class="category-links">
          <li><a class="active" href="#">RVs</a></li>
          <li><a href="#">Vehicles</a></li>
          <li><a href="#">Boats</a></li>
          <li><a href="#">Powersports</a></li>
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
    <!-- filter container end -->

    <!-- breadcrumb start -->
    <breadcrumb-1 title="RVs for sale in Montana" page="RVs" current="Motorhomes"/>
    <!-- breadcrumb end -->

    <!-- shop filter offcanvas area start -->
    <shop-filter-offcanvas-area/>
    <!-- shop filter offcanvas area end -->

    <!-- begin - bottom banner (todo: move to a component) -->
    <div class="bottom-banner">

      <div class="container">

        <div class="row">
          <div class="col-12">
            <h2>Navigate Your Journey: Trade-In Assessment and Financing Solutions.</h2>
            <nuxt-link class="white-button">Value Your Trade</nuxt-link>
            <nuxt-link class="red-button">Apply For Financing Today!</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- begin - bottom banner -->

    <!-- offcanvas sidebar start -->
    <offcanvas-sidebar/>
    <!-- offcanvas sidebar end -->
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Shop Filter Offcanvas Page" });


</script>
