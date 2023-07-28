import React from 'react'
import "./InputAgregar.css"


function InputAgregar(props) {
    return (
        <div>
            <div className='input-group-agregar'>
                <form onSubmit={props.agregarTarea}>
                    <div className='input-border inp'>
                    <input className='inputAdd' onChange={props.inputAgregar} value={props.value} type="text" placeholder='Agregar Tarea' />
                    </div>
                    <br />
                    <button onClick={props.agregarTarea} className='button-add' type='button' >Agregar</button>
                </form>
            </div>
        </div>
    )
}

export default InputAgregar;