import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Company from "./pages/Company";
import Sig from "./pages/Sig";
import Rsignup from "./pages/Rsignup";
import Ssignup from "./pages/Ssignup";
import Csignup from "./pages/Csignup";
import Clogin from "./pages/Clogin";
import Normal from "./pages/Normal";
import Add from "./pages/Add";

const AllRoutes = () =>{
    return(
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/sig" element={<Sig/>}/>
            <Route exact path="/company" element={<Company/>}/>
            <Route exact path="/rental" element={<Rsignup/>}/>
            <Route exact path="/service" element={<Ssignup/>}/>
            <Route exact path="/csignup" element={<Csignup/>}/>
            <Route exact path="/clogin" element={<Clogin/>}/>
            <Route exact path="/normal" element={<Normal/>}/>
            <Route exact path="/addbikes" element={<Add/>}/>
        </Routes> 
    )
}

export default AllRoutes;