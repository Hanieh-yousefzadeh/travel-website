import { useEffect, useState } from "react";
import { Routes, Route } from "react-router"
import Home from "./pages/home";
import Weather from "./pages/weather";
import Login from "./pages/login";
import Profile from "./pages/profile";
import MyTrip from "./pages/mytrip";
import { CountryContext } from "./context/countrycontext";
import Header from "./components/header";

const apikey = import.meta.env.VITE_COUNTRIES_API_KEY;
// console.log(apikey);

function App() {

  const [countries, setCountries] = useState([]);

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || []
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites]);

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
          // console.log(data)
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

  }, []);

  if (loading) {
    return (<h1>loading ...</h1>)
  }

  if (error) {
    return (<h1>{error}</h1>)
  }
  return (
    <>
      <Header />
      <CountryContext value={{ countries, favorites, setFavorites }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/country/:id" element={<Weather />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorite/" element={<MyTrip />} />
        </Routes>
      </CountryContext>

    </>
  )
}



export default App;
