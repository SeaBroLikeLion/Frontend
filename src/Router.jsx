import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BoatDetail from './pages/BoatDetail';
import BoatFishing from './pages/BoatFishing';
import Reservation from './pages/Reservation'; 


function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/boats" element={<BoatFishing />} />  
        <Route path="/boat/:id" element={<BoatDetail />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
