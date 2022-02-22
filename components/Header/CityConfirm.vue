<template>
    <general-popup-panel
        popover-class="v-popper--white city-confirmation-panel"
        placement="top-start"
        :header="header"
        :open="isCityConfirmationOpen"
        showCloseBtn
        @close="onClose"
        @hide="onClose"
    >
        <slot />
        <template v-slot:body>
            <v-button class="city-confirmation-panel__controls-btn"
                >Да, все верно</v-button
            >
            <v-link
                tag="button"
                @click="openModalCity"
                class="city-confirmation-panel__controls-btn"
            >
                Нет, выбрать другой
            </v-link>
        </template>
    </general-popup-panel>
</template>
<script setup lang="ts">
import { useGeoStore } from "@/store/geo";
import { useModalStore } from "@/store/modal";
import { mapActions } from "pinia";

const geo = useGeoStore();
const modal = useModalStore();

const header = computed(() => `Ваш город ${geo.city}?`);
const isCityConfirmationOpen = ref(true);

const onClose = () => {
    geo.isCityConfirmationOpen = false;
};

const { changeModal } = modal;
const openModalCity = function () {
    changeModal({ category: "general", name: "CITY_SELECTION", state: true });
};

onMounted(() => {
    setTimeout(() => {
        isCityConfirmationOpen.value = geo.isCityConfirmationOpen;
    }, 2000);
});
</script>
<style lang="postcss">
.city-confirmation-panel {
    position: fixed;
    top: 32px;
    left: 0;
    z-index: 9999;
    width: 100%;
    transition: top 0.2s ease-in;
    pointer-events: none;
    .v-popper__wrapper {
        position: relative;
        min-width: 320px;
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 108px;
    }
    .v-popper__inner {
        max-width: 375px;
        padding: 24px;
        background-color: #fff;
        box-shadow: 0 5px 40px rgb(0 0 0 / 10%);
        pointer-events: all;
    }
    &__header,
    &__controls {
        display: flex;
        align-items: center;
    }

    &__header {
        margin-bottom: calc(var(--gs) * 3);

        &-hl {
            margin-bottom: 0;
        }

        &-close {
            display: flex;
            margin-left: auto;
        }
    }

    &__controls {
        &-btn {
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            letter-spacing: 0.05em;

            &:first-of-type {
                padding: 10px calc(var(--gs) * 2);
                margin-right: calc(var(--gs) * 3);
            }
        }
    }

    .tooltip-arrow {
        display: none;
    }

    &.tooltip[x-placement^="bottom"] {
        padding-top: calc(var(--gs) * 1.75);
    }
}
</style>
