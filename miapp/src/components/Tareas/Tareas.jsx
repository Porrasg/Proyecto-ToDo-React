import React from 'react'
import "./Tareas.css"

function Tareas(props) {
    return (
    <div className=' contenedor grupotareas'>
        <input type="checkbox" onChange={props.marcarTarea} />
        <p>{props.texto}</p>
        <button onClick={props.eliminartarea}>Delete</button>
    </div>
    )
}

export default Tareas