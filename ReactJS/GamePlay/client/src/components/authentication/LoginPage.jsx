import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useContext } from "react";
import ProfileContext from "../context/profileContext";

export default function LoginPage() {
    const { login } = useContext(ProfileContext);

    const initialData = {
        username: "",
        password: "",
    };

    const formSubmitHandler = async (e) => {
        const isValid = login({ ...values });
    };

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialData, login);


    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={submitHandler}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder=""
                        autoComplete="username"
                        value={values.username}
                        onChange={changeHandler}
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        autoComplete="current-password"
                        value={values.password}
                        onChange={changeHandler}
                    />
                    <input
                        type="submit"
                        className="btn submit"
                        value="Login"
                    />
                    <p className="field">
                        <span>If you don't have profile click
                            <Link to="/register">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
}