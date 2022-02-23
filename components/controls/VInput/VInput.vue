<template>
    <div
        class="v-input"
        :class="[
            { 'v-input--float': float },
            { 'v-input--active': active },
            { 'v-input--invalid': error },
            { 'v-input--disabled': disabled },
        ]"
    >
        <label class="v-input__label" :for="inputId">
            <slot />
        </label>
        <div class="v-input__container">
            <input
                v-if="tag === 'input'"
                class="v-input__input"
                :id="inputId"
                :value="internal_value"
                :type="type"
                :disabled="disabled"
                :aria-describedby="`${inputId}-alert`"
                @focus="focus = true"
                @blur="focus = false"
            />
            <textarea
                ref="textarea"
                v-if="tag === 'textarea'"
                class="v-input__input"
                rows="1"
                :id="inputId"
                :value="internal_value"
                :disabled="disabled"
                :aria-describedby="`${inputId}-alert`"
                autoresize
                @focus="focus = true"
                @blur="focus = false"
            />
            <slot name="after" />
        </div>
        <div
            v-if="showError"
            :id="`${inputId}-alert`"
            class="error-message v-input__error"
            role="alert"
        >
            <slot name="error" :error="error">
                {{ error }}
            </slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { validateInputTag } from "./VInputHook";
import { useAttrs } from "vue";

const props = defineProps({
    value: {},

    type: { type: String, default: "text" },

    float: {
        type: Boolean,
        default: false,
    },

    disabled: {
        type: Boolean,
        default: false,
    },
    tag: {
        type: String,
        default: "input",
        validator: validateInputTag,
    },
    error: {
        type: [String, Boolean],
        default: null,
    },
    showError: {
        type: Boolean,
        default: true,
    },
});

const emit = defineEmits(["input"]);

const inputTypes = { text: "text", number: "number" };

const attrs = useAttrs();

const focus = ref(false);
const inputId = ref(`v-input-id-${getCurrentInstance()!.uid}`);

let internal_value = props.value;
const active = computed(() => focus || internal_value);
</script>
<style lang="postcss">
@import url("./VInput.css");
</style>
