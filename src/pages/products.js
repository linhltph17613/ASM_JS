import Footer from "../components/footer";
import Header from "../components/header";
import ProductList from "../components/productList";
const ShopPage = {
  async render() {
    return /*html*/ `
      ${Header.render()}
        <div class="">
      <img class="w-full" src="https://i.imgur.com/06kGrh2.jpg" alt="" srcset="">
    </div>
    <div class="bg-lime-50 py-4">
      <div class=" flex justify-between items-center max-w-5xl mx-auto">
        <div class="">
          <a class="font-medium hover:text-[#88B44E] " href="/">Home</a> > <a
            class="font-medium text-[#88B44E] hover:text-[#88B44E]" href="/shop">Shop</a>
        </div>
        <div class="flex items-center">
          <div class="">
            <p>Showing a single result</p>
          </div>
          <div class="mx-5">
            <select class="shadow-md px-3 py-2">
              <option value="Thứ tự mặc định">Default order</option>
              <option value="Thứ tự mặc định">Black Tea</option>
              <option value="Thứ tự mặc định">Green Tea</option>
              <option value="Thứ tự mặc định">Organic Tea</option>
              <option value="Thứ tự mặc định">Order by price: low to high</option>
              <option value="Thứ tự mặc định">Order by price: high to low</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="flex gap-5 max-w-6xl mx-auto mb-9">
      <div class="bg-gray-100 px-[50px] py-9 w-1/3">
        <div class="py-3">
          <div class="flex py-5">
            <div class="mt-4 mr-2">
              <img src="https://i.imgur.com/nC7J0xR.png" alt="">

            </div>
            <h3 class="font-medium text-3xl hover:text-[#88B44E]">Search</h3>
          </div>
          <form action="">
            <input class="border rounded-full w-[250px] px-2 py-2" type="text" placeholder="Search.."> <i
              class="bi bi-search-heart"></i>
          </form>
        </div>
        <div class="flex mt-[50px] py-5">
          <div class="mt-4 mr-2">
            <img src="https://i.imgur.com/nC7J0xR.png" alt="">

          </div>
          <h3 class="font-medium text-3xl hover:text-[#88B44E]">Categories</h3>
        </div>
        <div class="">
          <nav>
            <ul class="list-disc pl-5">
              <li class=" hover:text-[#88B44E]"><a href="">Black Tea</a></li>
              <li class="hover:text-[#88B44E]"><a href="">Green Tea</a></li>
              <li class="hover:text-[#88B44E]"><a href="">Organic Tea</a></li>
              <li class="hover:text-[#88B44E]"><a href="">Uncategorized</a></li>
            </ul>
          </nav>
        </div>
        <div class="flex mt-[50px] py-5">
          <div class="mt-4 mr-2">
            <img src="https://i.imgur.com/nC7J0xR.png" alt="">

          </div>
          <h3 class="font-medium text-3xl hover:text-[#88B44E]">Categories</h3>
        </div>
        <div class="">
          <input type="range" class="w-[250px] bg-[#88B44E] mb-4" name="" value="">
          <h3 class="font-medium text-center">Price: $1-$4</h3>
          <button
            class="buttun ml-[80px] mt-5 text-white font-medium px-9 py-2 rounded-full bg-[#88B44E]">Filter</button>
        </div>
        <div class="flex  mt-[50px] py-5">
          <div class="mt-4 mr-2">
            <img src="https://i.imgur.com/nC7J0xR.png" alt="">

          </div>
          <h3 class="font-medium text-3xl hover:text-[#88B44E]">Product tags</h3>
        </div>
        <div class="py-5">
          <span class="text-[#88B44E]">#</span>black &ensp;<span class="text-[#88B44E]">#</span>green
          &ensp;<span class="text-[#88B44E]">#</span>organic
          &ensp;<span class="text-[#88B44E]">#</span>tea
        </div>
      </div>
      <div class="w-3/4 grid grid-cols-2 mt-10 gap-[30px]">

        ${await ProductList.render()}

      </div>
  </div>
      ${Footer.render()}
        `;
  },
};
export default ShopPage;