import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
import Slider from './component/Slider';
import Footer from './component/Footer';
import Services from './component/Services';
import Customer from './component/Customer';
import Login from './component/Login';
import Signup from './component/Signup';


function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<> <Home /><Slider /></>}  />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/customers" element={<Customer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App
