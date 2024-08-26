import { useEffect, useState } from "react"

export default function GameComments({ gameId }) {
    const [comments, setComments] = useState([]);
    const [noComments, setNoComments] = useState(true)

    useEffect(() => {
        (async function getComments() {
            try {
                const response = await fetch(`http://localhost:3030/jsonstore/gamePlay/comments`);
                
                if (response.statusText === "No Content") {
                    setNoComments(true);
                } else {
                    const data = await response.json();

                    setComments(Object
                        .values(data)
                        .filter(comment => comment.gameId == gameId)
                    );
                }

            } catch (error) {
                console.log(error.message)
            }
        })();
    }, []);
    

    return (
        <div className="details-comments">
            <h2>Comments:</h2>

            {noComments ? (<p className="no-comment">No comments.</p>) : (
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