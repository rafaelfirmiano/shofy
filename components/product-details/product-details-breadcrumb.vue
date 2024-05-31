<template>
  <section class="breadcrumb__area breadcrumb__style-2 include-bg pt-25 pb-20" v-if="item">
    <div class="container">
        <div class="row">
          <div class="col-xxl-12">
              <div class="breadcrumb__content p-relative z-index-1">
                <div class="breadcrumb__list has-icon">
                    <span class="text-light">Home</span>
                    <span class="text-light">{{category[item.catid]}}</span>
                    <span class="text-light">{{styleLabel}}</span>
                    <span class="text-light">{{item.exptitle}}</span>
                </div>
              </div>
          </div>
        </div>
        <div class="row bc_title">
          <h2 class="text-light font-primary">{{ item.exptitle }} For Sale </h2>
          <span class="text-light">{{ item.condition === '1' ? 'New' : 'Pre-Owned' }} {{ styleLabel }} {{ category[item.catid] }} In stock</span>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IVehicleData } from '@/types/product-type';
const category: any = { 2: 'RVs', 3: 'Auto', 15: 'Powersports'}
const props = defineProps<{item:IVehicleData}>()
const styleLabel = computed (() => {
  let str = ''
  str = props.item?.popup ? ' popup' : props.item?.toyhauler ? ' Toy Hauler' : props.item?.slidein ? 'slide in' : ''
  str = props.item.bodytype === '4' ? ' 5th Wheel' : props.item.bodytype === '7' ? ' Motorhome' : props.item.bodytype === '13' ? ' Travel Trailer': ''
  return str
})
</script>

<style lang="css" scoped>
h2 {
  font-family: Kanit;
  font-weight: 400
}

.breadcrumb__area {
  background: linear-gradient(to right, #791215, #1D2024);
}

.bc_title {
  margin-top: 40px;
}
</style>
