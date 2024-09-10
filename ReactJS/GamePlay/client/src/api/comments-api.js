import * as requester from "./requester";

const BASE_URL = "http://localhost:3030/data/comments";

export const createComment = (data) => requester.post(BASE_URL, data);

export const gameComments = async (gameId) => {
    const result = await requester.get(`${BASE_URL}?where=gameId%3D%22${gameId}%22`);
    const comments = Object.values(result);
    
    return comments
};


const commentAPI = {
    createComment,
    gameComments,
};

export default commentAPI;