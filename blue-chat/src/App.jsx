import React from 'react'
import Chat from './component/Chat'
import Navbar from './component/Navbar'
import {ChatContext} from './context/ChatProvider'

const App = () => {

    const {usuario} = React.useContext(ChatContext)

    return usuario !== null ? (
        <div>
            <Navbar />
            {
                usuario ? (
                    <Chat />
                ): (
                    <div className="lead text-center mt-5">Incia sesion para hablar</div>
                )
            }

        </div>
    ) : (
        <div className="">Cargando...</div>
    ) 
}

export default App