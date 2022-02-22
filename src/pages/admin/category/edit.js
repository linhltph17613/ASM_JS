import { getAll } from "../../../api/cate";
import { update } from "../../../api/products";
const AdminEditcate = {
    async render(id) {
        const { data } = await getAll();
        return /*html*/ `
        <div class="bg-gray-100 px-10  py-[30px] max-w-3xl mx-auto">
            <div>
                <form id="form-edit-cate" class="" action="">
                    <p class="py-3 ">Tiêu đề danh mục</p> <input class="px-2 outline-0 border rounded-full w-[300px] py-3" type="text" id="title-cate" value="${data.name}" >
                    <button class="my-5 px-8 py-2 bg-[#88B44E] rounded-full buttun text-white" type="submit">Cập nhật </button>

                </form>
            </div>
        </div>
        `;
    },
    afterRender(id) {
        const formEdit = document.querySelector("#form-edit-cate");
        formEdit.addEventListener("submit", async (e) => {
            e.preventDefault();

            update({
                name: document.querySelector("title-cate").value
            })
                .then((result) => document.location.href = "/admin/category")
                .catch((error) => console.log(error));
        });
    }
};
export default AdminEditcate;