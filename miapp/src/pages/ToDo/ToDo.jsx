import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./ToDo.css"

// import InputBuscar from '../../components/InputBuscar/InputBuscar'

import Contador from '../../components/Contador/Contador';
import InputAgregar from '../../components/InputAgregar/InputAgregar'
import Tareas from '../../components/Tareas/Tareas';



function ToDo() {
    const [listaTareas , setListaTareas] = useState([]);
    const [inputValue , setInputValue] = useState("");

    function inputChange(evento){
        setInputValue(evento.target.value);
    }

    // agregar
    function agregarTareas(evento){
        evento.preventDefault();

        let textos = inputValue.trim();
        if(textos === ""){
            alert("texto en blanco");
        }else if (findTask()){
            alert("Tarea repetida");
        }else {

        let listaNueva = [...listaTareas];

        listaNueva.push(
            {
                id: uuidv4(),
                texto: inputValue,
                check: false
            }
        )
        setListaTareas(listaNueva);
        // console.log(listaNueva);
        setInputValue("");
    }
}

    // funcion para eliminar tareas
    function eliminar(id){
        let listaNueva = [...listaTareas]; 
        for (let index = 0; index < listaNueva.length; index++) {
            const tarea = listaNueva[index];
            if(tarea.id === id){
                listaNueva.splice(index, 1)
                break;
            }
        }
        setListaTareas(listaNueva);
        // console.log(listaNueva);
    }

    // funcion de check tareas
    function checkTarea(id){
        let listaNueva = [...listaTareas]; 
        for (let index = 0; index < listaNueva.length; index++) {
            if(listaNueva[index].id === id){
                listaNueva[index].check =! listaNueva[index].check
                break;
            }
        }
        setListaTareas(listaNueva);
    }

    function findTask(){
        for (let index = 0; index < listaTareas.length; index++) {
            if(listaTareas[index].texto.toUpperCase().trim() === inputValue.toUpperCase().trim()){
                return true;
            }
        }
        return false;
    }

    // local store====================
    // el useEffect es un hook para detectar cuando algo cambia
    // get local store
    useEffect(() => {
        let datos = localStorage.getItem('tareas');
        if (datos) {
            setListaTareas(JSON.parse(datos));
        }
    }, []);
    // save local store
    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(listaTareas));
        
    }, [listaTareas]);
    // termina local store===============

    return (
    <div className='container'>

        <h1 className='textoPrinicpal'>Tareas por hacer</h1>

        <br></br>

        <div className='parte-arriba'>
            <InputAgregar inputAgregar={inputChange} agregarTarea={agregarTareas}></InputAgregar>
            <Contador listaTareas={listaTareas}></Contador>
        </div>

        <br />

        <div className='contenedorTareas'>

            {/* boton buscar */}
            {/* <div className='inputSearch'>
                <InputBuscar></InputBuscar>
            </div> */}

            <br />

            <div className='Tareas'>
            {
                listaTareas.map((tarea, index)=>(
                    <Tareas texto={tarea.texto} 
                    key={index} 
                    id={tarea.id}
                    eliminarTarea={eliminar} 
                    check={tarea.check}
                    marcarTarea={checkTarea}
                    />
                    
                    
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