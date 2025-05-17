import SignInPage from "@/pages/Auth/SignIn";
import { SignUpPage } from "@/pages/Auth/signUp";
import { createBrowserRouter, Navigate } from "react-router-dom";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Navigate to='/signin' replace={true}/>
    },
    {
        path:'/signup',
        element:<SignUpPage/>
    },
    {
        path:'/signin',
        element:<SignInPage/>
    }
])

export default router