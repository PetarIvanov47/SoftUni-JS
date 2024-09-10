import { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import CreateComment from "./comments/CreateComment";

import gameAPI from "../../api/game-api";
import { useGetOneGames } from "../../hooks/useGames";
import { AuthContext } from "../context/AuthContext";
import { useGetComments } from "../../hooks/useComments";
import GameCommentItem from "./comments/GameCommentItem";

export default function GameDetails() {
    const navigate = useNavigate();
    const { gameId } = useParams();
    const [refreshComments, setRefreshComments] = useState(false);
    const { userId, isAuthenticated } = useContext(AuthContext);

    const comments = useGetComments(gameId, refreshComments);

    const game = useGetOneGames(gameId);

    function handleCommentCreated() {
        setRefreshComments(prev => !prev);
    }

    async function deleteButtonHandler() {
        try {
            await gameAPI.deleteGame(gameId);

            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
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

                <div className="details-comments">
                    <h2>Comments:</h2>

                    {comments.length === 0
                        ? <p className="no-comment">No comments.</p>
                        : <ul>
                            {comments.map(comment => <GameCommentItem key={comment._id} text={comment.content} />)}
                        </ul>
                    }
                </div>

                <div className="buttons">
                    {game._ownerId === userId && <>
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
                    </>
                    }


                </div>
            </div>

            {(isAuthenticated && game._ownerId !== userId)
                &&
                <CreateComment gameId={gameId} onCommentCreated={handleCommentCreated} />
            }

        </section>
    )
}