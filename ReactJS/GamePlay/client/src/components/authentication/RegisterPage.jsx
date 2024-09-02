import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import profilesAPI from "../../api/profiles-api";
import { useFetch } from "../../hooks/useFetch";
import urls from "../../api/urls";
import { useState } from "react";

export default function RegisterPage() {
    const navigate = useNavigate();
    const [fields, setFields] = useState({
        username: { isValid: true, message: '' },
        email: { isValid: true, message: '' },
        password: { isValid: true, message: '' },
        confPass: { isValid: true, message: '' },
    });
    // const [isValid, setIsValid] = useState(true);

    const initialData = {
        username: "",
        email: "",
        password: "",
        conformationPass: "",
    };



    const validateUsername = (username, profiles) => {
        const usernameExists = Object
            .values(profiles)
            .some(profile => profile.username === username);

        setFields(prev => ({
            ...prev, username: {
                isValid: !usernameExists,
                message: 'Username already exists'
            }
        }))
    };

    const validateEmail = (email) => { };
    const validatePassword = (password) => { };
    const validateConformationPassword = (password, conformationPass, profiles) => { };

    const validateRegisterForm = ({ username, email, password, conformationPass }) => {

        validateUsername(username, profiles);
        validateEmail(email, profiles);
        validatePassword(password);
        validateConformationPassword(password, conformationPass, profiles);

        const isValid = Object
        .values(fields)
        .some(field => field.isValid);
        
        return !isValid

    };


    const formSubmitHandler = () => {
        const formIsValid = validateRegisterForm(userData);

        if (formIsValid) {
            try {
                const { conformationPass, ...profileData } = userData;
                profilesAPI.createProfile(profileData);
                navigate("/login");

            } catch (error) {
                console.log(error.message);
            }
        } else {
            console.log('The form is not valid');
        };

    };

    const {
        data: profiles,
        isFetching
    } = useFetch(urls.profilesUrl, {});
    console.log(profiles)

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
                    {!fields.username.isValid && (<p style={{ color: 'red' }}>{fields.username.message}</p>)}


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