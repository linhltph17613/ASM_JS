import { getAll, remove } from "../api/products";
import { reRender } from "../utils/rerender";
const tableProduct = {
    async render() {
        const { data } = await getAll();
        return /*html*/ `
         ${data.map((postNew) => `
                
                <tr>
                <td class="text-center">${postNew.id}</td>
                <td class="">${postNew.title}</td>
                <td class="h-10 w-10 p-2"><img src="${postNew.img}"></td>
                <td class="px-2 py-4 whitespace-nowrap text-sm "><p class="truncate  w-[350px]">${postNew.desc}</p></td>
                
                <td class="px-2 py-4 whitespace-nowrap text-sm ">${postNew.price}</td>
                <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <a href="/admin/blogs/${postNew.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>

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
                    reRender(tableProduct, "#tbody-product");
                }
            });

        });
    }
};
export default tableProduct;