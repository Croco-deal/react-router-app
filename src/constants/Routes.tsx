// Local
import Swagger from "../components/swagger/Swagger";
import Login from "../components/login/Login";
import Home from "../components/home/Home";
import Download from "../components/download/Download";
import Token from "../components/token/Token";

export const ROUTES = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/swagger",
        component: Swagger
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
