import GameListItem from "./GameListItem";
import { useFetch } from "../../hooks/useFetch";
import gameAPI from "../../api/game-api";
import Spinner from "../spinner/Spinner";

export default function CatalogPage() {
    const {
        data: allGames,
        isFetching
    } = useFetch(gameAPI.allGames);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {isFetching
                ? <Spinner />
                : allGames.length > 0
                    ? allGames.map(game => <GameListItem key={game._id} {...game} />)
                    : <h3 className="no-articles">No articles yet</h3>
            }
        </section>
    )
}