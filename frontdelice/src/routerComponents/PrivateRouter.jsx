
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


function PrivateRouter({component: Component, roles, ...rest}) {
    
    const {isAuth, user} = useContext(AuthContext)
    console.log("...private route..")

    return (

        <Route 
            {...rest}
            render = {routeProps => {
                if(isAuth) {
                    if(!roles ?. includes(user.role)) 
                        return <Component {...routeProps} />
                    else
                        return <Redirect to="/connexion" />
                }
                else
                    return <Redirect to={{ pathname: "/connexion", state: {from: routeProps.location} }} />
            }}
        />
    )

}

export default PrivateRouter
