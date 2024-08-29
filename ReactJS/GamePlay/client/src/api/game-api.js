import * as request from "./request";
import urls from "./urls";

const allGamesUrl = urls.gamesUrl;

export const allGames = async () => {
    const data = await request.get(allGamesUrl);
    
    const games = Object.values(data);

    return games
};

export const createGame = (data) => request.post(allGamesUrl, data);

export const getGameByID = (gameId) => request.get(`${allGamesUrl}/${gameId}`);

export const deleteGame = (gameId) => request.del(`${allGamesUrl}/${gameId}`);

export const editGame = (gameId, data) => request.put(`${allGamesUrl}/${gameId}`, data);

export const getLatestGames = async () => {
    const games = await allGames(allGamesUrl);
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