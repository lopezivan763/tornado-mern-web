import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import "./index.css";
import Main from "./components/Main";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Main />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<Contact />} />
      </Route>
    </Routes>
  </Router>
);
