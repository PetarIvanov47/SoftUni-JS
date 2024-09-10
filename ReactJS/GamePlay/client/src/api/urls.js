const gamesUrl = "http://localhost:3030/data/games?sortBy=_createdOn%20desc";
const commentsUrl = "http://localhost:3030/data/comments";
const usersUrl = "http://localhost:3030/users";
const latestGamesUrl = "http://localhost:3030/data/games?sortBy=_createdOn%20desc&pageSize=3";

const urls = {
    gamesUrl,
    commentsUrl,
    usersUrl,
    latestGamesUrl
};

export default urls;