import faker from 'faker';

import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <App />
);

// let products = '';

// for (let i = 0; i < 5; i++) {
//     const name = faker.commerce.productName();
//     products += `<div>${name}</div>`;
// }

// document.querySelector('.dev-landing').innerHTML = products;
