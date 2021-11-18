import views from '../views/notFound.html';

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = views;

    return  divElement;
};