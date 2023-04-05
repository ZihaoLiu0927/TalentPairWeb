import React from 'react';
import App from './App';
import ReactDOM from "react-dom/client";
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (element, { onNavigate, defaultHistory, initialPath }) => {

    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    if (onNavigate) {
        history.listen(onNavigate);
    }

    const root = ReactDOM.createRoot(element);

    root.render(
        <App history={history}/>
    );

    return {
        onParentNavigate({ pathname: nextPathName }) {
            const { pathname } = history.location;

            if (nextPathName !==  pathname) {
                console.log("children tell container to change:", nextPathName);
                history.push(nextPathName);
            }
        }
    };
};

if (process.env.NODE_ENV === 'development') {
    const element = document.querySelector('.dev-login');

    if (element) {
        mount(element, { defaultHistory: createBrowserHistory() });
    };
}

export { mount };

