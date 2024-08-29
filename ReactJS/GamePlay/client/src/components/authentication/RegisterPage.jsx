import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import profilesAPI from "../../api/profiles-api";

export default function RegisterPage() {
    const navigate = useNavigate();

    const initialData = {
        username: "",
        email: "",
        password: "",
        conformationPass: "",
    };

    const formSubmitHandler = async (e) => {
        try {
            const { confPass, ...profileData } = userData;
            const newProfile = await profilesAPI.createProfile(profileData);
            navigate("/login");

        } catch (error) {
            console.log(error.message);
        }
    };

    const {
        values: userData,
        changeHandler,
        submitHandler
    } = useForm(initialData, formSubmitHandler);

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={submitHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

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

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                        value={userData.email}
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