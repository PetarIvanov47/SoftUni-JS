import GameCommentItem from "./GameCommentItem";
import { useFetch } from "../../../hooks/useFetch";

const BASE_URL = "http://localhost:3030/jsonstore/comments"

export default function GameComments({
    gameId,
    refreshComments,
}) {
    const {
        data,
    } = useFetch(BASE_URL, {}, [refreshComments]);

    const allGameComments = Object
        .values(data)
        .filter(comment => comment.gameId === gameId)
        .slice(-8)
        .reverse();

    return (
        <div className="details-comments">
            <h2>Comments:</h2>

            {allGameComments.length === 0
                ? <p className="no-comment">No comments.</p>
                : <ul>
                    {allGameComments.map(comment => <GameCommentItem key={comment._id} text={comment.commentText} />)}
                </ul>
            }
        </div>
    )
}