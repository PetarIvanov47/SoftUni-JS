import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function WelcomeWorld() {
    const [latestGames, setLatestGames] = useState([]);

    useEffect(() => {
        (async function getLatestGames() {
            try {
                const response = await fetch("http://localhost:3030/jsonstore/gamePlay/games");
                const data = await response.json();
                setLatestGames(Object.values(data).slice(-3).reverse());
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

                {latestGames.length === 0 ? (<p className="no-articles">No games yet</p>) : (latestGames.map(game => {
                    return (<div className="game" key={game._id}>
                        <div className="image-wrap">
                            <img src={game.imageUrl} />
                        </div>
                        <h3>{game.title}</h3>
                        <div className="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div className="data-buttons">
                            <Link to={`details/${game._id}`} className="btn details-btn">Details</Link>
                        </div>
                    </div>)

                }))}




                {/* <!-- Display div: with information about every game (if any) --> */}
                {/* <div className="game">
                    <div className="image-wrap">
                        <img src="./images/CoverFire.png" />
                    </div>
                    <h3>Cover Fire</h3>
                    <div className="rating">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">Details</a>
                    </div>
                </div>
                <div className="game">
                    <div className="image-wrap">
                        <img src="./images/ZombieLang.png" />
                    </div>
                    <h3>Zombie Lang</h3>
                    <div className="rating">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">Details</a>
                    </div>
                </div>
                <div className="game">
                    <div className="image-wrap">
                        <img src="./images/MineCraft.png" />
                    </div>
                    <h3>MineCraft</h3>
                    <div className="rating">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">Details</a>
                    </div>
                </div> */}

                {/* <!-- Display paragraph: If there is no games  --> */}

            </div>

        </section>

    )
}