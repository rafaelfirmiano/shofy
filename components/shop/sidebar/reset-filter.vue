<template>
   <div class="tp-shop-widget mb-50">
      <div class="d-flex justify-content-between align-items-center">
        <button
          @click="handleFilterReset"
          class="tp-btn"
        >
          Reset Filter
        </button>
        <i @click="$emit('close')" class="fa-regular fa-xmark fs-2 close-btn cursor-pointer d-none"></i>
      </div>
    </div>
</template>

<script setup lang="ts">
import { useProductFilterStore } from '@/pinia/useProductFilterStore';
const store = useProductFilterStore();
const router = useRouter();
const route = useRoute();

const emit = defineEmits(['close', 'reset'])

const handleFilterReset = () => {
  store.handleResetFilter()
  const { path, hash } = route;
  router.replace({ path, hash });
  emit('reset')
}

</script>
