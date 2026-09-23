import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/authcontect";

function Header() {

    const navigate = useNavigate();

    const { user, setUser } = useContext(AuthContext)
    function handelLog() {
        setUser(null)
        localStorage.removeItem("user")
        navigate("/login")
    }
    return (
        <nav>
            <Link to="/">tripy</Link>
            <Link to="/favorite"> favorite</Link>
            {!user && (<Link to="/login"> Login</Link>)}
            {user && (
                <div>
                    <Link to="/profile">Profile</Link>
                    <button onClick={handelLog}>logout</button>
                </div>)}
        </nav>
    )
}
export default Header;