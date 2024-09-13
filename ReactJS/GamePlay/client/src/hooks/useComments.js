import { useEffect, useState } from "react";
import commentAPI from "../api/comments-api";

export function useGetComments(gameId, refreshComments) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        
        (async () => {
            const result = await commentAPI.gameComments(gameId);
            
            setComments(result);

        })();

    }, [refreshComments]);

    return [comments, setComments]
}