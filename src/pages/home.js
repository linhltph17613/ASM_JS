import Banner from "../components/banner";
import BlogList from "../components/BlogList";
import Footer from "../components/footer";
import Header from "../components/header";
import New1 from "../components/new1";
const HomePage = {
    render() {
        return /*html*/ `
         ${Header.render()}
        ${Banner.render()}
        ${New1.render()}
        ${ProductList.render()}
        ${BlogList.render()}
        ${Footer.render()}
        `;
    },
};
export default HomePage;