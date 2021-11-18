import views from '../views/products.html';

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = views;

    return  divElement;
};