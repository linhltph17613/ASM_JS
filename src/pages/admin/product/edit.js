import { update } from "../../../api/products";
import { get } from "../../../api/products";
import axios from "axios";
import { getAllCate } from "../../../api/cate";
const AdminEditProducts = {
    async render(id) {
        const { data } = await get(id);
        const getdataCate = await getAllCate();
        const dataCate = getdataCate.data;

        return /*html*/ `
        <div class="bg-gray-100 px-10  py-[30px] max-w-3xl mx-auto">
                <div>
                <form id="form-edit-product" class="" action="">
                    <p class="py-3 ">Tiêu đề sản phẩm</p> <input class="px-2 outline-0 border rounded-full w-[300px] py-3" type="text" id="title" value="${data.title}" >
                    <p class="py-3 ">Hình ảnh</p> 
                    <div class="grid grid-cols-2 gap-8">
                        <div>
                            <input class="bg-white border rounded-full w-[300px] px-3 py-3" type="file" id="img">
                        </div>
                        <div><img width="200" src="${data.img}" id="previewImage"></div>
                    </div>
                        <p class="py-3 ">Nội dung</p> <textarea name="your-message" cols="40" rows="10" class="outline-0 px-2 wpcf7-form-control wpcf7-textarea border w-[300px] h-[200px]" id="desc" value="${data.desc}"></textarea> <br>
                    <p class="py-3 ">Giá</p> <input class="outline-0 px-2 border rounded-full w-[300px] py-3" type="number" id="price" value="${data.price}"><br>
                    <select class="px-2 py-3 outline-0"  id="catee">
                        ${dataCate.map((item) => /*html*/ `
                        <option value="${item.id}"> ${item.name} </option>
                        `).join("")};
                    </select><br>
                    <button class="my-5 px-8 py-2 bg-[#88B44E] rounded-full buttun text-white" type="submit">Cập nhật </button>
                </form>
                </div>
            </div>
        `;
    },
    afterRender(id) {
        const formEdit = document.querySelector("#form-edit-product");
        const imgProduct = document.querySelector("#img");
        const imgPreview = document.querySelector("#previewImage");
        let imgUpload = "";


        imgProduct.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(imgProduct.files[0]);
        });
        formEdit.addEventListener("submit", async (e) => {
            e.preventDefault();

            const file = imgProduct.files[0];
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", "xrax0ays");

                const { data } = await axios({
                    url: "https://api.cloudinary.com/v1_1/dfeh8fmty/image/upload",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-formendcoded",
                    },
                    data: formData,
                });
                imgUpload = data.url;
            }

            update({
                id, title: document.querySelector("#title").value,
                img: imgUpload ? imgUpload : imgPreview.src,
                price: document.querySelector("#price").value,
                desc: document.querySelector("#desc").value,
                cateId: document.querySelector("#catee").value

            })
                .then((result) => document.location.href = "/admin/products")
                .catch((error) => console.log(error));
        });
    }
};
export default AdminEditProducts;