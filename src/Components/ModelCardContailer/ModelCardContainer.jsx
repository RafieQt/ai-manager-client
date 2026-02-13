import React, { use } from 'react';
import ModelCard from '../ModelCard/ModelCard';

const ModelCardContainer = ({latestModelsPromise}) => {
    const models = use(latestModelsPromise);
    return (
        <div className='grid grid-cols-3 w-7xl mx-auto mt-10 gap-4 pb-10'>
            {
                models.map(model=> <ModelCard key={model._id} model={model}></ModelCard>)
            }
        </div>
    );
};

export default ModelCardContainer;