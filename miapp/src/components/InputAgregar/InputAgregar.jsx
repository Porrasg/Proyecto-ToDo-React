import React from 'react'
import "./InputAgregar.css"


function InputAgregar(props) {
    return (
        <div>
            <div className='input-group-agregar'>
                <form onSubmit={props.agregarTarea}>
                    <input onChange={props.inputAgregar} type="text" placeholder='Agregar Tarea' />
                    <br />
                    <br />
                    <button onClick={props.agregarTarea} className='button-add' type='button' >Agregar</button>
                </form>
            </div>
        </div>
    )
}

export default InputAgregar;