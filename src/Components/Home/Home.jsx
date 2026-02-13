import React, { use } from 'react';
import Banner from '../Banner/Banner';
import ModelCard from '../ModelCard/ModelCard';
import ModelCardContainer from '../ModelCardContailer/ModelCardContainer';
import AboutAIModels from '../AboutModels/AboutAIModels';
import GetStartedSection from '../GetStartedSection/GetStartedSection';
import { AuthContext } from '../../context/AuthContext';

const latestModelsPromise = fetch('https://ai-manager-server-dun.vercel.app/latest-models')
    .then(res => res.json())

const Home = () => {

    const {user} = use(AuthContext);

    return (
        <div>
            <Banner></Banner>
            <ModelCardContainer latestModelsPromise={latestModelsPromise}></ModelCardContainer>
            <AboutAIModels></AboutAIModels>
            {
                user? "" : <GetStartedSection></GetStartedSection>
            }
        </div>
    );
};

export default Home;