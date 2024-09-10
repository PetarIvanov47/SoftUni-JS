import * as requester from './requester'

const BASE_URL = "http://localhost:3030/data/games";

export const allGames = async () => {
    const data = await requester.get(`${BASE_URL}?sortBy=_createdOn%20desc`);
    const games = Object.values(data);

    return games
};

export const getLatestGames = async () => {
    const result = await requester.get(`${BASE_URL}?sortBy=_createdOn%20desc&pageSize=3`);
    const latestGames = Object.values(result);

    return latestGames
};

export const createGame = (data) => requester.post(BASE_URL, data);

export const getGameByID = (gameId) => requester.get(`${BASE_URL}/${gameId}`);

export const deleteGame = (gameId) => requester.del(`${BASE_URL}/${gameId}`);

export const editGame = (gameId, data) => requester.put(`${BASE_URL}/${gameId}`, data);


const gameAPI = {
    allGames,
    createGame,
    getGameByID,
    deleteGame,
    editGame,
    getLatestGames,
};

export default gameAPI