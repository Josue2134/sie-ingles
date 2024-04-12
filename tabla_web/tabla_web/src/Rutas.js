import React from "react";
import {Routes,Route } from "react-router-dom";
import Datos from "./Datos."
import Tabla from "./Tabla.js";

export default function rutas(){

    return(
        <Routes>
            <Route exact path="/Datos.js" elemento={<Datos/>}/>
            <Route exact path="/" elemento={<Tabla/>}/>
        </Routes>
        
    )
}