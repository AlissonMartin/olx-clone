import { useRoutes } from "react-router-dom";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import HomeContainer from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/Signup/Signup";

const MainRoutes = () => {
    return useRoutes([
        {path: '/', element: <Home/>},
        {path: '*', element: <NotFound/>},
        {path: '/signin', element: <SignIn/>},
        {path: '/signup', element: <SignUp/>}
    ])
}

export default MainRoutes