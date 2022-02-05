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
       ${Footer.render()}
        `;
    },
};
export default ContactPage;