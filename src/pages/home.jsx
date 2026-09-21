import { useContext } from "react";
import { Link } from "react-router";
import { CountryContext } from "../context/countrycontext";

function Home() {
    const { countries } = useContext(CountryContext)
    return (
        <div>
            {countries.map((country) => (
                <Link key={country.uuid} to={`/country/${country.uuid}`}>
                    {country.flag.url_svg !== "" && (<img src={country.flag.url_svg} />)}
                    <h1 >{country.names.common}</h1>
                </Link>
            )
            )}
        </div>
    )
} export default Home;