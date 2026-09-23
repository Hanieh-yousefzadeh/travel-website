import { useContext } from "react";
import { CountryContext } from "../context/countrycontext";
import { Link } from "react-router";

function MyTrip() {
    const { favorites } = useContext(CountryContext)
    console.log(favorites);
    return (
        <div>
            <ul>my favorite trip</ul>
            {favorites.map((country) => (
                <li key={country.numericCode}>
                    <Link to={`/country/${country.numericCode}`}>{country.name}</Link>
                </li>
            ))}
        </div>
    )
}
export default MyTrip;