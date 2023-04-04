import {mount as landingMount} from 'landing/LandingIndex';
import React, {useRef, useEffect, useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const navigate = useNavigate()
    const location = useLocation();
    const [func, setFunc] = useState(() => () => 1);
    
    useEffect(() => {

        console.log("mounting landing");

        const { onParentNavigate } = landingMount(ref.current, {
            onNavigate: ({ pathname: nextPathName }) => {
                const { pathname } = window.location;
                if (pathname !== nextPathName) {
                    navigate(nextPathName);
                };
            }
        });
        
        setFunc(() => (x) => onParentNavigate(x));

    }, []);

    useEffect(() => {
        func(location);
    }, [location]);
    
    return <div ref={ref} />;
};