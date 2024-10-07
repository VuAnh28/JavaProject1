import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
// import Designs from './pages/Designs';
// import Projects from './pages/Projects';
// import Blog from './pages/Blog';
// import Contact from './pages/Contact';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/*<Route path="/about" element={<About />} />*/}
                {/*<Route path="/designs" element={<Designs />} />*/}
                {/*<Route path="/projects" element={<Projects />} />*/}
                {/*<Route path="/blog" element={<Blog />} />*/}
                {/*<Route path="/contact" element={<Contact />} />*/}
            </Routes>
        </Router>
    );
};

export default App;