import React from "react";
import "./Paciente.css"

export default function Paciente({ pacientes, setPacientes, nombre, dueño, fecha, hora }) {
    const eliminarCita = () => {
        const newPacientes = pacientes.filter(paciente => paciente.dueño != dueño);
        setPacientes(newPacientes)
    }
    return (
        <div className='pacienteContainer'>
            <h2>Paciente: {nombre} </h2>
            <h2>Dueño: {dueño} </h2>
            <h2>Fecha: {fecha} </h2>
            <h2>Hora: {hora} </h2>
            <button className='delete' onClick={eliminarCita}>ELIMINAR CITA</button>
        </div>
    )
}