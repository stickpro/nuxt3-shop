<template>
    <div
        class="modal-mask"
        @click="onClose"
        @touchstart.self.prevent="onClose"
        @touchmove.self.prevent
    >
        <div
            v-scroll-lock="lock"
            ref="wrapper"
            class="modal-wrapper"
            tabindex="0"
            @keydown="keyDown"
            :class="{ 'modal-wrapper--fullscreen': type === 'fullscreen' }"
        >
            <div
                class="modal-container popup"
                :class="{ [`popup--${type}`]: type, [`popup--${name}`]: name }"
                ref="popup"
                @mousedown="onPopupMouseDown"
                @mouseup="onPopupMouseUp"
            >
                <div class="modal-header popup__header">
                    <slot name="header">
                        <!-- Default header -->
                    </slot>
                </div>
                <div class="modal-body popup__body">
                    <slot name="body">
                        <!-- Default body -->
                    </slot>
                </div>

                <div class="modal-footer popup__footer">
                    <slot name="footer">
                        <!-- Default footer -->
                    </slot>
                </div>
                <button
                    v-if="showCloseBtn"
                    type="button"
                    title="Закрыть"
                    class="modal-default-button popup__close"
                    :class="closeBtnClass"
                    @click="emit('close')"
                >
                    <v-svg name="cross" width="24" height="24" />
                </button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

const props = defineProps({
    type: {
        type: String,
    },
    name: {
        type: String,
    },
    closeOnBtn: {
        type: Boolean,
        default: true,
    },
    isScrollLocked: {
        type: Boolean,
        default: true,
    },
    showCloseBtn: {
        type: Boolean,
        default: true,
    },
    closeBtnClass: {
        type: String,
        default: "",
    },
});
const emit = defineEmits(["closeOnBtn", "close"]);
const lock = ref(false);
const clickInside = ref(false);
const wrapper = ref(null);
const popup = ref();
const onClose = () => {
    onClickOutside(popup, () => emit("close"));
};

const onPopupMouseDown = () => {
    clickInside.value = true;
};
const onPopupMouseUp = () => {
    clickInside.value = false;
};
const keyDown = (e) => {
    switch (e.key) {
        case "Escape":
            if (props.closeOnBtn) emit("closeOnBtn");
            e.preventDefault();
            break;
    }
};

onMounted(() => {
    lock.value = props.isScrollLocked;
    wrapper.value.focus();
});
onUnmounted(() => {
    lock.value = false;
});
</script>
<style lang="postcss">
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease;
    min-width: 320px;

    /* Модификатор, чтобы попап разместить на десктопе. */
    &--relative {
        @media (--tablet-lg-min) {
            position: relative;
            background-color: transparent;
            z-index: 1;

            .modal-wrapper {
                overflow: visible;
            }

            .modal-container {
                box-shadow: none;
            }
        }
    }
}

.modal-wrapper {
    min-width: 320px;
    display: block;
    width: auto;
    max-height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;

    @media (--tablet-lg) {
        width: 100%;
    }

    @media (--tablet) {
        height: 100%;
    }

    &--fullscreen {
        width: 100%;
        height: 100%;
    }
}

.modal-container {
    width: 300px;
    margin: 0 auto;
    background-color: #fff;
    /* border-radius: 4px; */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-default-button {
    float: right;
}

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(0);
    transform: scale(0);
}

.popup {
    min-width: 320px;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 616px;
    max-width: 100%;
    /* border-radius: 8px; */

    &--image-preview {
        max-height: 100%;
        overflow-y: auto;
        @media (--desktop-min) {
            width: 80vw !important;
        }
    }

    &--filters {
        @media (--tablet-lg-min) {
            background: transparent;
        }

        @media (--tablet-lg) {
            width: 100%;
        }

        .popup__close {
            @media (--tablet-lg-min) {
                display: none;
            }
        }
    }

    &--city-selection {
        overflow: hidden;
        height: 100%;
        @media (--tablet-min) {
            height: 600px;
        }
    }

    &--auth {
        width: 480px;
    }

    &--sm {
        width: 480px;
    }

    @media (--tablet) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        min-height: 100%;
        /* border-radius: 0; */
    }

    &--wide {
        width: 900px;

        @media (--tablet) {
            width: 100%;
        }
    }

    &--fullscreen,
    &--fixed {
        width: 100%;
        min-height: 100%;
    }

    &--aside {
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 450px;
        height: 100%;

        @media (--tablet) {
            width: 100%;
        }
    }

    &--dropdown {
        width: 440px;
        text-align: left;
    }

    &--text {
        /* Здесь задаются стили для тегов и базовых классов, чтобы можно было вставлять контент из админки. */
        h3 {
            margin: calc(var(--gs) * 4) 0 calc(var(--gs) * 2);
            font-weight: bold;
        }

        p {
            margin: 0 0 calc(var(--gs) * 3);
        }

        strong {
            font-weight: bold;
        }
    }

    &__close {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: var(--gs);
        right: var(--gs);
        width: 44px;
        height: 44px;
        z-index: 1;
        fill: var(--cl-global);
        transition: all $time ease;
        cursor: pointer;

        &:hover {
            fill: var(--cl-cyan);
        }

        .icon {
            pointer-events: none;
        }
    }

    &__body {
        width: 100%;
        padding: calc(var(--gs) * 6) calc(var(--gs) * 7) calc(var(--gs) * 7);
        .popup--fullscreen & {
            /* padding: calc(var(--gs) * 5) calc(var(--gs) * 2); */
        }

        .popup--image-preview & {
            @media (--desktop-min) {
                padding: calc(var(--gs) * 3.5) calc(var(--gs) * 7)
                    calc(var(--gs) * 3.5) calc(var(--gs) * 7);
            }

            @media (--tablet-lg-min) and (--desktop) {
                padding: calc(var(--gs) * 6) calc(var(--gs) * 7)
                    calc(var(--gs) * 7);
            }
        }

        @media (--mobile-lg) {
            padding: calc(var(--gs) * 4) calc(var(--gs) * 3);
            margin: 0;
        }
    }

    &__body {
        flex-grow: 1;
        .popup--city-selection & {
            height: 100%;
            overflow: hidden;
        }

        .popup--image-preview & {
            display: flex;
            min-height: 100vh;
        }

        .popup--filters-glossary & {
            padding: 0;
        }

        @media (--tablet) {
            display: flex;
            flex-grow: 1;
        }
    }

    &__footer {
        background: var(--cl-elem-grey);

        @media (--tablet) {
            align-self: flex-end;
            flex-grow: 0;
            flex-shrink: 0;
        }
    }

    &__hl {
        @media (--tablet) {
            padding-right: calc(var(--gs) * 4);
        }
    }

    /* .modal-wrapper--fullscreen & {
        border-radius: 0;
    } */
}
</style>
