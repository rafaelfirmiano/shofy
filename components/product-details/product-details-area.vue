<template>
    <div class="tp-product-details-tab-nav tp-tab">
        <nav>
        <div class="nav nav-tabs justify-content-center p-relative tp-product-tab" id="navPresentationTab" role="tablist">
            <button  @click="handleActiveMarker($event)" class="nav-link active" id="nav-description-tab" data-bs-toggle="tab" data-bs-target="#nav-description" type="button" role="tab" aria-controls="nav-description" aria-selected="true">Description</button>

            <button @click="handleActiveMarker($event)" class="nav-link" id="nav-addInfo-tab" data-bs-toggle="tab" data-bs-target="#nav-addInfo" type="button" role="tab" aria-controls="nav-addInfo" aria-selected="false">Unit Specs</button>

            <button @click="handleActiveMarker($event)" class="nav-link" id="nav-video-tab" data-bs-toggle="tab" data-bs-target="#nav-video" type="button" role="tab" aria-controls="nav-video" aria-selected="false">video</button>

            <button @click="handleActiveMarker($event)" class="nav-link" id="nav-review-tab" data-bs-toggle="tab" data-bs-target="#nav-review" type="button" role="tab" aria-controls="nav-review" aria-selected="false">Floorplan</button>
            <span id="productTabMarker" class="tp-product-details-tab-line"></span>
        </div>
        </nav>  
        <div class="tab-content" id="navPresentationTabContent">
            <div class="tab-pane fade show active" id="nav-description" role="tabpanel" aria-labelledby="nav-description-tab" tabindex="0">
                <div class="tp-product-details-desc-wrapper pt-80">
                    <div class="d-flex justify-content-center">
                        <div class="col-xl-10">
                        <div class="tp-product-details-desc-item pb-105">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="tp-product-details-desc-content pt-25">
                                    <h3 class="tp-product-details-desc-title">{{ item?.exptitle }}</h3>
                                    <ul>
                                      <li>{{ item?.bodytype }}</li>
                                      <li>{{ item?.air_cond }}</li>
                                      <li>{{ item?.emailstyle }}</li>
                                      <li>{{ item?.zipcode }}</li>
                                    </ul>
                                    <p>{{ item?.sm_description }}</p>
                                    <p>The perfect travel trailer for a larger family or one that enjoys traveling with friends!  One large slide opens up the interior living space nice and features a u-shaped dinette and sofa to provide plenty of seating for everyone.  Enjoy the 40" HDTV opposite the sofa for a movie when indoors, and game night will be easy with everyone at the dinette which can also be converted for added sleeping if needed. The double entry doors will make loading and unloading simple, and allows you to easily slip in and out of the private bedroom for a morning walk or coffee out under the awning without disturbing those sleeping inside.  You can easily prepare all of your favorite meals and snacks with the kitchen amenities provided inside. A three burner range allows you to easy cook indoors, or you can enjoy cooking outside using the outdoor griddle/grill if you like.  There is a 10 cu. ft. refrigerator to keep all of your perishables and drinks nice and cold, plus a large sink for dishes and cleaning up, and there is also a flip-up counter extension for more prep space. You will also appreciate the rear corner bath featuring a 30" x 36" shower, toilet, vanity with sink, and linen cabinet for your towels.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-addInfo" role="tabpanel" aria-labelledby="nav-addInfo-tab" tabindex="0">
              <div class="tp-product-details-additional-info ">
                  <div class="d-flex justify-content-center">
                      <div class="col-xl-10">
                      <table>
                          <tbody>
                              <tr v-for="(info,i) in additionalInformation" :key="i">
                                  <td>{{info.key}}</td>
                                  <td>{{info.value}}</td>
                              </tr>
                          </tbody>
                      </table>
                      </div>
                  </div>
              </div>
            </div>
            <div class="tab-pane fade" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab" tabindex="0">
                <div class="tp-product-details-review-wrapper pt-60">
                  <div class="d-flex justify-content-center">
                    <img :src="`${BASE_IMG_BIG}/${item?.alias}-${`${item?.stocknum}`.toLowerCase()}-1.jpg`" alt="">
                  </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-video" role="tabpanel" aria-labelledby="nav-video-tab" tabindex="0">
                <div class="tp-product-details-review-wrapper pt-60">
                  <div class="d-flex justify-content-center">
                    <iframe width="860" height="415" src="https://www.youtube.com/embed/8WJ0WcymWdw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { type IVehicleData } from "@/types/product-type";
 const props = defineProps<{ item: IVehicleData | undefined }>()

 const BASE_IMG_BIG = 'https://www.midwayautorv.com/media/com_expautospro/images/big'

 // handleActiveMarker
const handleActiveMarker = (event: MouseEvent) => {
  const marker = document.getElementById("productTabMarker");
  if (marker && event.target) {
    marker.style.left = (event.target as HTMLButtonElement).offsetLeft + "px";
    marker.style.width = (event.target as HTMLButtonElement).offsetWidth + "px";
  }
};

 const additionalInformation = computed(() => [
  {
    key: "Length",
    value: props.item?.length,
  },
  {
    key: "Colors",
    value: props.item?.specificcolor,
  },
  {
    key: "weight",
    value: props.item?.unweight,
  },
  {
    key: "sleeps",
    value: props.item?.seats,
  },
  {
    key: "Model",
    value: props.item?.specificmodel,
  },
  {
    key: "Trans",
    value: props.item?.sm_description,
  },
  {
    key: "Make",
    value: props.item?.make,
  },
])

onMounted(() => {
  document.getElementById("nav-description-tab")?.click()
})
</script>
<style>
.tp-product-details-additional-info table tr td:first-child {
  color: white;
  background: linear-gradient(to right, #3e0f11, #1D2024 );
}

.tp-product-details-tab-nav .nav-tabs .nav-link.active {
  color: #FF6369;
  background: unset;
}

.tp-product-details-tab-line {
  background-color: #FF6369;
  height: 2px;
  bottom: -1px;
}
</style>
