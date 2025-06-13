import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Login from './Pages/Login';
import Signup from './Pages/Signup/Signup';
// import NavMain from './Components/Navbar/NavMain';
import DashBoardLayout from './DashBoard/DashBoardLayout';
import Home from './Pages/HomePage/Home';

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/layout" element={<Layout/>} />
        <Route path="/DashBoardLayout" element={<DashBoardLayout />} />
      </Routes>
    </Router>
  );
}

export default Routing;
