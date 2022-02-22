<template>
    <controls-v-modal
        v-if="mounted"
        class="general-modal"
        v-bind="$attrs"
        @close="emit('close', $event)"
        :closeBtnClass="closeBtnClass"
    >
        <template v-slot:body> test </template>
    </controls-v-modal>
</template>
<script setup lang="ts">
const mounted = ref(false);
const props = defineProps({
    header: {
        type: String,
        default: "Закрыть",
    },
    isMobile: {
        type: Boolean,
        default: false,
    },

    closeBtnClass: {
        type: String,
        default: "",
    },
});

const emit = defineEmits(["close"]);


onMounted(() => {
    mounted.value = true;
});
</script>
<style lang="postcss">
.general-modal {
    overflow-y: auto;
    padding: calc(var(--gs) * 2) 0;
    -webkit-overflow-scrolling: touch;

    @media (--tablet) {
        padding: 0;
    }

    .modal-body {
        position: relative;

        @media (--tablet-lg) {
            padding: 0;
        }
    }

    &__sticky {
        display: flex;
        flex-direction: column;
        width: 100%;

        .v-sticky__container {
            z-index: 1000;
        }
    }

    &__header {
        display: flex;
        justify-content: space-between;
        background-color: var(--cl-global);
        padding-top: calc(var(--gs) * 1.5);
        padding-bottom: calc(var(--gs) * 1.5);

        @media (--tablet-lg) {
            color: var(--cl-white);
            fill: var(--cl-white);
        }

        @media (--tablet-lg) and (--tablet-min) {
            padding-top: calc(var(--gs) * 2.5);
            padding-bottom: calc(var(--gs) * 2.5);
        }

        @media (--tablet) {
            padding-top: calc(var(--gs) * 1.5);
            padding-bottom: calc(var(--gs) * 1.5);
        }

        &-btn {
            display: flex;
            align-items: center;
            font-weight: bold;
            font-size: 14px;
            line-height: 24px;
            letter-spacing: 0.02em;
            text-transform: uppercase;

            .icon {
                margin-right: var(--gs);
            }
        }
    }
}
</style>