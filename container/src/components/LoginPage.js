import { mount } from 'login/LoginIndex';
import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default () => {
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
            }
        });

    }, [location, navigate]);
    
    return <div ref={onRefChange} />;
};