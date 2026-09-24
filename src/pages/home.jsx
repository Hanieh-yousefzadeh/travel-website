import { useContext, useState } from "react";
import { Link } from "react-router";
import { CountryContext } from "../context/countrycontext";
import Hero from "../components/hero";

function Home() {
    const { countries } = useContext(CountryContext)
    const [search, setSearch] = useState("")

    const searchedCountries = countries.filter((country) => (
        country.name.toLowerCase().includes(search.toLowerCase())
    ))

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    function deleteSearch() {
        setSearch("")
    }
    return (
        <div>
            <Hero />
            <section className="">
                <input type="text" value={search} onChange={handleSearch} className="border" />

                {search && (
                    <button onClick={deleteSearch}>x</button>
                )}



                {(search ? searchedCountries : countries).map((country) => (
                    <Link key={country.numericCode} to={`/country/${country.numericCode}`}>
                        {country.flags.png !== "" && (<img src={country.flags.png} />)}
                        <h1 >{country.name}</h1>
                    </Link>
                )
                )}
            </section>

        </div>
    )
} export default Home;