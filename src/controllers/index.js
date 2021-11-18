import Home from './home.controller';
import Products from './products.controller';
import Posts from './posts.controller';
import notFound from './notFound.controller';

const pages = {
    home: Home,
    products: Products,
    posts: Posts,
    notFound: notFound
}

export { pages };