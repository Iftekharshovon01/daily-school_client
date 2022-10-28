import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Category from '../../Pages/Category/Category/Category'
import Courses from "../../Pages/Courses/Courses";
import Course from "../../Pages/Course/Course";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import GetPremium from "../../Pages/GetPremium/GetPremium";
import PrivateRoute from "./PrivateRoute";



 export const router = createBrowserRouter([
    
    {   path:'/',
        element:<Main></Main>,
        children:
        [
            {
                path:'/',
                element: <Home></Home>,
                
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader: ()=> fetch('https://course-server-iftekharshovon01.vercel.app/course')
            },
      
            {
                path:'/courses/:id',
                element:<Category></Category>,
                loader:({params}) => fetch(`https://course-server-iftekharshovon01.vercel.app/course/${params.id}`)
            },
            {
                path:'/course/:id',
                element: <Course></Course>,
                loader: ({params})=> fetch(`https://course-server-iftekharshovon01.vercel.app/course/${params.id}`)
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/premium',
                element: <PrivateRoute><GetPremium></GetPremium></PrivateRoute>
            }

        ]
    }
]);