import React from 'react'
import "./Tareas.css"

function Tareas(props) {
    function eliminar(){
        props.eliminarTarea(props.id)
    }

    function check(){
        props.marcarTarea(props.id)
    }

    return (
    <div className=' contenedor grupotareas'>
        <input className='input' type="checkbox" checked={props.check} onChange={check} />
        <p className='parrafo-lista'>{props.texto}</p>
        <button className='botonEliminar' onClick={eliminar}>Delete</button>
    </div>
    )
}

export default Tareas;