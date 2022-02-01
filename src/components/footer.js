const Footer = {
    render(){
        return /*html*/ `
        <footer>

        <div class="bg-[#252C30] text-white py-[50px] font-medium mt-[50px]">
          <div class="flex  pb-[50px] justify-between max-w-6xl mx-auto">
            <img src="https://i.imgur.com/gqNCjid.png" width="200" alt="" srcset="">
            <div class="flex pt-[30px]">
              <p class="font-medium text-xl">Folow us --</p>
              <div class="pl-5">
                <i
                  class=" py-2 px-3 text-white hover:text-black hover:bg-white  bg-[#88B44E] rounded-full bi bi-twitter"></i>
                <i
                  class=" py-2 px-3 text-white hover:text-black hover:bg-white  bg-[#88B44E] rounded-full bi bi-facebook"></i>
                <i
                  class=" py-2 px-3 text-white hover:text-black hover:bg-white  bg-[#88B44E] rounded-full bi bi-instagram"></i>
                <i
                  class=" py-2 px-3 text-white hover:text-black hover:bg-white  bg-[#88B44E] rounded-full bi bi-google"></i>
              </div>
            </div>
          </div>
          <hr>
          <div class=" flex grid grid-cols-3 pt-[50px] max-w-6xl mx-auto">
            <div class="leading-10">
              <h3 class="pb-8 text-3xl font-medium text-[#88B44E]">About us</h3>
              <span class="font-medium text-[#88B44E]">Address: </span> Trịnh Văn Bô, Nam Từ Liêm, Hà Nội <br>
              <span class="font-medium text-[#88B44E]"><i class="bi bi-telephone-fill px-2"></i></span> + 0347496758 <br>
              <span class="font-medium text-[#88B44E]"><i class="bi bi-envelope px-2"></i></span> ChaiTamTea@gmail.com
              <br>
            </div>
            <div class="pl-10 leading-10">
              <h3 class=" pb-8 text-3xl font-medium text-[#88B44E]">Explore</h3>
              <p><i class="bi bi-chevron-right text-[#88B44E]  text-[10px] font-semibold "></i> Home</p>
              <p><i class="bi bi-chevron-right text-[#88B44E]  text-[10px] font-semibold "></i> About us</p>
              <p><i class="bi bi-chevron-right text-[#88B44E]  text-[10px] font-semibold "></i> Shop</p>
              <p><i class="bi bi-chevron-right text-[#88B44E]  text-[10px] font-semibold "></i> Blog</p>
  
            </div>
            <div class="">
              <h3 class="pb-8 text-3xl font-medium text-[#88B44E]">Reccent News</h3>
              <div class="flex">
                <img src="https://i.imgur.com/cUzSs0T.jpg" alt="">
                <div class="pl-5">
                  <p class="text-[#88B44E]">February 21, 2018</p>
                  <h3 class="font-medium hover:text-[#88B44E] text-xl">3 way how to test nutaral indian tea</h3>
                </div>
              </div>
              <div class="flex pt-5">
                <img src="https://i.imgur.com/SBxHvZS.jpg" alt="">
                <div class="pl-5">
                  <p class="text-[#88B44E]">February 26, 2018</p>
                  <h3 class="font-medium hover:text-[#88B44E] text-xl">Result of international tea conference'18</h3>
  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-[#191A19] text-white">
          <p class="pl-[100px] py-5">Like-themes 2022 © All Rights Reserved - Purchase Theme</p>
        </div>
      </footer>
        `;
    },
};
export default Footer;