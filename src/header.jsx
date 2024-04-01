import { Link } from "react-router-dom";
export function Header() {
    return(
        <div>
            <header>
                <p> Dum Bird Creations</p>
                <Link to="/signup">Signup</Link>
            </header>
        </div>
    )
}