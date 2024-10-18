import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/DashBoard";
import Customers from "./pages/Customers";
import Designs from './pages/Designs';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Blog from './pages/Blog';
// import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/about" element={<About />} />*/}
        <Route path="/designs" element={<Designs />} />
        {/*<Route path="/projects" element={<Projects />} />*/}
        {/*<Route path="/blog" element={<Blog />} />*/}
        {/*<Route path="/contact" element={<Contact />} />*/}

        <Route path={"/dashboard"} element={<Dashboard />} />

        {/* Test show customer list get to backend use axios */}
        <Route path={"/customers"} element={<Customers />} />
      </Routes>
    </Router>
  );
};

export default App;
