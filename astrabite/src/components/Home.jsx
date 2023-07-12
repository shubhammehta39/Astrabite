import React from "react";

const Home = () => {
  return (
    <>
      <div class="mt-12 px-10">

        <h3 class='text-5xl font-bold '>About US</h3>

        <div class="flex flex-row p-10 pl-0">
          <div class="basis-1/2">
            <p class='pt-10 py-20'>
              Welcome to Astrabite Gaming & Design Studios where imagination comes to life through stunning visual effects and captivating gaming experiences. With a passionate team of creative professionals and cutting-edge technology, we deliver immersive worlds for film, television, and advertising. Our state-of-the-art facilities and commitment to excellence ensure exceptional results that exceed expectations. From breathtaking VFX to unforgettable gaming adventures, join us on an incredible journey where possibilities are limitless. Contact us today and let's bring your visions to life!
            </p>
          </div>


          <div class="basis-1/2 place-self-center">
              <img class="h-auto max-w-full rounded h-200 w-200 mx-20" src="/src/assets/images.png" alt="wc" />
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
