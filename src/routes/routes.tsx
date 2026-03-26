import { createBrowserRouter } from "react-router";
import App from "../App";
import inicio from "../pages/inicio";
import Productos from "../pages/productos";
import Detalle_product from "../pages/detalle_product";
import Login from "../pages/login";
import Error404 from "../pages/Error404";
import Register from "../pages/register";
import Nosotros from "../pages/nosotros";

export const routes=createBrowserRouter([
    {path:'',Component:App,children:[
        {path:'',Component:inicio},
        {path:'Productos',Component:Productos},
        {path:'Nosotros/detalle_product',Component:Detalle_product},
        {path:'Nosotros',Component:Nosotros},
        {path:'login',Component:Login},
        {path:'register',Component:Register},
        {path:'*',Component:Error404}
    ]}
])