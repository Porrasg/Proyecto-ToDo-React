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
        <div>
            <input className='check' type="checkbox" checked={props.check} onChange={check} />
        </div>
        <p className='parrafo-lista'>{props.texto}</p>
        <button className='botonEliminar btn btn-danger' onClick={eliminar}>Eliminar</button>
    </div>
    )
}

export default Tareas;