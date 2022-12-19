import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "../helpers/RouterHandler";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/Signup/Signup";
import AdPage from '../pages/AdPage/AdPage'
import NewAd from "../pages/NewAd/NewAd";
import Ads from "../pages/Ads/Ads";
import MyAds from "../pages/MyAds/MyAds";
import MyAccount from "../pages/MyAccount/MyAccount";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
            <Route path="/signin" element={<SignIn/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/ad/:id" element={<AdPage/>}></Route>
            <Route element={<PrivateRoutes/>}>
                <Route path="/newad" element={<NewAd/>}/>
                <Route path="/myads" element={<MyAds/>}/>
                <Route path="/myaccount" element={<MyAccount/>}/>
            </Route>
            <Route path="/ads" element={<Ads/>}/>
        </Routes>
    )





    // return useRoutes([
    //     {path: '/', element: <Home/>},
    //     {path: '*', element: <NotFound/>},
    //     {path: '/signin', element: <SignIn/>},
    //     {path: '/signup', element: <SignUp/>},
    //     {path: '/ad/:id', element: <AdPage/>}
    // ])
}

export default MainRoutes