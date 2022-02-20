import Header from "../components/header";
import toastr from "toastr";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";
import "toastr/build/toastr.min.css";
import { reRender } from "../utils/rerender";
const cartPage = {
  render() {
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    return /*html*/ `
      ${Header.render()}
      <div class="">
          <img class="w-full" src="https://i.imgur.com/06kGrh2.jpg" alt=""
            srcset="">
        </div>
        <div class="bg-lime-50 py-4">
          <div class=" flex justify-between items-center max-w-5xl mx-auto">
            <div class="">
              <a class="font-medium hover:text-[#88B44E] " href="/">Home</a> > <a class="font-medium text-[#88B44E]" href="/">Blog</a>
            </div>
        
          </div>
        </div>  


        <table class="min-w-full divide-y divide-gray-200 mb-20">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-10 text-left text-base font-medium text-gray-500 uppercase tracking-wider"></th>
          <th class="px-6 py-10 text-left text-base font-medium text-gray-500 uppercase tracking-wider">Tên sản phẩm</th>
          <th class="px-6 py-10 text-left text-base font-medium text-gray-500 uppercase tracking-wider">Hình ảnh</th>
          <th class="px-6 py-10 text-left text-base font-medium text-gray-500 uppercase tracking-wider">Giá</th>
          <th class="px-6 py-10 text-left text-base font-medium text-gray-500 uppercase tracking-wider">Số lượng</th>
          <th class="px-6 py-10 text-left text-base font-medium text-gray-500 uppercase tracking-wider">Thành tiền</th>
          <th class="px-6 py-10 text-left text-base font-medium text-gray-500 uppercase tracking-wider">Xóa</th>

        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200 ">
      ${cart.map(item => `
      <tr>
          <td class="px-6 py-4 whitespace-nowrap">${item.id}</td>
          <td class="px-6 py-4 whitespace-nowrap">${item.title}</td>
          <td class="px-6 py-4 whitespace-nowrap"><img width="80" src="${item.img}"></td>
          <td class="px-6 py-4 whitespace-nowrap">${item.price}</td>
          <td class="px-6 py-4 whitespace-nowrap">
            <button data-id="${item.id}" class="bg-orange-500 text-white btn btn-decrease mr-2 px-2">-</button>
            <input type="number" value="${item.quantity}" class="border border-gray-500 w-16 pl-2" />
            <button data-id="${item.id}" class="bg-green-500 text-white btn btn-increase mr-2 px-2">+</button>
          </td>
          <td class="px-8 py-4 whitespace-nowrap">${item.total}</td>
          <td class="px-6 py-4 whitespace-nowrap">
            <button data-id="${item.id}" class="bg-red-500 text-white btn btn-remove mr-2 px-2">Xóa</button>
          </td>

        </tr>
      `).join("")}
        
      </tbody>
       <tfoot class="">
                    <tr class="py-5"><td colspan="5" class="text-right mt-10 py-5"><b class="text-2xl">Tổng là:</b> <span id="total_cart" >null</span></td></tr>
                </tfoot>
    </table><br><br>
        `;
  },
  afterRender() {
    // Header.afterRender();
    const btns = document.querySelectorAll(".btn");
    btns.forEach(btn => {
      btn.addEventListener("click", function () {
        const id = btn.dataset.id;
        if (btn.classList.contains("btn-increase")) {
          increaseQuantity(id, () => {
            reRender(cartPage, "#app");
          });

        } else if (btn.classList.contains("btn-decrease")) {
          decreaseQuantity(id, () => {
            reRender(cartPage, "#app");
          });
        } else {
          removeItemInCart(id, function () {
            reRender(cartPage, "#app");
          });
        }
        //  else if(btn.classList.contains('decrease')){
        //   decreaseQuantity(id)
        // }

      });

    });
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    let totalCart = 0;
    const totalCartRender = document.querySelector("#total_cart");
    cart.forEach((item) => {
      console.log(item);
      totalCart += item.total;
      console.log(totalCart);
    });
    totalCartRender.innerHTML = totalCart;
  }
};
export default cartPage;