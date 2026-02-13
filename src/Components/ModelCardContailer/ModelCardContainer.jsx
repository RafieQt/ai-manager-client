import React, { use } from 'react';
import ModelCard from '../ModelCard/ModelCard';

const ModelCardContainer = ({latestModelsPromise}) => {
    const models = use(latestModelsPromise);
    return (
        <div>
            <h1 className='text-3xl text-center pt-3 font-extrabold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400 pb-3'>Featured AI models</h1>
            <div className='grid grid-cols-3 w-7xl mx-auto mt-10 gap-4 pb-10'>
            {
                models.map(model=> <ModelCard key={model._id} model={model}></ModelCard>)
            }
        </div>
        </div>
    );
};

export default ModelCardContainer;