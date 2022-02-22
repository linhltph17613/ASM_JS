import { add } from "../../../api/cate";
import NavAdmin from "../../../components/headerAdmin";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import axios from "axios";

const CateAddPage = {
    render() {
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
                    Thêm danh mục
                    </h2>
                </div>
                    <div class="mt-5 flex lg:mt-0 lg:ml-4">
                        <a href="/admin/blogs" class="sm:ml-3">
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
            
            <div class="bg-gray-100 px-10  py-[30px]  max-w-3xl mx-auto">
                <div>
                <form id="form-add-cate" class="" action="">
                    <p class="py-3 ">Tiêu đề danh mục</p> <input class="px-2 border rounded-full w-[300px] py-3" type="text" id="title-cate">
                    <button class="my-5 px-8 py-2 bg-[#88B44E] rounded-full buttun text-white" type="submit">Thêm </button>
                </form>
                </div>
            </div>
            </main>
        </div>
        `;
    },
    afterRender() {
        const FormAdd = document.querySelector("#form-add-cate");

        FormAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            add({
                name: document.querySelector("#title-cate").value,
            });
            toastr.success("Thêm danh mục thành công!");
            setTimeout(() => window.location.href = "/#/admin/category", 2000);
        });

    }
};
export default CateAddPage;