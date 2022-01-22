import Navigo from "navigo";
import AboutPage from "./pages/about";
import BlogPage from "./pages/blogs";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import ShopPage from "./pages/products";

const router = new Navigo("/", {linksSelector : "a"});
const print = (content) => {
    document.querySelector("#app").innerHTML = content.render(); 
};


router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/shop": () => print(ShopPage),
    "/blog": () => print(BlogPage),
    "/contact": () => print(ContactPage),

});
router.resolve();