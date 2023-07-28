import React from 'react'
import "./InputBuscar.css"


function InputBuscar(props) {

    function inputChange2(evento){
        props.setNuevoInput(evento.target.value);
    }
    function search(evento){
        evento.preventDefault();
        props.searchTareas(props.nuevoInput);
    }



    return (
    <div>
        <div className='input-group-buscar'>
            <input onChange={inputChange2} value={props.nuevoInput} className='inputbuscar' type="text" placeholder='Buscar Tarea' />
        </div>
    </div>
    )
}

export default InputBuscar;