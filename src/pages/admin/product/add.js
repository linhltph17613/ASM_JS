import axios from "axios";
import { add } from "../../../api/products";
import NavAdmin from "../../../components/headerAdmin";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { getAllCate } from "../../../api/cate";

const ProductAddPage = {
    async render() {
        const { data } = await getAllCate();
        return /*html*/ `
       <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                    <h2
                    class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                    >
                    Thêm bài viết
                    </h2>
                </div>
                    <div class="mt-5 flex lg:mt-0 lg:ml-4">
                        <a href="/admin/products" class="sm:ml-3">
                            <button
                                type="button"
                                class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <!-- Heroicon name: solid/check -->
                                <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Quay lại
                            </button>
                        </a>
                    </div>

                </div>
            </div>
            </header>
            <main>
            
            <div class="bg-gray-100 px-10  py-[30px] max-w-3xl mx-auto">
                <div>
                <form id="form-add-product" class="" action="">
                    <p class="py-3 ">Tiêu đề sản phẩm</p> <input class="px-2 outline-0 border rounded-full w-[300px] py-3" type="text" id="title">
                    <p class="py-3 ">Hình ảnh</p><div class="grid grid-cols-2 gap-8">
                     <div><input class="bg-white border rounded-full w-[300px] px-3 py-3" type="file" id="img"></div>
                     </div>
                    <p class="py-3 ">Nội dung</p> <textarea name="your-message" cols="40" rows="10" class="outline-0 px-2 wpcf7-form-control wpcf7-textarea border w-[300px] h-[200px]" id="desc" ></textarea> <br>
                    <p class="py-3 ">Giá</p> <input class="outline-0 px-2 border rounded-full w-[300px] py-3" type="number" id="price">
                    <p class="py-3 ">Danh mục</p> 
                    <select class="px-2 py-3 outline-0"  id="catee">
                        ${data.map((item) => /*html*/ `
                        <option value="${item.id}"> ${item.name} </option>
                        `).join("")};
                    </select><br>
                    <button class="my-5 px-8 py-2 bg-[#88B44E] rounded-full buttun text-white" type="submit">Thêm </button>
                </form>
                </div>
            </div>
            </main>
        </div>
        `;
    },
    afterRender() {
        const FormAdd = document.querySelector("#form-add-product");
        const imgPost = document.querySelector("#img");


        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dfeh8fmty/image/upload";
        const CLOUDINARY_PRESET = "xrax0ays";


        FormAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            //lấy giá trị input file
            const file = imgPost.files[0];


            //append vào object formData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            //call api clou..
            const response = await axios.post(CLOUDINARY_API, formData, {
                headers: {
                    "Content-Type": "application/form-data"
                }
            });
            console.log(response);

            //call api thêm sản phẩm
            add({
                "title": document.querySelector("#title").value,
                "img": response.data.url,
                "desc": document.querySelector("#desc").value,
                "price": document.querySelector("#price").value,
                "cateId": document.querySelector("#catee").value,

            });
            toastr.success("Thêm thành công !");
            setTimeout(() => window.location.href = "/#/admin/products", 2000);
        });
    },
};
export default ProductAddPage;