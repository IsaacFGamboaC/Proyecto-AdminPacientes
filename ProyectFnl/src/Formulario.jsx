import React, { useState } from 'react'
import './Formulario.css'

export default function Formulario() {
    const [pacientes, setPacientes] = useState([])
    const [mascota, setMascota] = useState("")
    const [dueño, setDueño] = useState("")
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")
    const [sintomas, setSintomas] = useState("")

    function agregarPaciente() {
        const informacion = {
            mascota,
            dueño,
            fecha,
            hora,
            sintomas
        }
        setPacientes([...pacientes, informacion])
        setMascota("")
        setDueño("")
        setFecha("")
        setHora("")
        setSintomas("")
    }
    return (
        <div>
            <form className='inputForm' action="">
                <label htmlFor="">Nombre Mascota</label>
                <input onChange={(e) => { setMascota(e.target.value) }} value={mascota} type="text" />
                <label htmlFor="">Nombre Dueño</label>
                <input onChange={(e) => { setDueño(e.target.value) }} value={dueño} type="text" />
                <label htmlFor="">Fecha</label>
                <input onChange={(e) => { setFecha(e.target.value) }} value={fecha} type="date" />
                <label htmlFor="">Hora</label>
                <input onChange={(e) => { setHora(e.target.value) }} value={hora} type="time" />
                <label htmlFor="">Sintomas</label>
                <textarea onChange={(e) => { setSintomas(e.target.value) }} value={sintomas} name="Sintomas" cols="30" rows="10"></textarea>
                <button onClick={agregarPaciente} type='button'>Agregar</button>
            </form>
        </div>
    )
}