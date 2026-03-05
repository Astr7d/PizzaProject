import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
//import Login from './pages/Login';
//import Home from './pages/Home';
//import Register from './pages/Register';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Footer from './components/Footer';
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";


const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

