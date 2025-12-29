import { Routes, Route } from "react-router-dom";
import Register from "./register";
import Login from "./login";
import Banner from "../components/banner";

function Home() {
  return (
    <div>
      <Banner />
      <Routes>
        <Route path="/" element={<div>Welcome to KiasuBid Home Page</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default Home;
