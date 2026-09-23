import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/authcontect";


function Login() {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [family, setFamily] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [rememberMe, setRememberMe] = useState(false)

    const [error, setError] = useState("")

    const { setUser } = useContext(AuthContext);

    const correctEmail = "royaltrip@gmail.com"
    const correctPassword = "14725869"



    function handelSubmit(e) {

        e.preventDefault();

        if (name.trim() === "") {
            setError("please enter name");
            return
        }
        if (family.trim() === "") {
            setError("please enter family");
            return
        }
        if (email.trim() === "") {
            setError("please enter email");
            return
        }
        if (email !== correctEmail) {
            setError("email invalid");
            return
        }
        if (password.trim() === "") {
            setError("please enter password");
            return
        }
        if (password !== correctPassword) {
            setError("password invalid");
            return
        }
        if (confirmPassword.trim() === "") {
            setError("please enter confirmPassword");
            return
        }

        if (confirmPassword !== password) {
            setError("passwords do not match");
            return
        }

        setError("");

        setUser({
            name: name,
            family: family,
            email: email
        })
        if (rememberMe) {
            localStorage.setItem("user", JSON.stringify({ name: name, family: family, email: email }));
        }

        navigate("/")
    }

    function handelName(e) {
        setName(e.target.value)
    }

    function handelFamily(e) {
        setFamily(e.target.value)
    }

    function handelEmail(e) {
        setEmail(e.target.value)
    }

    function handelPassword(e) {
        setPassword(e.target.value)
    }
    function handelConfirmPassword(e) {
        setConfirmPassword(e.target.value)
    }

    function handleRemember(e) {
        setRememberMe(e.target.checked)
    }



    return (
        <div>
            <h1>login page</h1>
            <form onSubmit={handelSubmit}>
                <p>{error}</p>
                <input type="text" value={name} placeholder="name" onChange={handelName} />
                <input type="text" value={family} placeholder="family" onChange={handelFamily} />
                <input type="email" value={email} placeholder="email" onChange={handelEmail} />
                <input type="password" value={password} placeholder="password" onChange={handelPassword} />
                <input type="password" value={confirmPassword} placeholder="confirm password" onChange={handelConfirmPassword} />

                <label> 
                    <input type="checkbox" checked={rememberMe} onChange={handleRemember} /> Remember Me
                </label>

                <button type="submit">Login</button>

            </form>
        </div>
    )
}
export default Login;