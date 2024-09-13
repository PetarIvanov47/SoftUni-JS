import * as requester from "./requester";

const BASE_URL = "http://localhost:3030/data/comments";

export const createComment = (gameId, content) => requester.post(BASE_URL, { gameId, content });

export const gameComments = (gameId) => {
    const params = new URLSearchParams({
        where: `gameId="${gameId}"`,
        load: `author=_ownerId:users`,
    });

    return requester.get(`${BASE_URL}?${params.toString()}`);
};


const commentAPI = {
    createComment,
    gameComments,
};

export default commentAPI;