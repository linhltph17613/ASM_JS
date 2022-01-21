import Navigo from "navigo";
import AboutPage from "./pages/about";
import BlogPage from "./pages/blogs";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import ProductPage from "./pages/products";

const router = new Navigo("/", {linksSelector : "a"});
const print = (content) => {
    document.querySelector("#app").innerHTML = content.render(); 
};


router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/products": () => print(ProductPage),
    "/blog": () => print(BlogPage),
    "/contact": () => print(ContactPage),

});
router.resolve();