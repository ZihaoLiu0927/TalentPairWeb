import faker from 'faker';

let logins = '';

for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    logins += `<div>log: ${name}</div>`;
}

document.querySelector('.dev-login').innerHTML = logins;