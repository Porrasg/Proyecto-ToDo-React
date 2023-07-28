import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./ToDo.css"



import Contador from '../../components/Contador/Contador';
import InputAgregar from '../../components/InputAgregar/InputAgregar'
import InputBuscar from '../../components/InputBuscar/InputBuscar';
import Tareas from '../../components/Tareas/Tareas';

import Swal from 'sweetalert2'



function ToDo() {
    const [listaTareas, setListaTareas] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const texto = "No hay tareas"


    function inputChange(evento) {
        setInputValue(evento.target.value);
    }

    // funcion para agregar
    function agregarTareas(evento) {
        evento.preventDefault();

        // alerta para cuando se agreaga una tarea
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'TAREA AGREGADA',
            showConfirmButton: false,
            timer: 1500
        })

        let textos = inputValue.trim();

        if (textos === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Tarea sin texto.',
            });
        } else if (findTask()) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Lo siento, tarea repetida.',
            });
        } else {


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
    function eliminar(id) {
        let listaNueva = [...listaTareas];
        for (let index = 0; index < listaNueva.length; index++) {
            const tarea = listaNueva[index];
            if (tarea.id === id) {
                listaNueva.splice(index, 1)
                break;
            }
        }
        setListaTareas(listaNueva);
        // alerta para cuando se elimine una tarea
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'TAREA ELIMINADA',
            showConfirmButton: false,
            timer: 1500
        })
        // console.log(listaNueva);
    }

    // funcion de check tareas
    function checkTarea(id) {
        let listaNueva = [...listaTareas];
        for (let index = 0; index < listaNueva.length; index++) {
            if (listaNueva[index].id === id) {
                listaNueva[index].check = !listaNueva[index].check
                break;
            }
        }
        setListaTareas(listaNueva);
    }

    // funcion para las tareas en mayúsculas y espacios en blanco 
    function findTask() {
        for (let index = 0; index < listaTareas.length; index++) {
            if (listaTareas[index].texto.toUpperCase().trim() === inputValue.toUpperCase().trim()) {
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


    const [ nuevoInput, setNuevoInput] = useState("");

    function buscarTareas(letra = "a"){
        let resultados = [...listaTareas]
    }

    return (
        <div className='container'>

            <h1 className='textoPrinicpal'>Tareas por hacer</h1>

            <br></br>

            <div className='parte-arriba'>
                <InputAgregar inputAgregar={inputChange} value={inputValue} agregarTarea={agregarTareas}></InputAgregar>
                <Contador listaTareas={listaTareas}></Contador>
            </div>

            <br />

            <div className='contenedorTareas'>

                {/* boton buscar */}
                <div className='inputSearch'>
                <InputBuscar searchTareas={listaTareas} nuevoInput={nuevoInput} setNuevoInput={setNuevoInput} ></InputBuscar>
                </div>

                <br />

                <div className='Tareas'>
                    {!listaTareas.length > 0 && <p>{texto}</p>}
                    {
                        listaTareas.filter((ItemTarea)=>{return ItemTarea.texto.includes(nuevoInput)}).map((tarea, index) => (
                            <Tareas 
                                texto={tarea.texto}
                                key={index}
                                id={tarea.id}
                                eliminarTarea={eliminar}
                                check={tarea.check}
                                marcarTarea={checkTarea}
                            />
                        ))
                    }
                </div>

            </div>

            <br />
        </div>
    )
}

export default ToDo;