import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import HomeLayout from "../../Pages/Components/Home/HomeLayout/HomeLayout";
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
            }
        ]
    }
])

export default router