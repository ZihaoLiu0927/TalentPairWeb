import {mount as landingMount} from 'landing/LandingIndex';
import React, {useRef, useEffect} from 'react';

export default () => {
    const ref = useRef(null);
    
    useEffect(() => {
        landingMount(ref.current);
    }, []);
    
    return <div ref={ref} />;
};