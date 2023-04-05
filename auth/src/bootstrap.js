import React from 'react';
import App from './App';
import ReactDOM from "react-dom/client";
import { createMemoryHistory, createBrowserHistory } from 'history';

let root = null;

const mount = (element, { onNavigate, location }) => {
    if (!element.firstChild) {
        root = ReactDOM.createRoot(element);
    }
    
    const history = location ? createMemoryHistory({
        initialEntries: [location.pathname] 
    }) : createBrowserHistory();

    if (onNavigate) {
        history.listen(onNavigate);
    }

    root =  root ? root : ReactDOM.createRoot(element);

    root.render(
        <App location = {location} history={history}/>
    );
};

if (process.env.NODE_ENV === 'development') {
    const element = document.querySelector('.dev-login');

    if (element) {
        mount(element, {});
    };
}

export { mount };

