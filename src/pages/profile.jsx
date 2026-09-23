import { useContext } from "react";
import { AuthContext } from "../context/authcontect";

function Profile() {
    const { user } = useContext(AuthContext)
    console.log(user);

    return (
        <div>
            <h1>my profile</h1>
            <h3>{user.name}</h3>
            <h3>{user.family}</h3>
            <h3>{user.email}</h3>
        </div>

    )
}
export default Profile;