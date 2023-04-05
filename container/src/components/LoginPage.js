import { mount as authMount} from 'login/LoginIndex';
import React, {useRef, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory();
    
    useEffect(() => {

        const { onParentNavigate } = authMount(ref.current, {
            initialPath: history.location.pathname,

            onNavigate: ({ pathname: nextPathName }) => {
                const { pathname } = history.location;
                if (pathname !== nextPathName) {
                    console.log("container tell children: ", nextPathName);
                    history.push(nextPathName);
                };
            }
        });
        
        history.listen(onParentNavigate);

    }, []);
    
    return <div ref={ref} />;
};