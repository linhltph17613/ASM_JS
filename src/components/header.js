const Header = {
  render() {
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
        </div>
      </div>

      <hr>
    </div>
    `;
  },
};
export default Header;