import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useRegister } from "../../hooks/useAuth";
import { useState } from "react";

const initialData = {
    email: '',
    username: '',
    password: '',
    conformationPass: '',
};


export default function RegisterPage() {
    const register = useRegister();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const registerHandler = async ({ email, username, password, conformationPass }) => {
        if (password !== conformationPass) {
            return setError('Password missmatch!');
        };

        try {
            await register(email, username, password);

            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    };

    const {
        values: userData,
        changeHandler,
        submitHandler
    } = useForm(initialData, registerHandler);

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={submitHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        placeholder="maria@email.com"
                        value={userData.email}
                        onChange={changeHandler}
                        required
                    />

                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        autoComplete="username"
                        value={userData.username}
                        onChange={changeHandler}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="new-password"
                        value={userData.password}
                        onChange={changeHandler}
                        required
                    />

                    <label htmlFor="conformationPass">Confirm Password:</label>
                    <input
                        type="password"
                        name="conformationPass"
                        id="conformationPass"
                        autoComplete="new-conformationPass"
                        value={userData.conformationPass}
                        onChange={changeHandler}
                        required
                    />

                    {error && <p style={{color: 'red'}}>
                        <span>{error}</span>
                    </p>}


                    <input className="btn submit" type="submit" value="Register" />



                    <p className="field">
                        <span>
                            If you already have profile click
                            <Link to="/login">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
}