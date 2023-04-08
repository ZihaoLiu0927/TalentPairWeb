import { mount } from 'login/LoginIndex';
import React, { useEffect, useRef, useCallback } from 'react';
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
                navigate(nextPathName);
            },

            onSignIn: () => {
                onSignIn();
            }
        });

    }, [location, navigate]);
    
    return <div ref={onRefChange} />;
};