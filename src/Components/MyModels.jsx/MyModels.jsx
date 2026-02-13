import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import ModelCard from '../ModelCard/ModelCard';

const MyModels = () => {
    const {user} = use(AuthContext);
    const [models, setModels] = useState([]);
    useEffect(()=>{
        if(user?.email){
            fetch(`https://ai-manager-server-dun.vercel.app/models?email=${user.email}`)
            .then(res=> res.json())
            .then(data=>{
                console.log("TYPE:", typeof data);
                console.log("IS ARRAY:", Array.isArray(data));
                console.log("DATA:", data);
                setModels(data);    
            })
        }
    },[user])

    return (
        <div>
            <h1 className='text-3xl text-center pt-3 font-extrabold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400 pb-3'>My models</h1>
            <div className='grid grid-cols-3 w-7xl mx-auto pt-4 '>
                {
                    models.map(model=> <ModelCard key={model._id} model={model}></ModelCard>)
                }
            </div>
        </div>
    );
};

export default MyModels;