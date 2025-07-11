import {SignInPage} from "@/pages/Auth/SignIn";
import { SignUpPage } from "@/pages/Auth/signUp";
import ProfilePage from "@/pages/user/profile";
import PrivateRoute from "@/service/protucetdRoutes/privateRoute";
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
    },
    {
        path:'/profile',
        element:<PrivateRoute element={<ProfilePage/>} />
    }
])

export default router