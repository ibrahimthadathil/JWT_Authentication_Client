import { SignUpPage } from "@/pages/Auth/signUp";
import { createBrowserRouter, Navigate } from "react-router-dom";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Navigate to='/signup' replace={true}/>
    },
    {
        path:'/signup',
        element:<SignUpPage/>
    }
])

export default router