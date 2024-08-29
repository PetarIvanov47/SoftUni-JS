import * as request from "./request";
import urls from "./urls";

const profilesUrl = urls.profilesUrl;

export const createProfile = (data) => request.post(profilesUrl, data);

const profilesAPI = {
    createProfile
};


export default profilesAPI