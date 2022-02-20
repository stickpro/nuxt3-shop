import { computed } from "vue";
import { useMq as Mq } from "vue3-mq";

export default function useMq() {
    const mq = Mq();

    const isPhone = computed(() => {
        return ["mobileSm", "mobile", "mobileLg"].includes(mq.current);
    });

    const isShortTablet = computed(() => {
        return ["tablet"].includes(mq.current);
    });

    const isWideTablet = computed(() => {
        return ["tabletLg"].includes(mq.current);
    });

    const isTablet = computed(() => {
        return ["tablet", "tabletLg"].includes(mq.current);
    });

    const isLg = computed(() => {
        return ["desktopLg"].includes(mq.current);
    });

    const isXl = computed(() => {
        return ["desktopXl"].includes(mq.current);
    });

    const is2Xl = computed(() => {
        return ["2xl"].includes(mq.current);
    });

    const isDesktop = computed(() => {
        return ["desktop", "desktopLg", "desktopXl"].includes(mq.current);
    });

    const isPhoneOrTablet = computed(() => {
        return ["mobileSm", "mobile", "mobileLg", "tablet"].includes(
            mq.current
        );
    });

    const isTabletOrDesktop = computed(() => {
        return [
            "tablet",
            "tabletLg",
            "desktop",
            "desktopLg",
            "desktopXl",
        ].includes(mq.current);
    });

    const screen = computed(() => {
        return mq.current;
    });

    return {
        mq,
        screen,
        isPhone,
        isShortTablet,
        isWideTablet,
        isTablet,
        isLg,
        isXl,
        is2Xl,
        isDesktop,
        isPhoneOrTablet,
        isTabletOrDesktop,
    };
}
