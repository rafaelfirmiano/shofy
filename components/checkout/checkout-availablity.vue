<template>
  <div class="tp-checkout-bill-form bg-light p-4">
    <h4 class="text-center">Check Availability</h4>
      <div class="tp-checkout-bill-inner mb-4 pb-4">
          <div class="row">
            <div class="col-md-6">
                <div class="tp-checkout-input">
                  <input type="text" placeholder="First Name" />
                </div>
            </div>
            <div class="col-md-6">
                <div class="tp-checkout-input">
                  <input type="text" placeholder="Last Name" />
                </div>
            </div>
            <div class="col-md-12">
                <div class="tp-checkout-input">
                  <input type="email" placeholder="Email" />
                </div>
            </div>
            <div class="col-md-12">
                <div class="tp-checkout-input">
                  <input type="text" placeholder="Phone">
                </div>
            </div>
            <div class="col-md-12">
                <div class="tp-checkout-input">
                  <input type="text" placeholder="Message" />
                </div>
            </div>
          </div>
          <div>
            <div class="d-flex gap-3 mb-2">
                <input type="checkbox">
                <label>I consent to receive text messages from Midway Auto & RV</label>
            </div>
          </div>
          <div class="tp-checkout-btn-wrapper">
              <button type="submit" class="tp-checkout-btn w-100 bg-danger">Send</button>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const changeHandler = (e: { value: string; text: string }, index: number) => {
  console.log(e);
};
</script>

<style>
.tp-checkout-bill-form {
  border-radius: 12px;
}
</style>
