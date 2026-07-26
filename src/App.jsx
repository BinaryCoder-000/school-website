import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home/features" element={<Features/>} />
                <Route path="/home/about" element={<About/>} />
                <Route path="/home/loginpage" element={<LoginPage/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default App
