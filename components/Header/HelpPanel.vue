<template>
    <general-popup-panel
        popover-class="v-popper--white help-panel"
        placement="bottom-end"
        show-bottom
        :open="isOpen.value"
        @hide="onHide"
    >
        <div class="help-panel__slot" @click="onClick">
            <slot />
        </div>
        <template #header>
            <div class="help-panel__top">
                <div class="text-grey">Каждый день с 9:00 до 21:00</div>
                <div class="text-bold help-panel__phone">8 800 707-90-70</div>
            </div>
            <div class="help-panel__controls" @click="onHide()">
                <v-svg
                    class="help-panel__close-btn"
                    name="cross"
                    width="25"
                    height="25"
                />
            </div>
        </template>
    </general-popup-panel>
</template>
<script setup lang="ts">
import { reactive } from "vue";
const isOpen = reactive({ value: false });

const onClick = () => (isOpen.value = !isOpen.value);
const onHide = () => (isOpen.value = false);
</script>
<style lang="postcss">
.help-panel {
    min-width: 336px;

    .general-popup-panel__header {
        align-items: flex-start;
        margin-bottom: calc(var(--gs) * 3);
        justify-content: space-between;
    }

    .general-popup-panel__body {
        display: block;
    }

    .general-popup-panel__bottom {
        display: block;
    }

    .tooltip-arrow {
        display: none;
    }

    &__phone {
        font-size: 24px;
        line-height: 32px;
        letter-spacing: 0.03em;
    }

    &__info {
        margin-bottom: var(--gs);
    }

    &__socials {
        margin-bottom: calc(var(--gs) * 4);
        display: flex;

        &-icon {
            margin-left: calc(var(--gs) * 3);
            cursor: pointer;

            &:first-of-type {
                margin-left: 0;
            }
        }
    }

    &__links {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    &__link {
        text-transform: none;
        font-size: 16px;
        line-height: 32px;
        font-weight: normal;

        &:hover {
            text-decoration: underline;
        }
    }

    &__slot {
        display: flex;
        align-items: center;

        &:hover {
            cursor: pointer;
        }
    }

    &__controls {
        display: flex;

        &:hover {
            cursor: pointer;
        }
    }
}
</style>
