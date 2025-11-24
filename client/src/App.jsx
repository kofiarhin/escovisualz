import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.styles.scss";
import Home from "./Pages/Home/Home";
import { BASE_URL } from "./constants/constants";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Gallery from "./Pages/Home/Gallery/Gallery";
import { useEffect } from "react";
import Booking from "./Pages/Booking/Booking";
import About from "./Pages/About/About";

const App = () => {
  useEffect(() => {
    const checkHealth = async () => {
      const res = await fetch(BASE_URL);
      const data = await res.json();
      console.log({ data });
    };

    checkHealth();
  });
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
