import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navigation/navbar.jsx';
import Title from './components/Pages/title.jsx';
import Portfolio from './components/Pages/portfolio.jsx';
import About from './components/Pages/about.jsx';
import Footer from './components/navigation/footer.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
