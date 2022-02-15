import { getAll, remove } from "../api/blogs";
import BlogPage from "../pages/blogs";
import { reRender } from "../utils/rerender";

const tablePost = {
    async render() {
        const { data } = await getAll();
        return /*html*/ `
         ${data.map((postNew) => `
                <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                <a href="/admin/detail/${postNew.id}">
                        <img class="h-10 w-10  rounded-full" src="${postNew.img}" alt="">
                        </a>
                        </div>
                        <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                        ${postNew.title}
                        </div>
                        
                        </div>
                    </div>
                    </td>
                    <td class="px-6 py-4">
                    <p class="text-sm text-gray-900  truncate  w-[510px]">${postNew.desc}</p>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                    </span>
                    </td>
                    <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <a href="/admin/news/${postNew.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>

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
                    reRender(tablePost, "#tbody-post");
                }
            });

        });
    }
};
export default tablePost;