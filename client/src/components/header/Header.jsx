import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            {/* Navigation */}
            <h1>
                <Link className="home" href="/">
                    GamesPlay
                </Link>
            </h1>
            <nav>
                <Link href="/games">All games</Link>
                {/* Logged-in users */}
                <div id="user">
                    <Link href="/games/create">Create Game</Link>
                    <Link href="#">Logout</Link>
                </div>
                {/* Guest users */}
                <div id="guest">
                    <Link href="/login">Login</Link>
                    <Link href="/register">Register</Link>
                </div>
            </nav>
        </header>
    );
}