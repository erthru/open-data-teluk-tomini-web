export enum NAVIGATION_TYPES {
    SET_NAVIGATION_KEY = "SET_NAVIGATION_KEY",
}

export enum NavigationKey {
    datasets = "datasets",
    organizations = "organizations",
    visualizations = "visualizations",
    infographics = "infographics",
}

export type NavigationState = {
    currentActiveKey: NavigationKey | null;
};

export type NavigationAction = {
    type: NAVIGATION_TYPES;
    payloads?: {
        currentActiveKey?: NavigationKey | null;
    };
};
