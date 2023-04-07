import { mount } from 'landing/LandingIndex';
import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default ( { onSignIn } ) => {
    const ref = useRef(null);
    const onRefChange = useCallback((node) => {
      ref.current = node;
    }, []);

    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
        mount(ref.current, {
            location: location,

            onNavigate: ({ location: nextPathName }) => {
                console.log("children want to go:", nextPathName);
                navigate(nextPathName);
            },

            onSignIn: () => {
                onSignIn();
            }
        });

    }, [location, navigate]);
    
    return <div ref={onRefChange} />;
};