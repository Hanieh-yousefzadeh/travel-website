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
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/login" element={<Login />}>Login</Route>
        <Route path="/country/:id" element={<Weather />}>detail</Route>
        <Route path="/profile" element={<Profile/>}>profile</Route>
        <Route path="/favorite" element={<MyTrip/>}>list</Route>
      </Routes>

    </>
  )
}

export default App;
