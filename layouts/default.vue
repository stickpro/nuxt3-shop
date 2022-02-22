<template>
  <div id="app" class="fake-vue-body">
    <HeaderVHeader />
    <main>
      <NuxtPage />
    </main>
    <transition name="fade-in">
      <div>
        <modal-city-selection v-if="isCitySelectionOpen" />
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">

</script>
<style>
@import "@/assets/styles/App.css";
</style>
