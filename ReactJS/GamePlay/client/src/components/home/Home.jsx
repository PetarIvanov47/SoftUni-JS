import { useFetch } from "../../hooks/useFetch";

import LatestGameItem from "./latestGameItem";
import Spinner from "../spinner/Spinner";
import urls from "../../api/urls";

export default function Home() {

    const {
        data,
        isFetching,
    } = useFetch(urls.gamesUrl, {});

    const latestGames = Object
        .values(data)
        .slice(-3)
        .reverse();


    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                {isFetching
                    ? <Spinner />
                    : latestGames.length > 0
                        ? latestGames.map(game => <LatestGameItem key={game._id} {...game} />)
                        : <p className="no-articles">No games yet</p>
                }

            </div>
        </section>

    )
}