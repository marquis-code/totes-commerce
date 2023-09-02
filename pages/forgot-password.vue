<template>
  <main class="flex justify-center items-center h-screen w-full">
    <div
           class="flex justify-center items-center flex-col space-y-6 w-11/12 lg:w-4/12 mx-auto"
    >
      <div>
        <img src="@/assets/icons/logo.svg" alt="logo" />
      </div>
      <div class="flex justify-center items-center flex-col gap-y-2">
        <h1 class="text-[#223263] font-[700] leading-[27px] text-[18px]">
          Forgot Password
        </h1>
        <p class="font-[400] text-[#848484] text-sm lg:text-[18px] leading-[32.4px] text-center">
          <span class="text-[#FF4B26] font-[400] text-center text-[10px]">*</span> We will send you a
          message to set or reset your new password
        </p>
      </div>
      <div class="w-full space-y-10">
        <div class="relative w-full">
          <input
            type="text"
            placeholder="Your Email / Phone Number"
            class="w-full bg-white py-3.5 rounded-lg pl-14 text-sm border outline-none"
          />
          <img
            src="@/assets/icons/user_vector.svg"
            alt=""
            class="absolute left-3 top-3"
          />
        </div>
        <div class="w-full">
          <button class="bg-[#002482] text-white py-3 rounded-lg w-full">
            Send Verification
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: "authLayout",
};
</script>
