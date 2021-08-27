import React from 'react'
import Header from './componentes/header/Header'
import Conteudo from './componentes/conteudo-site/Conteudo'
import Post from './componentes/Conteudo-post/Post'
import './App.css'




const App = () => {
    return (
        <div className="container">
            <Header/>
            <div className="conteudo">
                <Conteudo/>   
            <div className="conteudo-post">
                <Post/>
            </div>
            </div>
        </div>
    )
}


export default App