<template>
  <div>
    <!-- breadcrumb start -->
    <breadcrumb-1
        title="About us"
        page="Company"
        current="About us"
        is_button="true"
        button_url="#"
        button_text="Contact us"
        subtitle="Midway Auto & RV specialize in offering a vast selection of high-quality pre-owned vehicles and new & used RVs to meet the needs of our diverse customers. With a commitment to customer satisfaction and top-notch service, Midway Auto & RV is the go-to destination for anyone in search of a reliable, affordable vehicle or RV.  Our team prides themselves in a no-hassle buying experience and back the sale with a knowledgeable service team."
    />
    <!-- breadcrumb end -->

    <!-- about section -->
    <div id="about-section">
      <div class="container">
        <div class="row row-cols-1 row-cols-lg-2">
          <div class="col">
            <div class="text-content">
              <h2>Our History</h2>
              <p>Midway Auto & RV was founded in 1997 when Ken Grant started his dealership with 7 cars. Midway has grown to 3 dealerships - Cody, WY, Worland, WY and Laurel, MT. We have used the past 20+ years building one of the largest pre-owned vehicle inventories in Northern Wyoming and Southern Montana.</p>
              <p>We offer the #1 selling Toy Hauler -Raptor; the #1 rated & selling full-profile 5th wheel -Montana; The #1 selling mid-profile 5th wheel -Cougar; and the #1 selling Ultra-Lite -Bullet. Being one of the largest dealerships in the region brings us a high volume of used & like-new campers through trade-ins. We have the cleanest, slightly used RVs giving you great value purchases. Midway has a camper that not only will fit your needs, but also your budget.Ask about delivery, financing, warranty and price guarantee. We provide the best RV brands at the lowest prices.</p>
            </div>
          </div>
          <div class="col">
            <figure>
              <img src="/img/custom/about1.svg" alt="" />
            </figure>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-lg-2">
          <div class="col tp-product-details-nav-main-thumb">
            <figure>
              <img src="/img/custom/about2.svg" alt="" />
            </figure>
            <div class="tp-product-details-thumb-video">
              <a
                  @click="utilsStore.playVideo('EW4ZYb3mCZk')"
                  class="tp-product-details-thumb-video-btn cursor-pointer popup-video"
              >
              </a>
            </div>
          </div>
          <div class="col">
            <div class="text-content">
              <h2>Store #1</h2>
              <p>Midway stands behind their cars, trucks, SUVs & vans with a free warranty on nearly every vehicle we sell. Our high sales volume allow us to negotiate the best rates and terms with dozens of financial institutions. We are the friendliest dealership for sub-prime customers. Midway's staff has built a reputation for being the most knowledgeable and hardest working in Northern Wyoming and Southern Montana.</p>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-lg-2">
          <div class="col">
            <div class="text-content">
              <h2>Store #2</h2>
              <p>Midway stands behind their cars, trucks, SUVs & vans with a free warranty on nearly every vehicle we sell. Our high sales volume allow us to negotiate the best rates and terms with dozens of financial institutions. We are the friendliest dealership for sub-prime customers. Midway's staff has built a reputation for being the most knowledgeable and hardest working in Northern Wyoming and Southern Montana.</p>
            </div>
         </div>
          <div class="col tp-product-details-nav-main-thumb">
            <figure>
              <img src="/img/custom/about3.svg" alt="" />
            </figure>
            <div class="tp-product-details-thumb-video">
              <a
                  @click="utilsStore.playVideo('EW4ZYb3mCZk')"
                  class="tp-product-details-thumb-video-btn cursor-pointer popup-video"
              >
              </a>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-lg-2">
          <div class="col tp-product-details-nav-main-thumb">
            <figure>
              <img src="/img/custom/about4.svg" alt="" />
            </figure>
            <div class="tp-product-details-thumb-video">
              <a
                  @click="utilsStore.playVideo('EW4ZYb3mCZk')"
                  class="tp-product-details-thumb-video-btn cursor-pointer popup-video"
              >
              </a>
            </div>
          </div>
          <div class="col">
            <div class="text-content">
              <h2>Store #3</h2>
              <p>Midway stands behind their cars, trucks, SUVs & vans with a free warranty on nearly every vehicle we sell. Our high sales volume allow us to negotiate the best rates and terms with dozens of financial institutions. We are the friendliest dealership for sub-prime customers. Midway's staff has built a reputation for being the most knowledgeable and hardest working in Northern Wyoming and Southern Montana.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- about section -->

    <!-- our values section -->
    <div id="our-values-section">
      <div class="container">
        <span class="subtitle">Our values</span>
        <h2>What do we value? All sorts of things! But we particularly pride ourselves on:</h2>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div class="col">
            <figure>
              <svg-alert-circle></svg-alert-circle>
            </figure>
            <h3>Share team inboxes</h3>
            <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
          </div>
          <div class="col">
            <figure>
              <svg-alert-circle></svg-alert-circle>
            </figure>
            <h3>Deliver instant answers</h3>
            <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
          </div>
          <div class="col">
            <figure>
              <svg-alert-circle></svg-alert-circle>
            </figure>
            <h3>Manage your team with reports</h3>
            <p>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
          </div>
          <div class="col">
            <figure>
              <svg-alert-circle></svg-alert-circle>
            </figure>
            <h3>Connect with customers</h3>
            <p>Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- our values section -->
  </div>

  <!-- video modal start -->
  <modal-video/>
  <!-- video modal end -->
</template>
<script setup lang="ts">
import { useUtilityStore } from "@/pinia/useUtilityStore";
const utilsStore = useUtilityStore();
</script>