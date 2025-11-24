import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.styles.scss";
import Home from "./Pages/Home/Home";
import { BASE_URL } from "./constants/constants";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";

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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
