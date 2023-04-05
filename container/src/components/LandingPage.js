import { mount as landingMount} from 'landing/LandingIndex';
import React, {useRef, useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory();
    
    useEffect(() => {

        const { onParentNavigate } = landingMount(ref.current, {
            initialPath: history.location.pathname,

            onNavigate: ({ pathname: nextPathName }) => {
                const { pathname } = history.location;
                if (pathname !== nextPathName) {
                    history.push(nextPathName);
                };
            }
        });
        
        history.listen(onParentNavigate);

    }, []);
    
    return <div ref={ref} />;
};