import React from 'react'
import "./Contador.css"

function Contador() {
    return (
    <div>
        <form className="Tareas-Completadas">
            <p className='parrafoContador'>Tareas Completadas
            <br />
            <br />
                <span className="container-contador" id="contador-circulo">0</span>
            </p>
        </form>
    </div>
    )
}

export default Contador;