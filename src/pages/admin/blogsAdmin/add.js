import axios from "axios";
import NavAdmin from "../../../components/headerAdmin";

const BlogsAddPage = {
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
                    Thêm bài viết
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
                <form id="form-add-post" class="" action="">
                    <p class="py-3 ">Tiêu đề bài viết</p> <input class="px-2 border rounded-full w-[300px] py-3" type="text" id="title-post">
                    <p class="py-3 ">Hình ảnh</p> <input class="bg-white border rounded-full w-[300px] px-3 py-3" type="file" id="img-post">
                    <p class="py-3 ">Nội dung</p> <textarea name="your-message" cols="40" rows="10" class="px-2 wpcf7-form-control wpcf7-textarea border w-[300px] h-[200px]" id="desc-post" ></textarea> <br>
                    <button class="my-5 px-8 py-2 bg-[#88B44E] rounded-full buttun text-white" type="submit">Thêm </button>
                </form>
                </div>
            </div>
            </main>
        </div>
        `;
    },
    // afterRender() {
    //     const FormAdd = document.querySelector("#form-add-post");
    //     const imgPost = document.querySelector("#img-post");

    //     imgPost.addEventListener("change", (e) => {
    //         const file = e.target.files[0];
    //         const formData = new FormData();
    //         formData.append("file", file);
    //         formData.append("upload_preset", "dfeh8fmty");

    //         axios({
    //             url: "POST https://api.cloudinary.com/v1_1/demo/image/upload",
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/x-www-formendcoded",
    //             },
    //             data: formData,
    //         }).then((res) => {
    //             FormAdd.addEventListener("submit", (e) => {
    //                 e.preventDefault();
    //                 add({
    //                     title: document.queryCommandIndeterm("#title-post").value,
    //                     img: res.data.secure_url,
    //                     desc: document.querySelector("#desc-post").value,
    //                 })
    //                     .then((result) => console.log(result.data))
    //                     .catch((error) => console.log(error));
    //             });
    //         });
    //     });;
    // },
};
export default BlogsAddPage;