import React from 'react'
import Login from './Components/Auth/Login'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import SIgnup from './Components/Auth/SIgnup';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Hotels from './Components/Hotels/Hotels';
import HotelDetails from './Components/Hotels/HotelDetails';
import Restaurants from './Components/Restaurant/Restaurants';
import RestaurantDetails from './Components/Restaurant/RestaurantDetails';
const App = () => {
  return (
    <>

      <Router>

        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/Hotels" element={<Hotels />}>
          </Route>
          <Route exact path="/Restaurants" element={<Restaurants />}>
          </Route>
          <Route exact path="/Login" element={<Login />}>
          </Route>
          <Route exact path="/Signup" element={<SIgnup />}>
          </Route>
          <Route exact path="/RestaurantDetails" element={<RestaurantDetails />}>
          </Route>
          <Route exact path="/HotelDetails" element={<HotelDetails />}>
          </Route>

        </Routes>
        <Footer/>
      </Router>

    </>
  )
}

export default App