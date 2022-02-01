
const Blog = {
    render() {
        return /*html*/ `
        <!-- Danh sách bài blog -->
    <div class=" text text-center max-w-5xl mx-auto my-[80px]">
    <p class="font-medium text-[#88B44E] pb-[20px]"> It's interesting</p>
    <h1 class="font-medium text-4xl">Recent blog posts</h1>
  </div>
  <div class="grid grid-cols-3 gap-5 max-w-6xl mx-auto">
    <div class="border  hover:shadow-lg hover:shadow-gray-500/50 ">
      <div class="overflow-hidden object-cover">
        <img class="hover:scale-[1.1]" src="https://i.imgur.com/sTZnLhl.jpg" alt="">
      </div>
      <div class="p-4">
        <p class="text-[#88B44E]">China</p>
        <h3 class="text-3xl font-medium py-4 hover:text-[#88B44E]">3 ways how to test nutaral indian tea</h3>
        <p>Mango and Peach White Iced Tea Integer maximus accumsan nunc, sit amet tempor lectus facilisis eu. Cras vel elit felis. Vestibulum convallis ipsum id a …</p>

      </div>
      <div class="flex text-gray-400 justify-between px-4 pb-2">
        <p>February 21,2018</p>
        <span><i class="bi bi-eye-fill pr-2 text-[#88B44E]"></i>2009</span>
      </div>
    </div>
    <div class="border  hover:shadow-lg hover:shadow-gray-500/50 ">
      <div class="overflow-hidden object-cover">
        <img class="hover:scale-[1.1]" src="https://i.imgur.com/kY2WbQn.jpg" alt="">
      </div>
      <div class="p-4">
        <p class="text-[#88B44E]">China</p>
        <h3 class="text-3xl font-medium py-4 hover:text-[#88B44E]">3 ways how to test nutaral indian tea</h3>
        <p>Mango and Peach White Iced Tea Integer maximus accumsan nunc, sit amet tempor lectus facilisis eu. Cras vel elit felis. Vestibulum convallis ipsum id a …</p>

      </div>
      <div class="flex text-gray-400 justify-between px-4 pb-2">
        <p>February 21,2018</p>
        <span><i class="bi bi-eye-fill pr-2 text-[#88B44E]"></i>2009</span>
      </div>
    </div>
    <div class="border  hover:shadow-lg hover:shadow-gray-500/50 ">
      <div class="overflow-hidden object-cover">
        <img class="hover:scale-[1.1]" src="https://i.imgur.com/ydu2lR5.jpg" alt="">
      </div>
      <div class="p-4">
        <p class="text-[#88B44E]">China</p>
        <h3 class="text-3xl font-medium py-4 hover:text-[#88B44E]">3 ways how to test nutaral indian tea</h3>
        <p>Mango and Peach White Iced Tea Integer maximus accumsan nunc, sit amet tempor lectus facilisis eu. Cras vel elit felis. Vestibulum convallis ipsum id a …</p>

      </div>
      <div class="flex text-gray-400 justify-between px-4 pb-2">
        <p>February 21,2018</p>
        <span><i class="bi bi-eye-fill pr-2 text-[#88B44E]"></i>2009</span>
      </div>
    </div>
  </div>
        `;
    },
};
export default Blog;