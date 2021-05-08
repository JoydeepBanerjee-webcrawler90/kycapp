import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect } from "react-router-dom";

function ProtectedRoute({authState:authState, component:Component, ...rest}) {
    return  <Route {...rest} render={(props) => {
            
            if(authState) {
                return <Component/>
            } else {
                return <Redirect to={{ pathname:"/", state: {from: props.location} }}/>
            }
        }}/>
    
}

export default ProtectedRoute;