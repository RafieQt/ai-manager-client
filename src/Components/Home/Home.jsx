import React from 'react';
import Banner from '../Banner/Banner';
import ModelCard from '../ModelCard/ModelCard';
import ModelCardContainer from '../ModelCardContailer/ModelCardContainer';

const latestModelsPromise = fetch('http://localhost:5000/latest-models')
    .then(res => res.json())

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ModelCardContainer latestModelsPromise={latestModelsPromise}></ModelCardContainer>
        </div>
    );
};

export default Home;