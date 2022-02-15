<template>
    <nuxt-link class="link" v-if="to" :to="to" :tag="tag" :exact="exact">
        <v-svg
            v-if="iconName && placement === 'before'"
            :name="iconName"
            :modifier="iconModifier"
        />
        <slot />
        <v-svg
            v-if="iconName && placement === 'after'"
            :name="iconName"
            :modifier="iconModifier"
        />
    </nuxt-link>
    <a class="link" v-else-if="tag === 'a'">
        <v-svg
            v-if="iconName && placement === 'before'"
            :name="iconName"
            :modifier="iconModifier"
        />
        <slot />
        <v-svg
            v-if="iconName && placement === 'after'"
            :name="iconName"
            :modifier="iconModifier"
        />
    </a>
    <button class="link" v-else :type="type">
        <v-svg
            v-if="iconName && placement === 'before'"
            :name="iconName"
            :modifier="iconModifier"
        />
        <slot />
        <v-svg
            v-if="iconName && placement === 'after'"
            :name="iconName"
            :modifier="iconModifier"
        />
    </button>
</template>
<script setup lang="ts">
const props = defineProps({
    iconName: String,
    iconModifier: String,
    type: {
        type: String,
        default: "button",
    },
    placement: {
        type: String,
        default: "before",
    },
    href: {
        type: String,
    },
    to: {
        type: [String, Object],
    },
    exact: {
        type: Boolean,
        default: false,
    },
});
</script>
<style lang="postcss">
.link {
    font-size: 16px;
    line-height: 24px;
    text-decoration: none;
    transition: all var(--time) var(--timing-function);
    border-bottom: none;
    text-transform: uppercase;

    &--sm {
        font-weight: normal;
        font-size: 12px;
        line-height: 20px;
    }

    &--grey {
        fill: var(--cl-grey);
        color: var(--cl-grey);
    }
}

.link {
    &:hover {
    }
}

.link.is-disabled,
.is-disabled .link,
.link[disabled] {
    color: var(--cl-grey);
    fill: var(--cl-grey);
    border-color: var(--cl-grey);
    pointer-events: none;
}
</style>
