import React from 'react'
import Logo from '../img/logo.svg'
import './Post.css'

export default function Post() {
    return(
        <div>
            <figure>
                <img className="logo" src={Logo} alt="logo"></img>
            </figure>
            <div>
                <p className="txt-post">Por ser uma doença nova, a <a href="#">Covid-19</a> ainda não foi compreendida totalmente pela comunidade médica global.
                Os conhecimentos sobre a doença estão em costante atualização, incluindo os sintomas e os impactos para a saúde a curto e longo prazos.</p>
                <p className="txt-post">A <a href="#">variante Delta da Covid-19,</a> originalmente conhecida como B.1.617.2, existe desde o final do ano passado,
                mas nos últimos meses tornou-se rapidamente dominante em muitos países. Ainda não está claro o quanto essa cepa é mais transmissível.
                Estimativas variam entre 60% e 200% mais transmissível, dependendo de quem apresenta a estimativa.</p>
            </div>
        </div>
    ) 
}