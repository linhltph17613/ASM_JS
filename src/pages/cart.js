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
        
        <table class="">
      <thead>
        <tr>
          <th></th>
          <th>Tên sản phẩm</th>
          <th>Giá</th>
          <th>Số lượng</th>
          <th></th>

        </tr>
      </thead>
      <tbody>
      ${cart.map(item => `
      <tr>
          <td>${item.id}</td>
          <td>${item.title}</td>
          <td>${item.quantity}</td>
          <td>
            <button data-id="${item.id}" class="bg-orange-500 text-white btn btn-decrease mr-2 px-2">-</button>
            <input type="number" value="${item.quantity}" class="border border-gray-500 w-16 pl-2" />
            <button data-id="${item.id}" class="bg-green-500 text-white btn btn-increase mr-2 px-2">+</button>
          </td>
          <td>
            <button data-id="${item.id}" class="bg-red-500 text-white btn btn-remove mr-2 px-2">Xóa</button>
          </td>

        </tr>
      `).join("")}
        
      </tbody>
       <tfoot>
                    <tr><td colspan="2" class="text-right">Tổng là: <span id="total">null</span></td></tr>
                </tfoot>
    </table>
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
  }
};
export default cartPage;