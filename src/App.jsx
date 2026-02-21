import { useState } from 'react';
//import './App.css'
import Navbar from './components/Navbar'
//import Home from './views/Home'
//import Register from './components/Register'
import Footer from './components/Footer'
import Cart from './components/Cart';
//import Login from './components/Login';


function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div>
      <Navbar/>
      {/*<Home/>*/}
      {/*<Register
        formData={formData}
        onChange={handleChange}
      />*/}
      {/*<Login
        formData={formData}
        onChange={handleChange}
      />*/}
      <Cart/>
      <Footer/>
    </div>
  )
}

export default App
