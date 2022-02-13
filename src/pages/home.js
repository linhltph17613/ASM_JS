import Banner from "../components/banner";
import Blog from "../components/blogList";
import Footer from "../components/footer";
import Header from "../components/header";
import New1 from "../components/new1";
import ProductList from "../components/productList";
import VideoTea from "../components/video_tea";

const HomePage = {
    render() {
        return /*html*/ `
         ${Header.render()}
        ${Banner.render()}
        ${New1.render()}
        ${ProductList.render()}
        ${Blog.render()}
        ${VideoTea.render()}
        ${Footer.render()}
        `;
    },
};
export default HomePage;