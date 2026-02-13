import React from 'react';
import { useLoaderData } from 'react-router';
import ModelCard from '../ModelCard/ModelCard';

const AllModels = () => {
    const models = useLoaderData();
    return (
        <div className='pb-10'>
            <h1 className="text-4xl pt-4 text-center font-extrabold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400 pb-4">
                All models
            </h1>
            <div className='grid md:grid-cols-1 lg:grid-cols-3 lg:w-7xl mx-auto gap-4'>
                {
                    models.map(model => <ModelCard key={model._id} model={model}></ModelCard>)
                }
            </div>
        </div>
    );
};

export default AllModels;