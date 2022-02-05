import Footer from "../components/footer";
import Header from "../components/header";
import New1 from "../components/new1";

const AboutPage = {
    render() {
        return /*html*/`
        ${Header.render()}
        
  
       
        <div class="">
          <img class="w-full" src="https://i.imgur.com/06kGrh2.jpg" alt=""
            srcset="">
        </div>
        <div class="bg-lime-50 py-4">
      <div class=" flex justify-between items-center max-w-5xl mx-auto">
        <div class="">
          <a class="font-medium hover:text-[#88B44E] " href="/">Home</a> > <a class="font-medium text-[#88B44E]"
            href="/">About</a>
        </div>
        
      </div>
    </div>
        ${New1.render()}
        ${Footer.render()}
       `;
    },
};
export default AboutPage;