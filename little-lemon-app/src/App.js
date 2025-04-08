import './App.css';
import './index.css';
import Nav from'./Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Reservation from './Reservations';
import Login from './Login';
import { submitAPI } from './api/bookingAPI';
import ConfirmationPage from './ConfirmPage';


function App() {
  return (
    <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/menu" element={<Menu />}/>
            <Route path="/reservations" element={<Reservation submitAPI={submitAPI} />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/confirmation" element={<ConfirmationPage />} />
          </Routes>
    </Router>
  );
}

export default App;
