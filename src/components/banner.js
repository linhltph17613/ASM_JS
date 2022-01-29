const Banner = {
    render() {
        return /*html*/ `
        <div class="text-banner flex mt-10 justify-around">
        <div class="my-20 ml-5">
          <h1 class="text-6xl pt-8 font-extrabold">Best Sorts Of Tea</h1>
          <h1 class="text-6xl text-[#88B44E] pt-8 font-extrabold">From India</h1>
          <p class="mt-10">Sed sagittis sodales lobortis. Curabitur in eleifend turpis,<br>
            id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.</p>
          <button class=" buttun bg-[#88B44E] px-8 py-3 mt-10 font-medium text-white rounded-full hover:text-black "
            type="submit">Read more</button>
        </div>
  
        <div class="">
          <img class="-ml-5" src="https://i.imgur.com/vK1hic7.png" alt=""
            srcset="">
        </div>
      </div>
        `;
    },
};
export default Banner;