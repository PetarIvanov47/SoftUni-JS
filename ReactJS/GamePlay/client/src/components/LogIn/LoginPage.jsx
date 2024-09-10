import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useLogin } from "../../hooks/useAuth";

const initialData = {
    email: '',
    password: '',
};

export default function LoginPage() {
    const login = useLogin();
    const navigate = useNavigate();

    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);
            
            navigate('/')
        } catch (error) {
            console.error(error.message);
        }
    };

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialData, loginHandler);


    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={submitHandler}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder=""
                        autoComplete="email"
                        value={values.email}
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
                    {/* {!isValid
                        &&
                        (<div style={{ margin: '25px', color: 'red', fontSize: '20px' }}>
                            <p>Incorrect username or password!</p>
                        </div>)
                    } */}

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