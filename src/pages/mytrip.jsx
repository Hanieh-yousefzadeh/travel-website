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
                <li key={country.uuid}>
                    <Link to={`/country/${country.uuid}`}>{country.names.common}</Link>
                </li>
            ))}
        </div>
    )
}
export default MyTrip;