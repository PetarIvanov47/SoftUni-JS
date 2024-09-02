import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useContext, useState } from "react";
import ProfileContext from "../context/profileContext";
import urls from "../../api/urls";
import { useFetch } from "../../hooks/useFetch";

export default function LoginPage() {
    const { login } = useContext(ProfileContext);
    const [isValid, setIsValid] = useState(true);

    const initialData = {
        username: "",
        password: "",
    };

    const {
        data: profiles,
        isFetching
    } = useFetch(urls.profilesUrl, {});

    const formSubmitHandler = () => {
        const { username, password } = values;

        const profile = Object
            .values(profiles)
            .filter(profile => profile.username == username && profile.password == password);

        if (profile.length === 1) {
            login(profile[0]);
            setIsValid(true);
            
        } else {
            setIsValid(false);
        };

    };

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialData, formSubmitHandler);


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
                        required
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        autoComplete="current-password"
                        value={values.password}
                        onChange={changeHandler}
                        required
                    />
                    <input
                        type="submit"
                        className="btn submit"
                        value="Login"
                    />
                    {!isValid
                        &&
                        (<div style={{ margin: '25px', color: 'red', fontSize: '20px' }}>
                            <p>Incorrect username or password!</p>
                        </div>)
                    }

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