import Login from '../components/Login';
import ArticlesContainer from '../components/ArticlesContainer';
import { ArticleMini } from "../components/ArticleMini";
const exact = 'exact';

export default [
    {
        exact,
        path: '/',
        component: Login
    },
    {
        path: '/articles-container',
        component: ArticlesContainer
    },
    {
        path: '/article-mini',
        component: ArticleMini
    },
    {
        path: '/login',
        component: Login
    }
]