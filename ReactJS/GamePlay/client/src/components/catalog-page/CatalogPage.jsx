import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import request from "../../api/request";

export default function CatalogPage() {
    const [allGames, setAllGames] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("http://localhost:3030/jsonstore/gamePlay/games");
                const data = await response.json();
                setAllGames(Object.values(data));

            } catch (error) {
                console.log(error.message());
            }

        })();
    }, []);


    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            

            {allGames.length === 0 ? (<h3 className="no-articles">No articles yet</h3>) : (
                allGames.map(game => {
                    return (
                        <div className="allGames" key={game._id}>
                            <div className="allGames-info" >
                                <img src={game.imageUrl} /> 
                                <h6>{game.category}</h6>
                                <h2>{game.title}</h2>
                                <Link to={`/details/${game._id}`} className="details-button">Details</Link>
                            </div>
                        </div>
                    )
                })
            )}


            

        </section>
    )
}