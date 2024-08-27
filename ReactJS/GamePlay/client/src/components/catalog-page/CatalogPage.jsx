import { useEffect, useState } from "react"

import gameAPI
    from "../../api/game-api";
import GameListItem from "./GameListItem";

export default function CatalogPage() {
    const [allGames, setAllGames] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const result = await gameAPI.allGames();
                setAllGames(result);

            } catch (error) {
                console.log(error.message);
            }

        })();
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {allGames.length === 0
                ? <h3 className="no-articles">No articles yet</h3>
                : allGames.map(game => <GameListItem key={game._id} {...game} />)}
        </section>
    )
}