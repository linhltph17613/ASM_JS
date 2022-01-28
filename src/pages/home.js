import Banner from "../components/banner";
import Blog from "../components/blog";
import BlogList from "../components/blog";
import Footer from "../components/footer";
import Header from "../components/header";
import New1 from "../components/new1";
import ProductList from "../components/productList";

const HomePage = {
    render() {
        return /*html*/ `
         ${Header.render()}
        ${Banner.render()}
        ${New1.render()}
        ${ProductList.render()}
        ${Blog.render()}
        ${Footer.render()}
        `;
    },
};
export default HomePage;