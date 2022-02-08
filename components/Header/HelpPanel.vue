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
        <template v-slot:body>
            <div class="text-grey help-panel__info">
                Всегда отвечаем на ваши сообщения
            </div>
            <div class="help-panel__socials">
                <a
                    v-for="link in links"
                    :key="link.socialName"
                    :href="link.href"
                    @mouseover="link.hover = true"
                    @mouseleave="link.hover = false"
                    class="help-panel__socials-icon"
                    target="_blank"
                    rel="nofollow"
                >
                    <v-svg
                        :name="!link.hover ? link.icon : `${link.icon}-hover`"
                        width="40"
                        height="40"
                    />
                </a>
            </div>
        </template>
        <template v-slot:bottom>
            <div class="help-panel__links">
                <nuxt-link class="link help-panel__link" to="/">
                    Доставка и оплата
                </nuxt-link>
                <nuxt-link class="link help-panel__link" to="/">
                    Возврат товара
                </nuxt-link>
            </div>
        </template>
    </general-popup-panel>
</template>
<script setup lang="ts">
import { reactive } from "vue";

const isOpen = reactive({ value: false });
const links = reactive([
    {
        socialName: "telegram",
        href: "",
        icon: "socials-telegram",
        hover: false,
    },
    {
        socialName: "whatsup",
        href: "",
        icon: "socials-whatsup",
        hover: false,
    },
    { socialName: "viber", href: "", icon: "socials-viber", hover: false },
    { socialName: "vk", href: "", icon: "socials-vk", hover: false },
    {
        socialName: "facebook",
        href: "",
        icon: "socials-fb",
        hover: false,
    },
]);
//actions
const onClick = () => (isOpen.value = !isOpen.value);
const onHide = () => (isOpen.value = false);
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
            border-bottom: none;

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
