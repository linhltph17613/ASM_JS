const VideoTea = {
  render() {
    return /*html*/ `
         
    <div class="my-[100px]">
    <div class="z-0 h-500px">
      <img class="" src="https://i.imgur.com/cWb5KQZ.jpg" alt="">
    </div>
    <div class=" -mt-[640px]">
      <div class="py-10  text-white text-center">
        <span class="text-6xl font-medium">How to prepare </span> <span class="text-6xl font-medium text-[#88B44E]">green tea</span>
        <p class="mt-6 text-xl">Wattch our amazing video tutorial:

        </p>
      </div>
      <video  class="mx-auto w-4/5" controls>
        <source class="" src="./src/5867425058260468807.mp4" type="video/mp4">
            </video>
    </div>
    
  </div>
        `;
  },
};
export default VideoTea;