import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useDarkMode() {
    const [enabledState, setEnabledState] = useLocalStorage(
        "dark-mode-enabled",
        false
    );
    useEffect(() => {
        const className = "dark";
        const element = window.document.documentElement;
        if (enabledState) {
            element.classList.add(className);
        } else {
            element.classList.remove(className);
        }
    }, [enabledState]);
    return [enabledState, setEnabledState];
}
