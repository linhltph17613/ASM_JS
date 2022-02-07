import Footer from "../components/footer";
import Header from "../components/header";

const BlogPage = {
  render() {
    return /*html*/ `
       ${Header.render()}
       
        <div class="">
          <img class="w-full" src="https://i.imgur.com/06kGrh2.jpg" alt=""
            srcset="">
        </div>
        <div class="bg-lime-50 py-4">
      <div class=" flex justify-between items-center max-w-5xl mx-auto">
        <div class="">
          <a class="font-medium hover:text-[#88B44E] " href="/">Home</a> > <a class="font-medium text-[#88B44E]"
            href="/">Blog</a>
        </div>
        
      </div>
    </div>
     <div class="flex gap-5 max-w-6xl mx-auto mb-9">
      <div class="bg-gray-100 px-[50px] py-9 w-1/3">
        <div class="py-3">
          <div class="flex py-5">
            <div class="mt-4 mr-2">
              <img src="https://i.imgur.com/nC7J0xR.png" alt="">

            </div>
            <h3 class="font-medium text-3xl hover:text-[#88B44E]">Search</h3>
          </div>
          <form action="">
            <input class="border rounded-full w-[250px] px-2 py-2" type="text" placeholder="Search.."> <i
              class="bi bi-search-heart"></i>
          </form>
        </div>
        <div class="flex  mt-[50px] py-5">
          <div class="mt-4 mr-2">
            <img src="https://i.imgur.com/nC7J0xR.png" alt="">

          </div>
          <h3 class="font-medium text-3xl hover:text-[#88B44E]">Categories</h3>
        </div>
        <div class="">
          <nav>
            <ul class="list-disc pl-5">
              <li class=" hover:text-[#88B44E]"><a href="">Black Tea</a></li>
              <li class="hover:text-[#88B44E]"><a href="">Green Tea</a></li>
              <li class="hover:text-[#88B44E]"><a href="">Organic Tea</a></li>
              <li class="hover:text-[#88B44E]"><a href="">Uncategorized</a></li>
            </ul>
          </nav>
        </div>
        <div class="flex  mt-[50px] py-5">
          <div class="mt-4 mr-2">
            <img src="https://i.imgur.com/nC7J0xR.png" alt="">

          </div>
          <h3 class="font-medium text-3xl hover:text-[#88B44E]">Recent posts</h3>
        </div>
        <div class="flex">
          <img class="w-[80px] h-[60px]" src="https://i.imgur.com/cUzSs0T.jpg" alt="">
          <div class="pl-5">
            <p class="text-[#88B44E] text-sm">February 21, 2018</p>
            <h3 class="font-medium text-sm hover:text-[#88B44E]">3 way how to test nutaral indian tea</h3>
          </div>
        </div>
        <div class="flex pt-5">
          <img class="w-[80px] h-[60px]" src="https://i.imgur.com/SBxHvZS.jpg" alt="">
          <div class="pl-5">
            <p class="text-[#88B44E] text-sm">February 26, 2018</p>
            <h3 class="font-medium text-sm  hover:text-[#88B44E]">Result of international tea conference'18
            </h3>

          </div>
        </div>
      </div>
      <div class="w-3/4   gap-[50px]">

        <div class="border mb-8 hover:shadow-lg hover:shadow-gray-500/50 ">
          <div class="overflow-hidden object-cover">
            <img class="hover:scale-[1.1]" src="https://i.imgur.com/sTZnLhl.jpg" alt="">
          </div>
          <div class="p-4">
            <p class="text-[#88B44E]">China</p>
            <h3 class="text-3xl font-medium py-4 hover:text-[#88B44E]">3 ways how to test nutaral indian tea</h3>
            <p>Mango and Peach White Iced Tea Integer maximus accumsan nunc, sit amet tempor lectus facilisis eu. Cras
              vel elit
              felis. Vestibulum convallis ipsum id a …</p>

          </div>
          <div class="flex text-gray-400 justify-between px-4 pb-2">
            <p>February 21,2018</p>
            <span><i class="bi bi-eye-fill pr-2 text-[#88B44E]"></i>2009</span>
          </div>
        </div>
        <div class="border mb-8  hover:shadow-lg hover:shadow-gray-500/50 ">
          <div class="overflow-hidden object-cover">
            <img class="hover:scale-[1.1]" src="https://i.imgur.com/kY2WbQn.jpg" alt="">
          </div>
          <div class="p-4">
            <p class="text-[#88B44E]">China</p>
            <h3 class="text-3xl font-medium py-4 hover:text-[#88B44E]">3 ways how to test nutaral indian tea</h3>
            <p>Mango and Peach White Iced Tea Integer maximus accumsan nunc, sit amet tempor lectus facilisis eu. Cras
              vel elit
              felis. Vestibulum convallis ipsum id a …</p>

          </div>
          <div class="flex text-gray-400 justify-between px-4 pb-2">
            <p>February 21,2018</p>
            <span><i class="bi bi-eye-fill pr-2 text-[#88B44E]"></i>2009</span>
          </div>
        </div>
        <div class="border mb-8  hover:shadow-lg hover:shadow-gray-500/50 ">
          <div class="overflow-hidden object-cover">
            <img class="hover:scale-[1.1]" src="https://i.imgur.com/ydu2lR5.jpg" alt="">
          </div>
          <div class="p-4">
            <p class="text-[#88B44E]">China</p>
            <h3 class="text-3xl font-medium py-4 hover:text-[#88B44E]">3 ways how to test nutaral indian tea</h3>
            <p>Mango and Peach White Iced Tea Integer maximus accumsan nunc, sit amet tempor lectus facilisis eu. Cras
              vel elit
              felis. Vestibulum convallis ipsum id a …</p>

          </div>
          <div class="flex text-gray-400 justify-between px-4 pb-2">
            <p>February 21,2018</p>
            <span><i class="bi bi-eye-fill pr-2 text-[#88B44E]"></i>2009</span>
          </div>
        </div>
      </div>
    </div>
       ${Footer.render()}
        `;
  },
};
export default BlogPage;