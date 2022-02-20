<template>
    <controls-v-modal
        v-if="!$isServer && mounted"
        class="general-modal"
        v-bind="$attrs"
        @close="$emit('close', $event)"
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

onMounted(() => {
    console.log(process);

    mounted.value = true;
});
</script>
