import React from 'react'
import "./InputBuscar.css"

function InputBuscar() {
    return (
    <div>
        <div className='input-group-buscar'>
            <input className='inputbuscar' type="text" placeholder='Buscar Tarea' />
            <br />
            <button className='btn btn-outline-secondary' type='button'>Buscar</button>
        </div>
    </div>
    )
}

export default InputBuscar;