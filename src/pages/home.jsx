import { useContext, useState } from "react";
import { Link } from "react-router";
import { CountryContext } from "../context/countrycontext";

function Home() {
    const { countries } = useContext(CountryContext)
    const [search , setSearch] = useState("")

    const searchedCountries = countries.filter((country) =>(
        country.names.common.toLowerCase().includes(search.toLowerCase())
    ))

    function handleSearch(e){
        setSearch(e.target.value)
    }

    function deleteSearch(){
        setSearch("")
    }
    return (
        <div>
            <input type="text" value={search} onChange={handleSearch}  className="border"/>

            {search && (
                <button onClick={deleteSearch}>x</button>
            )}



            {(search ? searchedCountries : countries).map((country) => (
                <Link key={country.uuid} to={`/country/${country.uuid}`}>
                    {country.flag.url_svg !== "" && (<img src={country.flag.url_svg} />)}
                    <h1 >{country.names.common}</h1>
                </Link>
            )
            )}
        </div>
    )
} export default Home;