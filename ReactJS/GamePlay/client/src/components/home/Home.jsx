import { useEffect, useState } from "react"

import gameAPI from "../../api/game-api";
import LatestGameItem from "./latestGameItem";

export default function Home() {
    const [latestGames, setLatestGames] = useState([]);

    useEffect(() => {
        (async function getLatestGames() {
            try {
                const result = await gameAPI.getLatestGames();

                setLatestGames(result);
            } catch (error) {
                console.log(error.message);
            }
        })();
    }, []);

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>
                {latestGames.length === 0
                    ? <p className="no-articles">No games yet</p>
                    : latestGames.map(game => <LatestGameItem key={game._id} {...game} />)
                }
            </div>
        </section>

    )
}