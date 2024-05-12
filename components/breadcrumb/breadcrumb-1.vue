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
}>();
</script>