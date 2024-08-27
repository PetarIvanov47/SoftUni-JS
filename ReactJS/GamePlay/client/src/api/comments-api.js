import * as request from "./request";

const BASE_URL = "http://localhost:3030/jsonstore/gamePlay/comments";

export const createComment = (data) => request.post(BASE_URL, data);

export const allComments = () => request.get(BASE_URL);

const commentAPI = {
    createComment,
    allComments,
};

export default commentAPI;