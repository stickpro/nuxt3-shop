<template>
    <div
        class="header-bottom"
        :class="{ 'header-bottom--scroll': scroll && !isTablet }"
    >
        {{ scroll }}
        <div class="header-bottom__main" v-if="!scroll">
            <div class="container header-bottom__container"></div>
        </div>
        <div class="header-bottom__bottom" v-show="!search">
            <div class="container header-bottom__container"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from "~~/store/app";
import { useSearchStore } from "~~/store/search";

const { isTablet } = useMq();
const searchStore = useSearchStore();
const { search } = searchStore;
const appStore = useAppStore();
const { scroll } = appStore;
</script>
<style lang="postcss">
.header-bottom {
    background-color: var(--cl-white);
    overflow: hidden;

    @media (--tablet-lg) {
        max-height: calc(var(--gs) * 8);
    }

    &__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__main {
        padding: calc(var(--gs) * 2) 0;

        @media (--tablet-lg) {
            display: none;
        }

        &-search {
            min-width: 288px;
        }

        &-user {
            @media (--tablet-lg-min) {
                min-width: 288px;
            }

            .header-user-panel__item {
                &:first-child {
                    margin-left: calc(var(--gs) * 3);

                    @media (--desktop) {
                        margin-left: calc(var(--gs) * 2);
                    }
                }
            }

            .header-user-panel__item-sum {
                @media (--desktop) {
                    display: none;
                }
            }
        }
    }

    &--scroll &__bottom {
        padding: calc(var(--gs) + 1px) 0;

        @media (--tablet) {
            padding: calc(var(--gs) + 1px) 0;
        }

        &-nav {
            max-width: 700px;
            margin-right: auto;

            @media (--tablet) {
                margin-right: 0;
            }
        }

        &-user {
            .header-user-panel__item--wishlist {
                fill: var(--cl-white);
                color: var(--cl-global);

                .header-user-panel__item-count {
                    font-weight: 700;
                }
            }
        }
    }

    &__bottom {
        padding: calc(var(--gs) * 1.5) 0;
        background-color: var(--cl-global);
        color: var(--cl-white);
        fill: var(--cl-white);

        @media (--tablet-lg) {
            padding-top: calc(var(--gs) * 2.5);
            padding-bottom: calc(var(--gs) * 2.5);
        }

        @media (--tablet) {
            padding: calc(var(--gs) + 1px) 0;
        }

        &-logo {
            display: flex;
            align-items: stretch;
            border-bottom: none;

            @media (--tablet-lg) {
                display: none;
            }

            &::after {
                content: "";
                display: block;
                margin: 0 calc(var(--gs) * 4);
                border-left: 1px solid var(--cl-white);
                opacity: 0.3;
            }

            &-middle {
                display: none;

                @media (--tablet-lg) {
                    display: flex;
                    align-items: stretch;
                    border-bottom: none;
                    margin-right: auto;
                }

                @media (--tablet-lg) and (--tablet-min) {
                    margin-top: -4px;
                }

                .icon:first-of-type {
                    @media (--tablet-lg) {
                        height: 28px;
                    }

                    @media (--tablet) {
                        display: none;
                    }
                }

                .icon:last-of-type {
                    @media (--tablet-min) {
                        display: none;
                    }
                }
            }
        }

        &-nav {
            width: 100%;
            @media (--tablet-lg) {
                width: calc(30% - calc(var(--gs) * 1.5));
                margin-right: 0;
            }

            @media (--tablet) {
                width: calc(50% - calc(var(--gs) * 1.5));
                margin-right: 0;
            }
        }

        &-search {
            margin-left: calc(var(--gs) * 3);

            .search-filter__input {
                display: none;
            }
        }

        &-user {
            .header-user-panel__item {
                &:first-child {
                    margin-left: calc(var(--gs) * 3);

                    @media (--desktop) {
                        margin-left: calc(var(--gs) * 2);
                    }
                }
            }

            .header-user-panel__item-sum {
                @media (--desktop) {
                    display: none;
                }
            }
        }
    }
}
</style>
