import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./ToDo.css"

import Contador from '../../components/Contador/Contador';
import InputAgregar from '../../components/InputAgregar/InputAgregar'
import InputBuscar from '../../components/InputBuscar/InputBuscar'



function ToDo() {
    const [listaTareas , setListaTareas] = useState([]);
    // agregar
    function agregarTareas(){

        let listaNueva = [...listaTareas];

        listaNueva.push(
            {
                id: uuidv4(),
                texto: "",
                check: false
            }
        )
        setListaTareas(listaNueva);
        console.log(listaNueva);
    }

    return (
    <div className='container'>

        <h1>Tareas por hacer</h1>

        <br></br>

        <div className='inputs'>
            <InputAgregar onClick={agregarTareas}></InputAgregar>
            <InputBuscar></InputBuscar>
        </div>

        <br></br>

        <Contador></Contador>

        
        <div>
            {
                listaTareas.map((tarea, index)=>(
                    <li key={index}>lista</li>
                ))
            }
        </div>

    </div>
    )
}

export default ToDo;