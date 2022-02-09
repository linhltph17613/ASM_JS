import HeaderAdmin from "../../../components/headerAdmin";
import data from "../../../data";
const BlogsPage = {
    render() {
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
                    Quản lý bài viết
                    </h2>
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                    <a href="/admin/blogs/add" class="sm:ml-3">
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
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tiêu đề
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nội dung
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
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
                <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                <a href="/admin/detail/${postNew.id}">
                        <img class="h-10 w-10 rounded-full" src="${postNew.img}" alt="">
                        </a>
                        </div>
                        <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                        ${postNew.title}
                        </div>
                        <div class="text-sm text-gray-500">
                        ${postNew.title}
                        </div>
                        </div>
                    </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">${postNew.desc}</div>
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
                                        <a href="/admin/news/${postNew.id}/delete" class="text-red hover:text-red-600">Delete</a>

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
};
export default BlogsPage;