import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Login from './Pages/Login';
import Signup from './Pages/Signup/Signup';
import NavMain from './Components/Navbar/NavMain';

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavMain />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Layout" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default Routing;
