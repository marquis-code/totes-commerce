<template>
  <main class="hero relative bg-black">
    <div
      class="mx-auto flex items-center h-full w-11/12 lg:w-10/12"
    >
      <div class="space-y-6 text-white">
        <h3 class="font-[700] text-[16px] leading-[24px]">SUMMER 2020</h3>
        <h1 class="font-[700] leading-[80px] text-white text-[58px]">
          -30% Discount
        </h1>
        <p class="text-[20px] font-[400] leading-[30px] lg:w-7/12">
          We know how large objects will act, but things on a small scale.
        </p>
        <button class="border border-white text-white rounded-full py-3 px-6">
          Read More
        </button>
      </div>
    </div>
    <div class="hidden lg:absolute bottom-0 right-0">
      <img src="@/assets/images/hero_small.png" alt="" />
    </div>
  </main>
</template>

<style>
.hero {
  background-image: url("../assets/images/hero_large.jpg");
  width: 100vw;
  height: 600px;
  background-size: 100% 100%;
  background-size: contain;
  background-clip: border-box;
}
</style>
