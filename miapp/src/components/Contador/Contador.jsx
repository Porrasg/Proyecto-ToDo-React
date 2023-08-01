import React, { useState, useEffect } from 'react'
import "./Contador.css"

function Contador(props) {

    const [count, setCount] = useState(0);

    useEffect(
        () => {
            contador();
        }, [props.listaTareas]);

    const contador = () => {
        let listaTareas = props.listaTareas;
        var contadorNuevo = 0
        for (let index = 0; index < listaTareas.length; index++) {
            if (listaTareas[index].check === true) {
                contadorNuevo++
            }
        }
        setCount(contadorNuevo);
    }

    return (
        <div>
            <div className="Tareas-Completadas">
                <p className='parrafoContador'>Tareas Completadas
                    <br />
                    <br />
                </p>
                
                <div className="loader">
                    <div className="loader_cube loader_cube--color"></div>
                    <div className="loader_cube loader_cube--glowing">
                        <br />
                        <span id="contador-circulo">{count}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contador;