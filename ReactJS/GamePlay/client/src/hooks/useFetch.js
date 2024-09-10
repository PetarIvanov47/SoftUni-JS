import { useEffect, useState } from "react";

export function useFetch(url, initialData = [], dependencies = []) {
    const [data, setData] = useState(initialData);
    const [isFetching, setIsFetching] = useState(false);
    const [toggleRefresh, setToggleRefresh] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();
        setIsFetching(true);

        (async () => {

            try {
                const response = await fetch(url, { signal: abortController.signal });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);

            } catch (error) {
                if (error.name === 'AbortError') {
                    console.log('Fetch aborted')
                } else {
                    console.log(error.message)
                }
            }


            setIsFetching(false)

        })();

        console.log("Fetching");

        return () => abortController.abort();

    }, [...dependencies, toggleRefresh, url]);


    const refech = () => {
        setToggleRefresh(state => !state);
    }

    return {
        data,
        isFetching,
        refech
    }
}

