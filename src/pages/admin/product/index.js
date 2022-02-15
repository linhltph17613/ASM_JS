import { getAll, remove } from "../../../api/products";
import HeaderAdmin from "../../../components/headerAdmin";
const ProductPage = {
    async render() {
        const { data } = await getAll();

        return /*html*/ `
         <div class="min-h-full">
           ${HeaderAdmin.render()}
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                    <h2
                    class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                    >
                    Quản lý sản phẩm
                    </h2>
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                    <a href="/admin/products/add" class="sm:ml-3">
                        <button
                            type="button"
                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            + Thêm mới
                        </button>
                    </a>
                </div>
                </div>
            </div>
            </header>
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <!-- Replace with your content -->
                <div class="px-4 py-6 sm:px-0">
                <div
                    class="border-4 border-dashed border-gray-200 rounded-lg h-96"
                >
                
        <div class="flex flex-col mx-auto max-w-7xl">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    STT
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tiêu đề
                    </th>
                    <th scope="col" class="px-6 w-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hình ảnh
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nội dung
                    </th>
                    <th scope="col" class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   Giá
                    </th>
                    <th scope="col" class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   Edit
                    </th>
                     <th scope="col" class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   Delete
                    </th>
                </tr>
                </thead>
                ${data.map((postNew) => `
                <tbody class="bg-white divide-y divide-gray-200">
                
                <tr>
                <td class="text-center">1</td>
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
                <!-- More people... -->
                </tbody>
                
               
            </table>
            </div>
          
        </div>
        </div>
        </div>
        </div>
                </div>
                <!-- /End replace -->
            </div>
            </main>
        </div>
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

                }
            });

        });
    }
};
export default ProductPage;