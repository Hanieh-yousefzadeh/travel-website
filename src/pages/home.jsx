import { useEffect, useState } from "react";
import { Link } from "react-router";


const apikey = import.meta.env.VITE_COUNTRIES_API_KEY;
// console.log(apikey);


function Home() {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        async function getCountry() {
            setLoading(true)
            setError("")
            try {
                let allCountries = [];
                let offset = 0;
                let more = true;
                while (more) {
                    const response = await fetch(`https://api.restcountries.com/countries/v5?limit=100&offset=${offset}`, {
                        headers: {
                            'Authorization': `Bearer ${apikey}`
                        }
                    }); // console.log(respone)
                    if (!response.ok) {
                        throw new Error("Something went wrong")
                    }
                    const data = await response.json();
                    console.log(data)
                    const pageCountries = data.data.objects;

                    allCountries = [...allCountries, ...pageCountries]

                    more = data.data.meta.more;
                    offset += 100
                }

                setCountries(allCountries)

            } catch (error) {
                setError("Something went wrong. Please try again.")
                setCountries([])
            } finally {
                setLoading(false)
            }

        }
        getCountry()

    }, [])

    if (loading) {
        return (<h1>loading ...</h1>)
    }

    if (error) {
        return (<h1>{error}</h1>)
    }

    return (
        <div>
            {countries.map((country) => (
                <Link to="/country/:id">
                    <img src={country.flag.url_png} alt="" />
                    <h1 key={country.uuid}>{country.names.common}</h1>
                </Link>
            )
            )}
        </div>
    )
} export default Home;