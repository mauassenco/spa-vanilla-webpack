import views from '../views/posts.html';

const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
}

export default async () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = views;

    const postsElement = divElement.querySelector('#posts');
    const totalPosts = divElement.querySelector('#total-posts');

    const posts = await getPosts();
    totalPosts.innerHTML = posts.length;
    
    posts.forEach(post => {
        postsElement.innerHTML += /*HTML*/ `
            <li class="list-group-item border-primary bg-dark text-white shadow" style="padding: 7.5px 15px; margin: 7.5px 15px; border-radius: 5px">
                <h5>${post.title}</h5>
                <p>${post.body}</p>
            </li>
        `
    })
    
    return  divElement;
};