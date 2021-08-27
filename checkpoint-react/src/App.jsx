import React from 'react'
import Conteudo from './componentes/conteudo-site/Conteudo'
import Header from './componentes/header/Header'
import './App.css'



const App = () => {
    return (
        <div className="container">
            <Header/>
            <div className="conteudo">
                <Conteudo/>   
            </div>
            <div className="conteudo-post">
                
            </div>
        </div>
    )
}


export default App