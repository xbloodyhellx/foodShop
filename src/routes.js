import Home from "./page/Home/Home"
import Menu from "./page/Menu/Menu"
import Card from "./page/Card/Card"
import AboutUs from "./page/AboutUs/AboutUs"
import ContactUs from "./page/ContactUs/ContactUs"
import Blog from "./page/Blog/Blog"
let Routes = [
    {path:'/',element:<Home/>},
    {path:'/menu',element:<Menu/>},
    {path:'/shopping-cart',element:<Card/>},
    {path:'/about-us',element:<AboutUs/>},
    {path:'/contact-us',element:<ContactUs/>},
    {path:'/blog',element:<Blog/>},
]
export default Routes