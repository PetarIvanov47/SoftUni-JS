import { Link, useNavigate, useParams } from "react-router-dom"
import CreateComment from "./comments/CreateComment";

import gameAPI from "../../api/game-api";
import { useGetOneGames } from "../../hooks/useGames";
import { useAuthContext } from "../context/AuthContext";
import GameCommentsList from "./comments/GameCommentsList";
import { useGetComments } from "../../hooks/useComments";

export default function GameDetails() {
    const { gameId } = useParams();
    const game = useGetOneGames(gameId);
    const [comments, setComments] = useGetComments(gameId);
    
    const { userId, isAuthenticated } = useAuthContext();
    const navigate = useNavigate();

    function handleCommentCreated(newComment) {
        setComments(oldComments => ([...oldComments, newComment]));
        console.log(comments)
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

                <GameCommentsList comments={comments}/>

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