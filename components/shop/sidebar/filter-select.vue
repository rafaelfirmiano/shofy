<template>
    <div class="tp-shop-top-select text-md-end">
      <ui-nice-select
        :options="[
          { value: '', text: 'Default' },
          { value: 'bprice', text: 'Price' },
          { value: 'year', text: 'Year' },
          { value: 'make', text: 'Make' },
          { value: 'mileage', text: 'Mileage' },
        ]"
        name="Select Category"
        :default-current="0"
        @onChange="handleSelect"
        :arrow="asc ? 'up': 'down'"
      />
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['handleSelectFilter'])
defineProps(['asc']);
const handleSelect = (e: { value: string; text: string }) => {
  emit('handleSelectFilter', e.value);
};
</script>
