import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/ContactForm';
import NavBar from './Components/navBar';
// import './index.css'; // Uncomment if needed

const App = () => {
  return (
    <Router>
      <div >
        <Header  />
        <NavBar/>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer  />
      </div>
    </Router>
  );
};

export default App;
