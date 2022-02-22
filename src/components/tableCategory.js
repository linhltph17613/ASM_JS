import CategoryPage from "../pages/admin/category";
import { getAll, remove } from "../api/cate";
import { reRender } from "../utils/rerender";
const tableCate = {
    async render() {
        const { data } = await getAll();
        return /*html*/ `
        ${data.map((postNew) => `
            <tr>
                <td class="px-6 py-4 whitespace-nowrap">${postNew.id}</td>
                <td class="px-6 py-4 whitespace-nowrap">${postNew.name}</td>
                <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <a href="/admin/category/${postNew.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>

                    </td>
                <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                                       <button type="submit" class="text-red hover:text-red-600" id="delete" data-id="${postNew.id}" >Delete</button>
                                        

                    </td>

                </tr>
                
        `).join("")}
        `;
    },
    afterRender() {
        const Delete = document.querySelectorAll("#delete");
        Delete.forEach((button) => {
            const { id } = button.dataset;
            button.addEventListener("click", (e) => {
                e.preventDefault();
                const confirm = window.confirm("Do you want to delele? ");
                if (confirm) {
                    remove(id).then(() => "Do you want to delele?");
                    reRender(tableCate, "#tbody-cate");
                }
            });

        });
    }
};
export default tableCate;