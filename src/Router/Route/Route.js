import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import HomeLayout from "../../Pages/Components/Home/HomeLayout/HomeLayout";
import Services from "../../Pages/Components/Services/Services";
import Service from "../../Pages/Components/Services/ServicesCard/Service/Service";
import NotFound from "../../Pages/Others/NotFound/NotFound";

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
            }
        ]
    }
])

export default router