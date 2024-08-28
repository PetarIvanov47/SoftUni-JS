import { useEffect, useState } from "react"

import gameAPI from "../../api/game-api";
import LatestGameItem from "./latestGameItem";
import { useFetch } from "../../hooks/useFetch";
import Spinner from "../spinner/Spinner";

export default function Home() {

    const {
        data: latestGames,
        isFetching,
    } = useFetch(gameAPI.getLatestGames);

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