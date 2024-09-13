import { useState } from "react";

export default function usePersistedState(key, initialState) {
    const [state, setState] = useState(() => {
        const localStorageData = localStorage.getItem(key);

        if (localStorageData) {
            return typeof initialState === 'function'
                ? initialState()
                : initialState
        }

        return JSON.parse(localStorageData);

    });

    const updateState = (value) => {
        const newState = typeof value === 'function'
        ? value(state)
        : value;

        localStorage.setItem(key, JSON.stringify(newState));

        setState(newState);
    };

    return [state, updateState];
};