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
import { useModalStore } from "@/store/modal";

const modalStore = useModalStore();
const { getCurrentModal } = modalStore;
const currentModal = getCurrentModal("general", "CITY_SELECTION");
const isCitySelectionOpen = computed(() => currentModal.open);
</script>
<style>
@import "@/assets/styles/App.css";
</style>
