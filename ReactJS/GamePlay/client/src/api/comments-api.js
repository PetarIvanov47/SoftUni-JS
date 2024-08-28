import * as request from "./request";

const BASE_URL = "http://localhost:3030/jsonstore/gamePlay/comments";

export const createComment = (data) => request.post(BASE_URL, data);

export const allComments = () => request.get(BASE_URL);

export async function gameComments(gameId) {
    const data = await allComments();

    const result = Object
        .values(data)
        .filter(comment => comment.gameId === gameId)
        .slice(-6)
        .reverse()

    return result

}

const commentAPI = {
    createComment,
    allComments,
    gameComments,
};

export default commentAPI;