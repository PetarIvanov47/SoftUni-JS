import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

import gameAPI from "../../api/game-api";

export default function EditGame() {
    const location = useLocation();
    const { game } = location.state || {};
    const navigate = useNavigate();

    const [gameData, setGameData] = useState({
        title: game.title,
        category: game.category,
        maxLevel: game.maxLevel,
        imageUrl: game.imageUrl,
        summary: game.summary,
        _id: game._id,
    });

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            await gameAPI.editGame(gameData._id, gameData);

            navigate(`/details/${game._id}`);

        } catch (error) {
            console.log(error.message());
        }

    };

    const changeHandler = (e) => {
        setGameData(oldGameData => ({
            ...oldGameData,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section id="edit-page" className="auth">
            <Link to="/" className="closeForm">X</Link>
            <form id="edit" onSubmit={formSubmitHandler}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="title">Legendary title:</label>
                    <input type="text"
                        id="title"
                        name="title"
                        value={gameData.title}
                        onChange={changeHandler}
                    />

                    <label htmlFor="category">Category:</label>
                    <input type="text"
                        id="category"
                        name="category"
                        value={gameData.category}
                        onChange={changeHandler}
                    />

                    <label htmlFor="maxLevel">MaxLevel:</label>
                    <input type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min="1"
                        value={gameData.maxLevel}
                        onChange={changeHandler}
                    />

                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={gameData.imageUrl}
                        onChange={changeHandler}
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary"
                        id="summary"
                        value={gameData.summary}
                        onChange={changeHandler}
                    />

                    <input className="btn submit" type="submit" value="Edit Game" />

                </div>
            </form>
        </section>
    )
}