import commentAPI from "../../../api/comments-api";
import { useForm } from "../../../hooks/useForm";

export default function CreateComment({
    gameId,
    onCommentCreated
}) {
    const initialData = {
        commentText: "",
        gameId: gameId,
    };

    const formSubmitHandler = async (e) => {
        
        try {
            commentAPI.createComment(values);

            onCommentCreated();
            
        } catch (error) {
            console.log(error.message);
        };

    };

    const { 
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialData, formSubmitHandler);


    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={submitHandler}>
                <textarea
                    name="commentText"
                    placeholder="Comment......"
                    value={values.commentText}
                    onChange={changeHandler}
                    required
                />
                <input
                    className="btn submit"
                    type="submit"
                    value="Add Comment"
                    disabled={!values.commentText.trim()}
                />
            </form>
        </article>

    )
}