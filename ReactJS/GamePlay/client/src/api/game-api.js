import * as request from "./request";

const BASE_URL = "http://localhost:3030/jsonstore/gamePlay/games";

export const allGames = async () => {
    const data = await request.get(BASE_URL);
    
    const games = Object.values(data);

    return games
};

export const createGame = (data) => request.post(BASE_URL, data);

export const getGameByID = (gameId) => request.get(`${BASE_URL}/${gameId}`);

export const deleteGame = (gameId) => request.del(`${BASE_URL}/${gameId}`);

export const editGame = (gameId, data) => request.put(`${BASE_URL}/${gameId}`, data);

export const getLatestGames = async () => {
    const games = await allGames(BASE_URL);
    const latestGames = games.slice(-3).reverse();

    return latestGames
};

const gameAPI = {
    allGames,
    createGame,
    getGameByID,
    deleteGame,
    editGame,
    getLatestGames,
};

export default gameAPI