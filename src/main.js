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
// import { doc } from "prettier";
import ProductPage from "./pages/admin/product";
import ProductAddPage from "./pages/admin/product/add";
import DetailProduct from "./pages/detailProduct";
import cartPage from "./pages/cart";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};


router.on("/admin/*", () => { }, {
    //Phương thức before được gọi trước khi render nội dung ra trình duyệt
    before: (done) => {
        if (localStorage.getItem("user")) {
            //lấy id trong localStronge
            const userId = JSON.parse(localStorage.getItem("user")).id;
            //nếu userdid == 1 thì render
            if (userId === 10) {
                done();
            } else {
                // ngc lại nếu kp admin -> trang chủ
                document.location.href = "/";
            }
        } else {
            document.location.href = "/";
        }
    }
});

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/shop": () => print(ShopPage),
    "/blogs": () => print(BlogPage),
    "/contact": () => print(ContactPage),
    "/admin/dashboard": () => print(DashboardPage),
    "/admin/blogs": () => print(BlogsPage),
    "/admin/blogs/add": () => print(BlogsAddPage),
    "/admin/products": () => print(ProductPage),
    "/products/:id": (value) => print(DetailProduct, value.data.id),
    "/admin/products/add": () => print(ProductAddPage),
    "/cart": () => print(cartPage),

    // "admin/blogs/:id/edit": => print();
    "/signin": () => print(Signin),
    "/signup": () => print(SignUp),


});
router.resolve();