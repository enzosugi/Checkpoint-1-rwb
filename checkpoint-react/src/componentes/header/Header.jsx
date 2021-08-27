import React from 'react'
import './Header.css'


export default function Header() {
    return(
        <header className="header-group">
            <div className="header">
                <nav>
                    <ul>
                        <a class="nacional"href="#">Nacional<span class="redball"></span></a>
                        <a href="#">Business</a>
                        <a href="#">Internacional</a>
                        <a href="#">Saúde</a>
                        <a href="#">Tecnologia</a>
                        <a href="#">Esporte</a>
                        <a href="#">Entreterimento</a>
                        <a href="#">Estilo</a>
                        <a href="#">Viagem & Gastronomia</a>
                        <a href="#">Newsletters</a>
                        <a href="#">Podcasts</a>
                    </ul>
                </nav>
            </div>
        </header>
    ) 
}