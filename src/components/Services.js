import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Title from './Title';

class Services extends Component {
    state={
        services:[
            {
                icon: <FaCocktail />,
                title: "Cócteles gratis",
                info: "Disfruta de una variedad de deliciosos cócteles preparados especialmente para ti. Déjate sorprender por nuestra selección única de bebidas que seguramente te deleitarán en cada sorbo. ¡Ven y descubre la magia en cada trago!",
            },
            {
                icon: <FaHiking />,
                title: "Senderismo sin fin",
                info: "Explora senderos infinitos y sumérgete en la belleza natural que te rodea. Encuentra la serenidad en cada paso mientras te aventuras en emocionantes rutas de senderismo. ¡Descubre la naturaleza en su máxima expresión y crea recuerdos inolvidables en cada caminata!",
            },
            {
                icon: <FaShuttleVan />,
                title: "Transporte gratuito",
                info: "¡Disfruta de nuestro servicio de transporte gratuito! Te llevamos a donde necesites para que puedas explorar sin preocupaciones y descubrir nuevos lugares.",
            },
            {
                icon: <FaBeer />,
                title: "Cerveza fuerte",
                info: "¡Descubre nuestra selección de cervezas artesanales premium!",
            },
        ]
    };

    render() {
        return (
            <section className="services">
                <Title title="Servicios"/>
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}

export default  Services;

