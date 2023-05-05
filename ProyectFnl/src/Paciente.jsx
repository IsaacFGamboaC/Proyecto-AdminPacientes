import React from "react";
import "./Paciente.css"

export default function Paciente({nombre,dueño,fecha,hora}) {
    return (
        <div className='pacienteContainer'>
            <h2>Paciente: {nombre} </h2>
            <h2>Dueño: {dueño} </h2>
            <h2>Fecha: {fecha} </h2>
            <h2>Hora: {hora} </h2>
        </div>
    )
}