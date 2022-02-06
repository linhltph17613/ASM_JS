import Footer from "../components/footer";
import Header from "../components/header";

const ContactPage = {
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
            href="/">Contacts</a>
        </div>
        
      </div>
    </div>
      
  <div class="grid grid-cols-3 gap-[35px] mx-10 my-[50px]">
  <div class="">
    <h3 class="font-medium text-3xl py-2">Central Maps</h3>

<iframe class="w-[350px] h-[350px]"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.054438230067!2d108.07288781413271!3d12.709869924007759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171f7d129f29e75%3A0x4a950c104f61c8bb!2sFPT%20Polytechnic%20T%C3%A2y%20Nguy%C3%AAn!5e0!3m2!1sen!2s!4v1644159693568!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  </div>
  <div class="">
    <h3 class="font-medium text-3xl py-2">Central Office</h3>
    <p>Nam eu mi eget velit vulputate tempor gravida quis massa. In malesuada condimentum ultrices. Sed et mauris a purus fermentum elementum. Sed tristique semper enim, et gravida orci iaculis et. Nulla facilisi.
    </p>
    <div class="py-10 ">
      <div class="p-2">
        <i class="bi bi-telephone-fill pr-2 text-[#88B44E] "></i>0347496758
      </div>
      <div class="p-2">
        <i class="bi bi-envelope pr-2 text-[#88B44E]"></i>ChaiTanTea@gmail.com
      </div>
      <div class="p-2">
        <i class="bi bi-geo-alt-fill pr-2 text-[#88B44E]"></i>Trịnh Văn Bô, Nam Từ Liêm, Hà Nội
      </div>
    </div>

    <div class=" pl-5 py-9">
      <i
        class=" py-4 mx-1 px-5 text-white hover:text-black hover:bg-white  bg-[#88B44E] rounded-full bi bi-twitter"></i>
      <i
        class=" py-4 mx-1 px-5 text-white hover:text-black hover:bg-white  bg-[#88B44E] rounded-full bi bi-facebook"></i>
      <i
        class=" py-4 mx-1 px-5 text-white hover:text-black hover:bg-white  bg-[#88B44E] rounded-full bi bi-instagram"></i>
      <i
        class=" py-4 mx-1 px-5 text-white hover:text-black hover:bg-white  bg-[#88B44E] rounded-full bi bi-google"></i>
    </div>
  </div>
  
  <div class="bg-gray-100 px-10 py-[30px]">

    <form action="">
      <p class="py-3 ">Your Name</p> <input class="border rounded-full w-[300px] py-3" type="text">
      <p class="py-3 ">Your Email</p> <input class="border rounded-full w-[300px] py-3" type="text">
      <p class="py-3 ">Your Message</p> <textarea name="your-message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea border w-[300px] h-[200px]" aria-invalid="false"></textarea> <br>
      <button class="my-5 px-8 py-2 bg-[#88B44E] rounded-full buttun text-white" type="submit">Submit</button>
    </form>
  </div>
</div>
       ${Footer.render()}
        `;
    },
};
export default ContactPage;