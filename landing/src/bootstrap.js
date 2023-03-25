import React, { StrictMode } from 'react';
import App from './App';
import ReactDOM from "react-dom/client";

const mount = (element) => {
    const root = ReactDOM.createRoot(element);
    root.render(
        <StrictMode>
            <App />
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