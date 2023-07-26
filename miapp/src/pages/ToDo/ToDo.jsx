import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./ToDo.css"

import Contador from '../../components/Contador/Contador';
import InputAgregar from '../../components/InputAgregar/InputAgregar'
import InputBuscar from '../../components/InputBuscar/InputBuscar'
import Tareas from '../../components/Tareas/Tareas';



function ToDo() {
    const [listaTareas , setListaTareas] = useState([]);
    const [inputValue , setInputValue] = useState("");

    // agregar
    function agregarTareas(){

        let listaNueva = [...listaTareas];

        listaNueva.push(
            {
                id: uuidv4(),
                texto: inputValue,
                check: false
            }
        )
        setListaTareas(listaNueva);
        console.log(listaNueva);
    }

    function inputChange(evento){
        setInputValue(evento.target.value);
    }

    function eliminar(evento){
        let tarea = evento.target.parentElement;
        let listaNueva = [...listaTareas]; //copiar lista de tareas
        for (let index = 0; index < listaNueva.length; index++) {
            if(listaNueva[index].id === tarea.id){
                listaTareas.splice(index, 1);
                break;
            }
            
        }
        // if (eliminar(evento)){
        //     // alerta para cuando se elimina una tarea
        //     Swal.fire({
        //         position: 'top-end',
        //         icon: 'success',
        //         title: 'TAREA ELIMINADA',
        //         showConfirmButton: false,
        //         timer: 1500
        //         })
        // }
        tarea.remove();
        setListaTareas(listaNueva);
        console.log(listaNueva);

    }

    // function checkTarea(){

    // }

    return (
    <div className='container'>

        <h1>Tareas por hacer</h1>

        <br></br>

        <div className='inputs'>
            <InputAgregar inputAgregar={inputChange} agregarTarea={agregarTareas}></InputAgregar>
            <Contador></Contador>
        </div>

        <br />

        <div className='contenedorTareas'>

            <div className='inputSearch'>
                <InputBuscar></InputBuscar>
            </div>

            <br />

            <div className='Tareas'>
            {
                listaTareas.map((tarea, index)=>(
                    <Tareas texto={tarea.texto} 
                    key={index} 
                    eliminartarea={eliminar} 
                    />
                    
                    // marcarTarea={checkTarea}
                ))
            }
            </div>

            <div>
            <p className='textNoTasks'>No hay tareas pendientes</p>
            </div>

        </div>

        <br />
    </div>
    )
}

export default ToDo;