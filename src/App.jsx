import { Routes, Route } from "react-router"
import Home from "./pages/home";
import Weather from "./pages/weather";
import Login from "./pages/login";
import Profile from "./pages/profile";
import MyTrip from "./pages/mytrip";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/country/:id" element={<Weather />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/favorite" element={<MyTrip/>} />
      </Routes>

    </>
  )
}

export default App;
