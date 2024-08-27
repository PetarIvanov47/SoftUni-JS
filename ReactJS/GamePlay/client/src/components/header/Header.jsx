import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1><Link className="home" to="/">GamesPlay</Link></h1>
            <nav>
                <Link to="/games">All games</Link>
                <div id="user">
                    <Link to="/game/create">Create Game</Link>
                    <a href="#">Logout</a> 
                </div>
                <div id="guest">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </div>
            </nav>
        </header>
    )
}