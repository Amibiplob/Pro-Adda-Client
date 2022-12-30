import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(AuthContext)
if(user){
    return children
}
if(loader){
    return (
      <div className='flex items-center justify-center my-32'>
        <hr className="h-40 w-40 border-4 border-x-cyan-600 divider animate-spin text-cyan-600"></hr>
      </div>
    );
}
return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;