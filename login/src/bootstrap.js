import faker from 'faker';


const mount = (element) => {
    let logins = '';

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        logins += `<div>log: ${name}</div>`;
    }

    element.innerHTML = logins;
};

if (process.env.NODE_ENV === 'development') {
    const element = document.querySelector('.dev-login');
    if (element) {
        mount(element);
    }
}

export { mount };

