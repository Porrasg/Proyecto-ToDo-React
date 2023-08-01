import React, { useState } from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'; // no lo use porque mi log in y sign up estan juntos.

function SignUp() {

    // =======================================sign up============================================================
    const [inputNombreValor, setInputNombreValor] = useState("");
    const [inputCorreoValor, setInputCorreoValor] = useState("");
    const [inputPasswordValor, setInputPasswordValor] = useState("");

    // const navigate = useNavigate(); // Navigate me ayuda a navegar atreavez de mi pagina

    function registrar() {
        // obtener local
        const users = localStorage.getItem("users");
        let userData = JSON.parse(users) ?? []; //los converti a objeto
        // { nombre:"", email: "", password:""}

        const indiceUser = userData.findIndex((user) => { return user.email === inputCorreoValor }) // Find Index: busca el indice de un objeto que cumpla una condicion 
        // Find Index retorna el indice si lo encuentra y retorna un -1 si no lo encuentra 
        if (indiceUser >= 0) {
            alert("Ya existe un usuario con ese correo")
            return;
        }

        if (inputNombreValor.trim() === "" || inputCorreoValor.trim() === "" || inputPasswordValor.trim() === "") {
            alert("La data tiene vacío");
            return;
        }

        // guardar en local
        const newUser = {
            nombre: inputNombreValor,
            email: inputCorreoValor,
            password: inputPasswordValor
        }
        userData.push(newUser); // El push agrega cosas a las listas/arrays
        localStorage.setItem("users", JSON.stringify(userData));
        // redirigir

        // // usuario registrado
        // navigate("/login");
    }
    // =======================================sign up============================================================



    // ========================================== log in ============================================================
    const navigate = useNavigate();

    const [loginEmailValor, setLoginEmailValor] = useState("");
    const [loginPasswordValor, setLoginPasswordValor] = useState("");

    function iniciarSesion(evento){
        evento.preventDefault();

        // obtener lista de users
        const users = localStorage.getItem("users");
        let userData = JSON.parse(users) ?? []; //los converti a objeto

        //comparar contraseña
        const indiceUser = userData.findIndex( (user)=>{
            return (user.email === loginEmailValor && user.password === loginPasswordValor)
        });
        // si son iguales iniciar sesion 
        if(indiceUser >= 0){
            const users = userData[indiceUser];

            //sesion storage
            sessionStorage.setItem("sesion", JSON.stringify(users));

            navigate("/tareas/" + users.nombre);

        }
    }
    // ========================================== log in ============================================================



    return (
        <div>
            <div className='todo'>

                <div className="wrapper">
                    <div className="card-switch">
                        <label className="switch">
                            <input type="checkbox" className="toggle" />

                            <span className="slider"></span>

                            <span className="card-side"></span>

                            <div className="flip-card__inner">
                                {/* log in */}
                                <div className="flip-card__front">
                                    <div className="title">Log in</div>
                                    <form className="flip-card__form" action="">
                                        <input value={loginEmailValor} onChange={(evento) => { setLoginEmailValor(evento.target.value); }} className="flip-card__input" name="email" placeholder="Email" type="email" />
                                        <input value={loginPasswordValor} onChange={(evento) => { setLoginPasswordValor(evento.target.value); }} className="flip-card__input" name="password" placeholder="Password" type="password" />
                                        <button className="flip-card__btn" onClick={iniciarSesion}>Let`s go!</button>
                                    </form>
                                </div>
                                {/* sign up */}
                                <div className="flip-card__back">
                                    <div className="title">Sign up</div>
                                    <form className="flip-card__form" action="">
                                        <input value={inputNombreValor} onChange={(evento) => { setInputNombreValor(evento.target.value); }} className="flip-card__input" placeholder="Name" type="name" />
                                        <input value={inputCorreoValor} onChange={(evento) => { setInputCorreoValor(evento.target.value); }} className="flip-card__input" name="email" placeholder="Email" type="email" />
                                        <input value={inputPasswordValor} onChange={(evento) => { setInputPasswordValor(evento.target.value); }} className="flip-card__input" name="password" placeholder="Password" type="password" />
                                        <button className="flip-card__btn" onClick={registrar}>Confirm!</button>
                                    </form>
                                </div>

                            </div>
                        </label>
                    </div>
                </div >
            </div>
        </div >
    )
}

export default SignUp;