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
        <nav className="navbar bg-base-100 shadow-sm h-15 w-full px-10 flex items-center justify-between">
            <Link to="/" className="btn btn-ghost text-3xl">Tripy</Link>
            <div className="flex gap-5">
                <Link to="/favorite" className="text-base"> favorite</Link>
                {!user && (<Link to="/login" className="text-base"> Login</Link>)}
                {user && (
                    <div>
                        <Link to="/profile">Profile</Link>
                        <button onClick={handelLog}>logout</button>
                    </div>)}
            </div>
        </nav >
    )
}
export default Header;