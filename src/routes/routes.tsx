import { useRoutes } from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/Signup/Signup";
import AdPage from '../pages/AdPage/AdPage'

const MainRoutes = () => {
    return useRoutes([
        {path: '/', element: <Home/>},
        {path: '*', element: <NotFound/>},
        {path: '/signin', element: <SignIn/>},
        {path: '/signup', element: <SignUp/>},
        {path: '/ad/:id', element: <AdPage/>}
    ])
}

export default MainRoutes