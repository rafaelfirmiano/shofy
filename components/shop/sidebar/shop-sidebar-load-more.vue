<template>
  <div class="tp-shop-sidebar mr-10">
    <!-- reset filter start -->
    <shop-sidebar-reset-filter :load_more="true" />
    <!-- reset filter end -->

    <div class="main-filter">
      <div class="accordion" id="main-filter">
        <!-- begin filter -->
        <div class="accordion-item">
            <h2 class="accordion-header" id="price-filter-accordion">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Price Filter
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="price-filter-accordion" data-bs-parent="#main-filter">
              <div class="accordion-body">
                <shop-sidebar-price-filter :load_more="true"/>
              </div>
            </div>
          </div>
        <!-- begin filter -->

        <!-- begin style -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="style-filter-accordion">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseThree">
              Style
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="style-filter-accordion" data-bs-parent="#main-filter">
            <div class="accordion-body">
              <div class="custom-checkbox">
                <div class="checkbox-item">
                  <label>5th Wheel
                    <input type="checkbox" >
                    <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
                  </label>
                </div>

                <div class="checkbox-item">
                  <label>Motorhome
                    <input type="checkbox" >
                    <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
                  </label>
                </div>

                <div class="checkbox-item">
                  <label>Travel Trailer
                    <input type="checkbox" >
                    <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
                  </label>
                </div>

                <div class="checkbox-item">
                  <label>Toy Hauler
                    <input type="checkbox" >
                    <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
                  </label>
                </div>

                <div class="checkbox-item">
                  <label>Pop-up
                    <input type="checkbox" >
                    <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
                  </label>
                </div>

                <div class="checkbox-item">
                  <label>Slide-in
                    <input type="checkbox" >
                    <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end style -->

        <!-- begin makes -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="makes-filter-accordion">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Makes
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="makes-filter-accordion" data-bs-parent="#main-filter">
            <div class="accordion-body">
              <div class="custom-checkbox">
                <div class="checkbox-item">
                  <label>Option
                    <input type="checkbox" >
                    <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end makes -->


        <!-- begin Model -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="model-filter-accordion">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
              Model
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="model-filter-accordion" data-bs-parent="#main-filter">
            <div class="accordion-body">
              <div class="custom-checkbox">
                <div class="checkbox-item">
                  <label>Option
                    <input type="checkbox" >
                    <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end Model -->


        <!-- begin Year Filter -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="year-filter-filter-accordion">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
              Model
            </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="year-filter-filter-accordion" data-bs-parent="#main-filter">
            <div class="accordion-body">
              <div class="custom-checkbox">
                <div class="checkbox-item">
                  <label>Option
                    <input type="checkbox" >
                    <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end Year Filter -->



        <!-- begin Mileage -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="mileage-filter-accordion">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
              Mileage
            </button>
          </h2>
          <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="mileage-filter-accordion" data-bs-parent="#main-filter">
            <div class="accordion-body">
              <div class="custom-checkbox">
                <div class="checkbox-item">
                  <label>option
                    <input type="checkbox" >
                    <span class="checkmark">
                      <svg-checkbox></svg-checkbox>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end Mileage -->




      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
</script>