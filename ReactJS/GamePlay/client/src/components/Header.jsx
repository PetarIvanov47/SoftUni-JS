import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            {/* <!-- Navigation --> */}
            <h1><Link class="home" to="/">GamesPlay</Link></h1>
            <nav>
                <a href="#">All games</a>
                {/* <!-- Logged-in users --> */}
                <div id="user">
                    <Link to="/createpage">Create Game</Link>
                    <a href="#">Logout</a> 
                </div>
                {/* <!-- Guest users --> */}
                <div id="guest">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </div>
            </nav>
        </header>
    )
}