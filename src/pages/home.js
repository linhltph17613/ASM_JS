import Banner from "../components/banner";
import Blog from "../components/blogList";
import Footer from "../components/footer";
import Header from "../components/header";
import New1 from "../components/new1";
import ProductList from "../components/productList";
import VideoTea from "../components/video_tea";

const HomePage = {
    async render() {
        return /*html*/ `
         ${Header.render()}
        ${Banner.render()}
        ${New1.render()}
        <div class=" text text-center max-w-5xl mx-auto  my-[80px]">
    <p class="font-medium text-[#88B44E] pb-[20px]"> Online store</p>
    <h1 class="font-medium text-4xl">POPULAR PRODUCTS</h1>
    <p class="pt-[20px]"> Integer quis tempor orci. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum
      primis in faucibus.</p>
  </div>
        <div class="grid grid-cols-3 gap-5 max-w-6xl mx-auto">
         ${await ProductList.render()}
        </div>
        ${Blog.render()}
        ${VideoTea.render()}
        ${Footer.render()}
        `;
    },
};
export default HomePage;