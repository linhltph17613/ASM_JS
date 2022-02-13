import { getAll } from "../api/blogs";


const ProductList = {
  async render() {
    // Chờ thằng axios.get truy cập API và lấy dữ liệu, 
    // lấy dữ liệu xong sẽ trả về và gán vào biến response
    const { data } = await getAll();
    return /*html*/ `
        <!-- Danh sách sản phẩm -->
    <div class=" text text-center max-w-5xl mx-auto  my-[80px]">
    <p class="font-medium text-[#88B44E] pb-[20px]"> Online store</p>
    <h1 class="font-medium text-4xl">POPULAR PRODUCTS</h1>
    <p class="pt-[20px]"> Integer quis tempor orci. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum
      primis in faucibus.</p>
  </div>
  <div class="grid grid-cols-3 gap-5 max-w-6xl mx-auto">
  ${data.map((post) => `
<div class="overlay  ">
      <div class="relative  hover:border product-item p-8 text-center">
        <div class="info-item ">
          <img src="${post.img}" class="w-full h-full"
            alt="">
          <h2 class="text-2xl font-medium">${post.title}</h2>
          <p class="py-3">${post.desc}</p>
          <p class="font-medium text-[#88B44E] text-xl font-bold">${post.price}</p>
        </div>
        `
    ).join("")}
        <div class=" absolute top-[40%] left-[95px] ">
          <a class="invisible text-over " href=""><button
              class="buttun px-[40px] py-[10px] bg-gray-300 rounded-full font-medium" type="submit">More info <i
              class="bi bi-chevron-right text-white  text-[6px] p-1 bg-[#88B44E] boder ml-1 rounded-full"></i></button></a><br>
          <a class="invisible text-over" href=""><button
              class="buttun mt-5 px-[40px] py-[10px] bg-[#88B44E] text-white rounded-full font-medium"
              type="submit">Add cart <i class="bi bi-basket3-fill text-black ml-1"></i></button></a>
        </div>
        <div class=" absolute bg-[#88B44E] py-1 w-[380px] left-0 bottom-0 invisible text-over"></div>

      </div>
    </div>
    
    <div class="overlay  ">
      <div class="relative  hover:border product-item p-8 text-center">
        <div class="info-item ">
          <img src="https://i.imgur.com/CQFs2Cl.jpg" class="w-full h-full"
            alt="">
          <h2 class="text-2xl font-medium">Bai Hao Olong</h2>
          <p class="py-3">Duis et aliquam orci. Vivamus augue quam, sollicitudin quis bibendum quis, eleifend vitae
            velit.</p>
          <p class="font-medium text-[#88B44E] text-xl font-bold">$ 300</p>
        </div>
        <div class=" absolute top-[40%] left-[95px] ">
          <a class="invisible text-over " href=""><button
              class="buttun px-[40px] py-[10px] bg-gray-300 rounded-full font-medium" type="submit">More info <i
                class="bi bi-chevron-right text-white  text-[6px] p-1 bg-[#88B44E] boder ml-1 rounded-full"></i></button></a><br>
          <a class="invisible text-over" href=""><button
              class="buttun mt-5 px-[40px] py-[10px] bg-[#88B44E] text-white rounded-full font-medium"
              type="submit">Add cart <i class="bi bi-basket3-fill text-black ml-1"></i></button></a>
        </div>
        <div class=" absolute bg-[#88B44E] py-1 w-[380px] left-0 bottom-0 invisible text-over"></div>

      </div>
    </div>
    <div class="overlay  ">
      <div class="relative  hover:border product-item p-8 text-center">
        <div class="info-item ">
          <img src="https://i.imgur.com/acI0ber.jpg" class="w-full h-full"
            alt="">
          <h2 class="text-2xl font-medium">Dong Dinh</h2>
          <p class="py-3">Duis et aliquam orci. Vivamus augue quam, sollicitudin quis bibendum quis, eleifend vitae
            velit.</p>
          <p class="font-medium text-[#88B44E] text-xl font-bold">$ 300</p>
        </div>
        <div class=" absolute top-[40%] left-[95px] ">
          <a class="invisible text-over " href=""><button
              class="buttun px-[40px] py-[10px] bg-gray-300 rounded-full font-medium" type="submit">More info <i
                class="bi bi-chevron-right text-white  text-[6px] p-1 bg-[#88B44E] boder ml-1 rounded-full"></i></button></a><br>
          <a class="invisible text-over" href=""><button
              class="buttun mt-5 px-[40px] py-[10px] bg-[#88B44E] text-white rounded-full font-medium"
              type="submit">Add cart <i class="bi bi-basket3-fill text-black ml-1"></i></button></a>
        </div>
        <div class=" absolute bg-[#88B44E] py-1 w-[380px] left-0 bottom-0 invisible text-over"></div>

      </div>
    </div>
  </div>
        `;
  },
};
export default ProductList;