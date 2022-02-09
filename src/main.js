import Navigo from "navigo";
import AboutPage from "./pages/about";
import BlogsPage from "./pages/admin/blogsAdmin";

import DashboardPage from "./pages/admin/dashboard";
import BlogPage from "./pages/blogs";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import ShopPage from "./pages/products";
import BlogsAddPage from "./pages/admin/blogsAdmin/add";
import Signin from "./pages/signin";
import SignUp from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a" });
const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};


router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/shop": () => print(ShopPage),
    "/blog": () => print(BlogPage),
    "/contact": () => print(ContactPage),
    "/admin/dashboard": () => print(DashboardPage),
    "/admin/blogs": () => print(BlogsPage),
    "/admin/blogs/add": () => print(BlogsAddPage),


    // "admin/blogs/:id/edit": => print();
    "/signin": () => print(Signin),
    "/signup": () => print(SignUp),


});
router.resolve();