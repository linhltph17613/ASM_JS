import Header from "../components/header";
import { get } from "../api/products";
import "toastr/build/toastr.min.css";
import toastr from "toastr";
import { addToCart } from "../utils/cart";
import { reRender } from "../utils/rerender";

const DetailProduct = {
  async render(id) {
    const { data } = await get(id);
    return /*html*/ `
      ${Header.render()}
      <div class="">
          <img class="w-full" src="https://i.imgur.com/06kGrh2.jpg" alt=""
            srcset="">
        </div>
        <div class="bg-lime-50 py-4">
          <div class=" flex justify-between items-center max-w-5xl mx-auto">
            <div class="">
              <a class="font-medium hover:text-[#88B44E] " href="/">Home</a> > <a class="font-medium text-[#88B44E]" href="/">Detail Product</a>
            </div>
        
          </div>
        </div>
        
        <div class="mt-10">
      <div class="grid grid-cols-2 max-w-5xl mx-auto">
        <div class="">
          <img src="https://i.imgur.com/BPHZXpF.jpg" alt="">
        </div>
        <div class="">
          <h1 class="font-medium text-4xl py-5">${data.title}</h1>
          <span class="text-amber-500">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill "></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </span> <br>
          <p class="font-medium text-[#88B44E] text-xl font-bold py-5">${data.price} $</p>
          <p class="truncate  w-[510px] py-5">${data.desc}</p>
          <input type="number"  id="inputValue" value="1" class="border pl-2 outline-0 w-16 p-2">
          <button id="btnAddToCart" class="buttun px-10 py-3 rounded-full bg-[#88B44E] hover:text-white m-5" type="submit">Add to
            cart</button>
        </div>
      </div>
      <hr class="my-[50px]">
      <div class="grid grid-cols-2 max-w-5xl mx-auto ">

        <div class="">
          <h1 class="font-medium text-2xl text-[#88B44E] py-3">Bình luận sản phẩm</h1>
          <form action="">
            <input type="text" class="border px-2 py-2 w-[350px] outline-0" placeholder="Write comment..">
            <button type="submit" class="buttun px-5 py-2 rounded-lg bg-[#88B44E] hover:text-white mt-5">Send</button>
          </form>
          <div class="my-5 flex">
            <img class="w-[70px] mr-3" src="https://i.imgur.com/BPHZXpF.jpg">
            <div class="">
              <span><b>linh</b></span> &nbsp;
              <span class="text-amber-500 text-sm">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill "></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </span>&nbsp;
              <span class="text-gray-500 text-sm">
                12/02/2022
              </span><br>
              <p class="w-[400px] py-2">Sản phẩm chất lượng tốt qué </p>

            </div>
          </div>
          <div class="my-5 flex">
            <img class="w-[70px] mr-3" src="https://i.imgur.com/BPHZXpF.jpg">
            <div class="">
              <span><b>Trang</b></span> &nbsp;
              <span class="text-amber-500 text-sm">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill "></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </span>&nbsp;
              <span class="text-gray-500 text-sm">
                12/02/2022
              </span><br>
              <p class="w-[400px] py-2">Sản phẩm chất lượng tốt qué </p>

            </div>
          </div>
        </div>
        <div class="">
          <h1 class="font-medium text-2xl text-[#88B44E]  py-3">Mô tả sản phẩm</h1>
          <p class="py-5">Duis et aliquam orci. Vivamus augue quam, sollicitudin quis bibendum quis,
            eleifend vitaevelit.y</p>
          <img src="https://i.imgur.com/BPHZXpF.jpg" alt="">
          <p class="py-5">Duis et aliquam orci. Vivamus augue quam, sollicitudin quis bibendum quis,
            eleifend vitaevelit.y</p>
        </div>
      </div>
    </div>
        `;
  }, afterRender(id) {
    Header.afterRender();
    const btnAddToCart = document.querySelector("#btnAddToCart");
    const inputValue = document.querySelector("#inputValue");

    btnAddToCart.addEventListener("click", async () => {
      const { data } = await get(id);
      addToCart({ ...data, quantity: inputValue.value ? +inputValue.value : 1 }, function () {
        toastr.success("Thêm vào giỏ hàng thành công!");
        reRender(Header, "#header");
      });

    });
  }
};
export default DetailProduct;