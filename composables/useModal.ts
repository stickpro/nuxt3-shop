import { useModalStore } from "@/store/modal";

export default function useModal() {
    const modal = useModalStore();

    const { changeModal } = modal;

    const onOpenCitySelection = () => {
        changeModal({
            category: "general",
            name: "CITY_SELECTION",
            state: true,
        });
    };
    const onCloseCitySelection = () => {
        changeModal({
            category: "general",
            name: "CITY_SELECTION",
            state: false,
        });
    };
    return {
        onOpenCitySelection,
        onCloseCitySelection,
    };
}
