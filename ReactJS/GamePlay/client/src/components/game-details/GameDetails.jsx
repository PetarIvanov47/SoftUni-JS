import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import CreateComment from "./comments/CreateComment";
import GameComments from "./comments/GameComments";

import gameAPI from "../../api/game-api";

export default function GameDetails() {
    const [game, setGame] = useState({});
    const { gameId } = useParams();
    const navigate = useNavigate();
    const [refreshComments, setRefreshComments] = useState(false);

    useEffect(() => {
        (async function getGameDetails() {
            try {
                const result = await gameAPI.getGameByID(gameId);
                setGame(result);

            } catch (error) {
                console.log(error.message);
            }
        })();
    }, [gameId]);

    async function deleteButtonHandler() {
        try {
            await gameAPI.deleteGame(gameId);
        
            navigate('/');
        } catch (error) {
            console.log(error.message());
        }
    }

    function handleCommentCreated() {
        setRefreshComments(prev => !prev);
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>

                <GameComments gameId={gameId} refreshComments={refreshComments} />

                <div className="buttons">
                    <Link to={`/game/edit/${game._id}`}
                        className="button"
                        state={{ game }}
                    >
                        Edit
                    </Link>
                    <Link
                        className="button"
                        onClick={deleteButtonHandler}
                    >
                        Delete
                    </Link>
                </div>
            </div>

            <CreateComment gameId={gameId} onCommentCreated={handleCommentCreated} />
        </section>
    )
}