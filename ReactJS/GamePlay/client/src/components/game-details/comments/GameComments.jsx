import { useEffect, useState } from "react"

import commentAPI from "../../../api/comments-api";

import GameCommentItem from "./GameCommentItem";

export default function GameComments({
    gameId,
    refreshComments,
}) {
    const [allComments, setAllComments] = useState([]);

    useEffect(() => {
        (async function getComments() {
            try {
                const result = await commentAPI.allComments();

                setAllComments(Object
                    .values(result)
                    .filter(comment => comment.gameId === gameId)
                    .slice(-6)
                    .reverse()
                );

            } catch (error) {
                console.log(error.message);
            }
        })();
    }, [refreshComments]);

    return (
        <div className="details-comments">
            <h2>Comments:</h2>

            {allComments.length === 0
                ? <p className="no-comment">No comments.</p>
                : <ul>
                    {allComments.map(comment => <GameCommentItem key={comment._id} text={comment.commentText} />)}
                </ul>
            }
        </div>
    )
}