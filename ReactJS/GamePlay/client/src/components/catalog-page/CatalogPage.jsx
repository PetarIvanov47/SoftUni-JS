import GameListItem from "./GameListItem";
import { useFetch } from "../../hooks/useFetch";
import Spinner from "../spinner/Spinner";
import urls from "../../api/urls";

export default function CatalogPage() {
    const {
        data,
        isFetching,
    } = useFetch(urls.gamesUrl, {});

    const allGames = Object.values(data);

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