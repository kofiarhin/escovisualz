import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.styles.scss";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
