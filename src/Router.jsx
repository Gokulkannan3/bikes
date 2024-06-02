import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Company from "./pages/Company";
import Sig from "./pages/Sig";
import Osignup from "./pages/Osignup";
import Rsignup from "./pages/Rsignup";
import Ssignup from "./pages/Ssignup";

const AllRoutes = () =>{
    return(
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/sig" element={<Sig/>}/>
            <Route exact path="/company" element={<Company/>}/>
            <Route exact path="/showroom" element={<Osignup/>}/>
            <Route exact path="/rental" element={<Rsignup/>}/>
            <Route exact path="/service" element={<Ssignup/>}/>
        </Routes> 
    )
}

export default AllRoutes;