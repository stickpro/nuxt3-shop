<template>
  <general-modal
    type="sm"
    class="city-selection-modal"
    :header="header"
    @close="onClose"
    :is-mobile="isTablet"
  >
    <template v-slot:content>
      <div class="city-selection-modal__body">
        <h3 class="city-selection-modal__hl">{{ header }}</h3>
      </div>
    </template>
  </general-modal>
</template>
<script setup lang="ts">
import useMq from "~/composables/useMq";

const header = "Выберите город";
const emit = defineEmits(["close"]);

const { isTablet } = useMq();

const onClose = () => {
    emit('close')
    
};
</script>
