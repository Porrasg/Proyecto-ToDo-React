import React from 'react'
import "./InputAgregar.css"

function InputAgregar() {
    return (
        <div>
            <div className='input-group-agregar'>
                <input type="text" placeholder='Agregar Tarea' />
                <br />
                <button className='btn btn-outline-secondary' type='button'>Agregar</button>
            </div>
        </div>
    )
}

export default InputAgregar;