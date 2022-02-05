import Footer from "../components/footer";
import Header from "../components/header";
const ShopPage = {
    render() {
        return /*html*/ `
        ${Header.render()}
        <div class="">
        <img class="w-full" src="https://i.imgur.com/06kGrh2.jpg" alt=""
          srcset="">
      </div>
      <div class="bg-lime-50 py-4">
    <div class=" flex justify-between items-center max-w-5xl mx-auto">
      <div class="">
        <a class="font-medium hover:text-[#88B44E] " href="/">Home</a> > <a class="font-medium text-[#88B44E] hover:text-[#88B44E]"
          href="/shop">Shop</a>
      </div>
      <div class="flex items-center">
        <div class="">
          <p>Showing a single result</p>
        </div>
        <div class="mx-5">
          <select class="shadow-md px-3 py-2">
            <option value="Thứ tự mặc định">Default order</option>
            <option value="Thứ tự mặc định">Order by popularity</option>
            <option value="Thứ tự mặc định">Order by rating score</option>
            <option value="Thứ tự mặc định">Latest</option>
            <option value="Thứ tự mặc định">Order by price: low to high</option>
            <option value="Thứ tự mặc định">Order by price: high to low</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  ${Footer.render()}
        `;
    },
};
export default ShopPage;