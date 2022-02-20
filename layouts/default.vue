<template>
    <div id="app" class="fake-vue-body">
        <HeaderVHeader />
        <main>
            <NuxtPage />
        </main>
        <transition name="fade-in">
            <modal-city-selection />
        </transition>
    </div>
</template>
<style>
@import "@/assets/styles/App.css";
</style>
