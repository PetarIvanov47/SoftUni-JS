import { useState } from "react"
import { useParams } from "react-router-dom";

export default function CreateComment({ gameId }) {

    const [gameComment, setGameComment] = useState({
        commentText: '',
        gameId: gameId,
    });

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3030/jsonstore/gamePlay/comments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(gameComment)
            });

        } catch (error) {
            console.log(error.message);

        };

    };

    const changeHandler = (e) => {
        setGameComment({
            commentText: e.target.value,
            gameId: gameId
        });
    };


    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={formSubmitHandler}>
                <textarea
                    name="comment"
                    placeholder="Comment......"
                    value={gameComment.commentText}
                    onChange={changeHandler}
                />
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>

    )
}