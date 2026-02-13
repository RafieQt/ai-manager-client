import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const ModelDetails = () => {
    const modelData = useLoaderData();
    const {user} = use(AuthContext);
    return (
        <div>
            
        </div>
    );
};

export default ModelDetails;