import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';


const Home = () => {
    return (
        <>
        <Hero>
        <Banner title="WintukWatutu" subtitle="Habitaciones de lujo desde $299">
            <Link to="/rooms" className="btn-primary">Nuestras habitaciones</Link>
        </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
        </>
    )
}

export default Home;
