import React from 'react'
import {ChatContext} from '../context/ChatProvider'

const Navbar = () => {

    const {usuario, ingresoUsuario, cerrarSesion} = React.useContext(ChatContext);


    return (
        <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand">
                Chat-Na!
            </span>
            <div className="">
                {
                    usuario.estado ? (
                        <button className="btn btn-outline-danger my-2" 
                        onClick={cerrarSesion}>
                            Cerrar Sesion
                        </button>
                    ) : (
                        <button className="btn btn-outline-success my-2" 
                        onClick={ingresoUsuario}>
                            Acceder
                        </button>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar