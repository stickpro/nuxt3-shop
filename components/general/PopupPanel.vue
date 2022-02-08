<template>
    <VDropdown
        :shown="open"
        :popperClass="[
            popoverClass,
            { 'v-popper--unmounted': !mounted },
            { 'v-popper--mounted': mounted },
        ]"
        :trigger="trigger"
        :placement="placement"
        :disabled="disabled"
        @apply-show="applyShow"
        @apply-hide="applyHide"
        @hide="onHide"
        compute-transform-origin
    >
        <slot />

        <template #popper>
            <div class="general-popup-panel__header">
                <slot name="header">
                    <h4 class="general-popup-panel__header-hl">{{ header }}</h4>
                    <button
                        v-if="showCloseBtn"
                        class="general-popup-panel__header-close"
                        @click="onClose"
                    >
                        <v-svg name="cross" width="24" height="24" />
                    </button>
                </slot>
            </div>
            <div class="general-popup-panel__body">
                <slot name="body" />
            </div>
            <div v-if="showBottom" class="general-popup-panel__bottom">
                <slot name="bottom" />
            </div>
        </template>
    </VDropdown>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
const mounted = ref(false);

onMounted(() => {
    mounted.value = true;
});
const props = defineProps({
    popoverClass: {
        type: String,
        default: "tooltip--white",
    },

    header: {
        type: String,
    },
    trigger: {
        type: Array,
        default: [],
    },
    placement: {
        type: String,
        default: "top",
    },
    open: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    showCloseBtn: {
        type: Boolean,
        default: false,
    },
    showBottom: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(["applyShow", "applyHide", "close", "hide"]);

const onHide = () => {
    emit("hide");
};
const applyShow = () => {
    emit("applyShow");
};
const applyHide = () => {
    emit("applyHide");
};
const onClose = () => {
    emit("close");
};
</script>
<style lang="postcss">
.general-popup-panel {
    .v-popper {
        display: none;

        &--mounted {
            display: block !important;
        }
    }

    &__header,
    &__bottom,
    &__body {
        display: flex;
        align-items: center;
        padding: 0 calc(var(--gs) * 3);
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

    &__bottom {
        border-top: 1px solid var(--cl-divider-grey);
        padding-top: calc(var(--gs) * 3);

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
}
</style>
