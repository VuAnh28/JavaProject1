import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection/HeroSection';
import AboutSection from '../components/home/AboutSection/AboutSection';
import FeaturedProjects from '../components/home/FeaturedProjects/FeaturedProjects';

const Home: React.FC = () => {
    return (
        <Layout>
            <HeroSection />
            <AboutSection />
            <FeaturedProjects />
        </Layout>
    );
};

export default Home;