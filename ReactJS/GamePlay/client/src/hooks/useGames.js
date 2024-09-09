import { useEffect, useState } from "react";
import gameAPI from "../api/game-api";

export function useGetAllGames() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();

        (async () => {
            const result = await gameAPI.allGames();

            setGames(result);

        })();

        return () => abortController.abort();

    }, []);

    return [games, setGames]
}

export function useGetOneGames(gameId) {
    const [game, setGame] = useState({});

    useEffect(() => {

        (async () => {
            const result = await gameAPI.getGameByID(gameId);

            setGame(result)
        })();

    }, [gameId]);

}