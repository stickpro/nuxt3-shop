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
const emit = defineEmits(["closeOnBtn"]);
const lock = ref(false);
const clickInside = ref(false);
const onClose = () => ({});
const onPopupMouseDown = () => {
    clickInside.value = true;
};
const onPopupMouseUp = () => {
    clickInside.value = false;
};
const keyDown = (e) => {
    switch (e.key) {
        case "Escape":
            if (closeOnBtn) emit("closeOnBtn");
            e.preventDefault();
            break;
    }
};

onMounted(() => {
    console.log($refs);
    lock.value = isScrollLocked;
    $refs.wrapper.focus();
});
onUnmounted(() => {
    lock.value = false;
});
</script>
