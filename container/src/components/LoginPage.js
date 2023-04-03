import { mount as loginMount } from 'login/LoginIndex';
import React, { useRef, useEffect } from 'react';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        loginMount(ref.current);
    }, []);

    return <div ref={ref} />;
};