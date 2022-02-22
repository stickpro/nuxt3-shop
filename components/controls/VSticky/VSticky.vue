<template>
    <div class="v-sticky">
        <div class="v-sticky__container">
            <slot name="sticky" />
        </div>
        <slot />
    </div>
</template>
<style lang="postcss">
.v-sticky {
    position: relative;

    &__container {
        top: 0;
        position: sticky;
        z-index: 50;
    }
}
</style>
