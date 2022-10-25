import { useRoutes } from "react-router-dom";
import About from "../pages/About.tsx/About";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";

const MainRoutes = () => {
    return useRoutes([
        {path: '/', element: <Home/>},
        {path: '/', element: <About/>},
        {path: '*', element: <NotFound/>},
    ])
}

export default MainRoutes