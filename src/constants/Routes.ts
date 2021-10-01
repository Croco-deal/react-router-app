// Local
import Home from "../components/home/Home";
import Download from "../components/download/Download";
import Token from "../components/token/Token";
import SwaggerContainer from "../containers/SwaggerContainer";
import Login from "../components/login/Login";

export const ROUTES = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/swagger",
        component: SwaggerContainer
    },
    {
        path: "/token",
        component: Token
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/download",
        component: Download
    }
];
