import { useState } from "react"

import commentAPI from "../../../api/comments-api";

export default function CreateComment({
    gameId,
    onCommentCreated
}) {

    const [newComment, setNewComment] = useState({
        commentText: '',
        gameId: gameId,
    });

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            await commentAPI.createComment(newComment);

            setNewComment({
                commentText: '',
                gameId: gameId,
            })

            onCommentCreated();
            
        } catch (error) {
            console.log(error.message);
        };

    };

    const changeHandler = (e) => {
        setNewComment({
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
                    value={newComment.commentText}
                    onChange={changeHandler}
                    required
                />
                <input
                    className="btn submit"
                    type="submit"
                    value="Add Comment"
                    disabled={!newComment.commentText.trim()}
                />
            </form>
        </article>

    )
}