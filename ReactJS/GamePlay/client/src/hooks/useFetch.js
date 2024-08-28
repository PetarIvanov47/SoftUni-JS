import { useEffect, useState } from "react";

export function useFetch(requesterFunction, initialData = [], dependencies = [], resourceId) {
    const [data, setData] = useState(initialData);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        (async () => {
            setIsFetching(true);

            if (resourceId) {
                const result = await requesterFunction(resourceId);
                setData(result)
            } else {
                const result = await requesterFunction();
                setData(result)
            }

            setIsFetching(false)

        })();
    }, dependencies);

    return {
        data,
        isFetching,
    }
}

