import React, { use } from 'react';

import { Navigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({children}) => {
    const {user} = use(AuthContext);

    if(user && user?.email){
        return children;

    }
    else{
        return <Navigate to='/signin'></Navigate>
    }

};

export default PrivateRoute;