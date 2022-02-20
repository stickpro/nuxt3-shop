<template>
    {{ isTablet }}
    <general-modal
        type="sm"
        class="city-selection-modal"
        :header="header"
        @close="onClose"
        :is-mobile="isTablet"
    >
    </general-modal>
</template>
<script setup lang="ts">
import useMq from "~/composables/useMq";

const header = "Выберите город";

const { isTablet } = useMq();

const onClose = () => {
    emit;
};
</script>
