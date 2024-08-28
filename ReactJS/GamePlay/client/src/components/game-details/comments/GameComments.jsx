import { useEffect, useState } from "react"

import commentAPI from "../../../api/comments-api";

import GameCommentItem from "./GameCommentItem";
import { useFetch } from "../../../hooks/useFetch";

export default function GameComments({
    gameId,
    refreshComments,
}) {
    const { 
        data : allGameComments
     } = useFetch(commentAPI.gameComments, [], [refreshComments], gameId);

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