<template>
  <section class="breadcrumb__area">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="breadcrumb-content">
            <h3 class="breadcrumb-title">{{title}}</h3>
            <div class="breadcrumb-list">
              <span><nuxt-link href="/">Home</nuxt-link></span>
              <span><nuxt-link href="/">{{page}}</nuxt-link></span>
              <span>{{current}}</span>
            </div>
            <p>{{subtitle}}</p>
            <div class="breadcrumb-button" v-if="is_button">
              <nuxt-link :href="button_url">{{ button_text }}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  page: string;
  subtitle: string;
  current: string;
  is_button: string;
  button_url: string;
  button_text: string;
}>();
</script>