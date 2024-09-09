import * as requester from './requester'
import urls from "./urls";

const allGamesUrl = urls.gamesUrl;

export const allGames = async () => {
    
    const data = await requester.get(allGamesUrl);
    
    const games = Object.values(data);

    return games
};

export const createGame = (data) => requester.post(allGamesUrl, data);

export const getGameByID = (gameId) => requester.get(`${allGamesUrl}/${gameId}`);

export const deleteGame = (gameId) => requester.del(`${allGamesUrl}/${gameId}`);

export const editGame = (gameId, data) => requester.put(`${allGamesUrl}/${gameId}`, data);

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