<template>
    <div class="header-top">
        <div class="container header-top__container">
            <button class="header-top__city" title="Выбрать город">
                <v-svg name="pin" width="16" height="16" /> {{ geo.city }}
            </button>
            <div class="header-top__middle">
                <a class="header-top__middle-item">
                    <v-svg name="delivery" width="16" height="16" />{{
                        $t("header.top.delivery")
                    }}
                </a>
                <a class="header-top__middle-item">
                    <v-svg name="box" width="16" height="16" />{{
                        $t("header.top.benefits")
                    }}
                </a>
                <a class="header-top__middle-item">
                    <v-svg name="gift" width="16" height="16" />{{
                        $t("header.top.gifts")
                    }}
                </a>
            </div>
            <header-help-panel class="header-top__help">
                {{ $t("header.top.help")
                }}<v-svg
                    name="arrow-down"
                    class="help-panel__icon-arrow"
                    width="20"
                    height="20"
                />
            </header-help-panel>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useGeoStore } from "@/store/geo";
const geo = useGeoStore();

onMounted(() => {

geo.loadGeoData();
})
</script>
<style lang="postcss">
.header-top {
    padding: calc(var(--gs) / 2) 0;
    overflow: hidden;
    background-color: var(--cl-white);
    border-bottom: 1px solid var(--cl-divider-grey);
    color: var(--cl-grey);
    fill: var(--cl-grey);
    font-size: 16px;
    line-height: 24px;
    font-weight: normal;
    text-transform: none;

    @media (--tablet-lg) {
        display: none;
    }

    &--search {
        display: none;
    }

    &__city,
    &__help {
        font-size: inherit;
        line-height: inherit;
        font-weight: inherit;
        text-transform: inherit;
    }

    &__container,
    &__city,
    &__help,
    &__middle,
    &__middle-item {
        display: flex;
        align-items: center;
        text-align: left;
        white-space: nowrap;
        border-bottom: none;

        .icon {
            flex: none;
            margin-right: var(--gs);
        }
    }

    &__city {
        flex: 1;
        padding-right: calc(var(--gs) * 7);

        @media (--desktop-lg) {
            padding-right: calc(var(--gs) * 2);
        }

        &-name {
            width: 100%;
        }
    }

    &__help {
        display: flex;
        justify-content: flex-end;
        flex: 1;
        padding-left: calc(var(--gs) * 7);

        @media (--desktop-lg) {
            padding-left: calc(var(--gs) * 2);
        }

        &.open {
            .help-panel__icon-arrow {
                transform: rotate(180deg);
            }
        }

        .trigger {
            display: flex !important;
            align-items: center;
        }
    }

    &__container {
        justify-content: space-between;
    }

    &__middle-item {
        white-space: nowrap;
        & + & {
            margin-left: calc(var(--gs) * 9);

            @media (--desktop-lg) {
                margin-left: calc(var(--gs) * 2);
            }
        }
    }

    &__panel {
        position: absolute;
        right: 250px;
        bottom: calc(var(--gs) * -1);
    }
}
</style>
