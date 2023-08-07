import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Offcanvas navbar</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        {/* BOTON PARA USAR */}
                        <form className="d-flex mt-3" role="search">
                            <button className="botonIniciar btn btn-outline-primary" type="button" > Iniciar </button>
                        </form>

                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar;