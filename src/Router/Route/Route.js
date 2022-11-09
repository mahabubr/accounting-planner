import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import HomeLayout from "../../Pages/Components/Home/HomeLayout/HomeLayout";
import Login from "../../Pages/Components/Login/Login/Login";
import SignUp from "../../Pages/Components/Login/SingUp/SignUp";
import MyReviewUpdate from "../../Pages/Components/MyReviews/MyReviewList/MyReviewUpdate/MyReviewUpdate";
import MyReviews from "../../Pages/Components/MyReviews/MyReviews";
import Profile from "../../Pages/Components/Profile/Profile";
import Services from "../../Pages/Components/Services/Services";
import Service from "../../Pages/Components/Services/ServicesCard/Service/Service";
import NotFound from "../../Pages/Others/NotFound/NotFound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <HomeLayout />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/services/:id',
                element: <Service />,
                loader: async ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <SignUp />
            },
            {
                path: '/profile',
                element:
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
            },
            {
                path: '/my-review',
                element:
                    <PrivateRoute>
                        <MyReviews />
                    </PrivateRoute>
            },
            {
                path: '/my-review/:id',
                element: < MyReviewUpdate />,
                loader: async ({ params }) => fetch(`http://localhost:5000/reviewService/update/${params.id}`)
            }
        ]
    }
])

export default router