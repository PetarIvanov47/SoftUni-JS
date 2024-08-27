import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

import * as gameAPI from "../../api/game-api";


export default function CreateGame() {
    const [formValues, setFormValues] = useState({
        title: "",
        category: "",
        maxLevel: "",
        imageUrl: "",
        summary: "",
    });

    const navigate = useNavigate();

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        
        try {
            gameAPI.createGame(formValues);

        } catch (error) {
            console.log(error.message);
            
        };

        navigate("/");
    };

    const changeHandler = (e) => {
        setFormValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section id="create-page" className="auth">
            <Link to="/" className="closeForm">X</Link>
            <form id="create" onSubmit={formSubmitHandler}>
                <div className="container">

                    <h1>Create Game</h1>
                    <label htmlFor="Title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter game title..."
                        value={formValues.title}
                        onChange={changeHandler}
                        required
                    />

                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={formValues.category}
                        onChange={changeHandler}
                        placeholder="Enter game category..."
                        required
                    />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        value={formValues.maxLevel}
                        onChange={changeHandler}
                        min="1"
                        placeholder="1"
                        required
                    />

                    <label htmlFor="imageUrl">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={formValues.imageUrl}
                        onChange={changeHandler}
                        placeholder="Upload a photo..."
                        required
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        value={formValues.summary}
                        onChange={changeHandler}
                        required
                    />

                    <input className="btn submit" type="submit" value="Create Game" />
                    
                </div>
            </form>
        </section>
    )
}