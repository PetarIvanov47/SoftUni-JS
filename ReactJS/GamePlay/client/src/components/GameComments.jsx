import { useEffect, useState } from "react"

export default function GameComments({
    gameId,
    refreshComments,
}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async function getComments() {
            try {
                const response = await fetch(`http://localhost:3030/jsonstore/gamePlay/comments`);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                
                setComments(Object
                    .values(data)
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

            {comments.length === 0 ? (<p className="no-comment">No comments.</p>) : (
                <ul>
                    {comments.map(comment => {
                        return (
                            <li className="comment" key={comment._id}>
                                <p>{comment.commentText}</p>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}