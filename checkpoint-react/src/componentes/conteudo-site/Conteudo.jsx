import React from 'react'
import footer from '../img/author.png'
import './Conteudo.css'

export default function Conteudo() {
    return(
        <header>
            <h1>Quais são os sintomas da variante Delta da Covid-19? Teste seus conhecimentos</h1>
            <hr></hr>
            <p>A infecção causada pela variante Delta pode provocar sintomas diferentes da doença causada pela linhagem original do novo coronavírus</p>
            <img src={footer} alt="escritor"></img>
            <hr></hr>
            <span>24/08/2021 às 16:44 | Atualizado às 16:56</span>
        

        </header>
    )
}