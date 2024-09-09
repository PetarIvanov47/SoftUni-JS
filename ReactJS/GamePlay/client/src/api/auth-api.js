import * as requester from "./requester";
import urls from "./urls";

const BASE_URL = urls.usersUrl;

export const login = (email, password) => requester.post(`${BASE_URL}/login`, { email, password });

export const register = (email, username, password) => requester.post(`${BASE_URL}/register`, { email, username, password });

