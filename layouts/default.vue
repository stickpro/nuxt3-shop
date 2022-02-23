<template>
    <div id="app" class="fake-vue-body">
        <HeaderVHeader />
        <main>
            <NuxtPage />
        </main>

        <Transition name="fade-in">
            <modal-city-selection
                v-if="isCitySelectionOpen"
            ></modal-city-selection>
        </Transition>
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
