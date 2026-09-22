import { useContext, useEffect, useState } from "react";
import { Heart } from "lucide-react"
import { useParams } from "react-router";
import { CountryContext } from "../context/countrycontext";

function Weather() {

    const { id } = useParams();
    const { countries } = useContext(CountryContext);
    // console.log(id)
    const country = countries.find((country) => country.uuid === id);

    // console.log(country)
    // const latitude = country.capitals[0].coordinates.lat;
    // const longitude = country.capitals[0].coordinates.lng;
    // console.log(latitude);
    // console.log(longitude);

    const [weather, setWeather] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [like, setLike] = useState(false)

    useEffect(() => {

        if (!country) {
            return;
        }

        const latitude = country.capitals[0].coordinates.lat;
        const longitude = country.capitals[0].coordinates.lng;

        async function getWeather() {
            setLoading(true)
            setError("")
            try {
                const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m`)

                if (!response.ok) {
                    throw new Error("")
                }

                const data = await response.json()
                console.log(data)
                setWeather(data)
            } catch (error) {
                setError("Something went wrong. Please try again.")
                setWeather(null)
            } finally {
                setLoading(false)
            }
        }; getWeather()
    }, [country])

    if (!country) {
        return <h1>Loading country...</h1>
    }

    if (loading) {
        return <h1>loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    if (!weather) {
        return <h1>Loading weather...</h1>
    }
    function handelLike() {
        setLike(!like)
    }


    return (
        <div>
            <h1>{country.names.common}</h1>
            <h2>capital :{country.capitals[0].name}</h2>
            <h3> Temperature: {weather.current.temperature_2m} °C</h3>
            <h3>wind : {weather.current.wind_speed_10m} km/h</h3>
            <h3>Humidity : {weather.current.relative_humidity_2m} %</h3>
            <button onClick={handelLike}><Heart className={like ? "text-red-500" : ""} fill={like ? "red" : "none"} /></button>
        </div>
    )

}
export default Weather;