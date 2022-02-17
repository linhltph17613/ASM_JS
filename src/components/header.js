import { reRender } from "../utils/rerender";
import toastr from "toastr";
import HomePage from "../pages/home";
const Header = {
  render() {
    // console.log("abc");+
    return /*html*/ `
     <div>
      <div class="mb-6">
        <div class="flex bg-[#88B44E] justify-around text-white">
          <div class="p-2">
            <i class="bi bi-telephone-fill px-2"></i>0347496758
          </div>
          <div class="p-2">
            <i class="bi bi-envelope px-2"></i>ChaiTanTea@gmail.com
          </div>
          <div class="p-2">
            <i class="bi bi-geo-alt-fill px-2"></i>Trịnh Văn Bô, Nam Từ Liêm, Hà Nội
          </div>
        </div>
        <div class="flex justify-around">
          <div class="pt-7">
            <img src="https://i.imgur.com/GZSIoZC.png" width="250" alt="" srcset="">
          </div>
          <div class="mt-10">
            ${localStorage.getItem("user") ? `
              <ul class="flex">
                  <li class="menu_item"><a class="menu_item_link" href="/">Home</a></li>
                  <li class="menu_item"><a class="menu_item_link" href="/#/about">About</a></li>
                  <li class="menu_item"><a class="menu_item_link" href="/#/shop">Shop</a></li>
                  <li class="menu_item"><a class="menu_item_link" href="/#blogs">Blog</a></li>
                  <li class="menu_item"><a class="menu_item_link" href="/#/contact">Contact</a></li>
                  <li class="menu_item"><a class="menu_item_link" href="/#/admin/dashboard" id="admin"></a></li>
                  
                </ul>
                </div>
                <div class="flex font-medium mt-12 ">
                  <div class="mx-1 flex mt-1">
                    <div >Xin chào: <span class="text-[#88B44E]" id="username"></span></div>
                     <div class="hover:text-[#88B44E] ml-5 font-medium cursor-pointer" id="logout">Logout</div>
                  </div>

                  <div class="mx-1 hover:text-[#88B44E]">
                    <b><i class="bi bi-cart3"></i></b>
                  </div>
               </div>
            `:
        `
            <ul class="flex">
                <li class="menu_item"><a class="menu_item_link" href="/">Home</a></li>
                <li class="menu_item"><a class="menu_item_link" href="/about">About</a></li>
                <li class="menu_item"><a class="menu_item_link" href="/shop">Shop</a></li>
                <li class="menu_item"><a class="menu_item_link" href="blogs">Blog</a></li>
                <li class="menu_item"><a class="menu_item_link" href="/contact">Contact</a></li>
              </ul>
              </div>
                <div class="flex font-medium mt-12 ">
                  <div class="mx-1 ">
                    <a class="hover:text-[#88B44E]" href="/admin/dashboard"><i class="bi bi-person-circle"></i></a>
                    <a class="hover:text-[#88B44E]" href="/signin">Sign In</a> / <a class="hover:text-[#88B44E]"
                      href="/signup">Sign Up</a>
                  </div>

                  <div class="mx-1 hover:text-[#88B44E]">
                    <b><i class="bi bi-cart3"></i></b>
                  </div>
               </div>
             `}
        </div>
      </div>

      <hr>
    </div>
    `;
  },
  afterRender() {
    console.log(JSON.parse(localStorage.getItem("user")));
    const admin = document.querySelector("#admin");
    if (localStorage.getItem("user")) {
      if (JSON.parse(localStorage.getItem("user")).id === 10) {
        admin.innerHTML = "Admin";
      } else {
        admin.innerHTML = "";
      }
      const username = document.querySelector("#username");
      username.innerHTML = JSON.parse(localStorage.getItem("user")).username;

      const logout = document.querySelector("#logout");
      logout.addEventListener("click", () => {
        localStorage.removeItem("user");
        toastr.success("Bạn đã đăng xuất thành công!");
        reRender(HomePage, "#app");

      });
    }
  }
};
export default Header;