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
                <v-input
                    class="city-selection-modal__input"
                    placeholder="Ваш город"
                >
                    <template v-slot:after>
                        <v-svg name="search-middle" width="24" height="24" />
                    </template>
                </v-input>
            </div>
        </template>
    </general-modal>
</template>
<script setup lang="ts">
import useMq from "~/composables/useMq";

const header = "Выберите город";
const { onCloseCitySelection } = useModal();

const emit = defineEmits(["close"]);

const { isTablet } = useMq();

const onClose = () => {
    emit("close");
    onCloseCitySelection();
};
</script>

<style lang="postcss">
.city-selection-modal {
    .popup--sm {
        width: 440px;
        height: 440px;
    }

    .modal-body {
        padding: calc(var(--gs) * 3);
        padding-bottom: calc(var(--gs) * 4);
        overflow: hidden;
        display: flex;
        flex-direction: column;

        @media (--tablet) {
            padding: 0;
            padding-bottom: calc(var(--gs) * 4);
        }
    }

    .general-modal__sticky {
        @media (--tablet) {
            height: 100%;
            overflow: hidden;
        }
    }

    &__hl {
        @media (--tablet) {
            display: none;
        }
    }

    &__body {
        height: 100%;
        display: flex;
        flex-direction: column;

        @media (--tablet) {
            padding: calc(var(--gs) * 2);
        }
    }

    &__input {
        input[type="text"] {
            padding-right: calc(var(--gs) * 5);
        }

        .icon {
            position: absolute;
            z-index: 1;
            right: var(--gs);
            top: 50%;
            transform: translateY(-50%);
        }
    }

    &__wrapper {
        position: relative;
        overflow: auto;

        &:after,
        &:before {
            content: "";
            display: block;
            width: 100%;
            height: calc(var(--gs) * 1.25);
            position: absolute;
            left: 0;
            z-index: 10;
        }

        &:after {
            bottom: 0;
            background: linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0),
                var(--cl-white)
            );
        }

        &:before {
            top: 0;
            background: linear-gradient(
                to top,
                rgba(255, 255, 255, 0),
                var(--cl-white)
            );
        }
    }

    &__list {
        overflow: auto;
        height: 100%;

        &-item {
            padding: 1px;
            & + & {
                margin-top: calc(var(--gs) * 0.5);
            }
        }

        &-btn {
            font-size: 16px;
            line-height: 24px;
            text-align: left;
            text-transform: none;
            font-weight: normal;

            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>
