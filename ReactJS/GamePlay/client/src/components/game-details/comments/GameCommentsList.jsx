import GameCommentItem from "./GameCommentItem";

export default function GameCommentsList({
    comments,
}) {
    return (
        <div className="details-comments">
            <h2>Comments:</h2>
        
            {comments.length === 0
                ? <p className="no-comment">No comments.</p>
                : <ul>
                    {comments.map(comment => <GameCommentItem key={comment._id} { ...comment} />)}
                </ul>
            }
        </div>
    );

};