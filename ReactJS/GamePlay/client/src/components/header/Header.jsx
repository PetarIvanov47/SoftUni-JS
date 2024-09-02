import { useContext } from "react";
import { Link } from "react-router-dom";
import ProfileContext from "../context/profileContext";

export default function Header() {
    const { profile, isLogedIn, logOut } = useContext(ProfileContext);

    return (
        <header>
            <h1><Link className="home" to="/">GamesPlay</Link></h1>
            <nav>
                <p>{profile.username}</p>
                <Link to="/games">All games</Link>
                {isLogedIn
                    ? <div id="user"> <Link to="/game/create">Create Game</Link>
                        <Link onClick={() => logOut()}>Logout</Link>
                    </div>
                    : <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                }
            </nav>
        </header>
    )
}