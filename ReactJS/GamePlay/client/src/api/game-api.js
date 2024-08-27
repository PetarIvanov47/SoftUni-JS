import request from "./request";
const BASE_URL = "http://localhost:3030/jsonstore/gamePlay/games";

export default async function allGames(){
    const result = await request(BASE_URL);
};