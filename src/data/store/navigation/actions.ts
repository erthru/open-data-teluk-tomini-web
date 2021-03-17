import { NavigationAction, NavigationKey, NAVIGATION_TYPES } from "./types";

export const setNavigationKey = (key: NavigationKey | null): NavigationAction => {
    return {
        type: NAVIGATION_TYPES.SET_NAVIGATION_KEY,
        payloads: { currentActiveKey: key },
    };
};
