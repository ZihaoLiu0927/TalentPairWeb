import React, { StrictMode } from 'react';
import App from './App';
import ReactDOM from "react-dom/client";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const mount = (element) => {
    const root = ReactDOM.createRoot(element);
    root.render(
        <StrictMode>
            <HelmetProvider>
                <Helmet>
                    <title>TalentPair | a platform ...</title>
                </Helmet>
                <App />
            </HelmetProvider>
        </StrictMode>
    );
};

if (process.env.NODE_ENV === 'development') {
    const element = document.querySelector('.root');
    if (element) {
        mount(element)
    };
}

export { mount };