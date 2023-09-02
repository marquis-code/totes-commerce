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
          Enter Verification Code
        </h1>
        <p
          class="font-[400] text-[#848484] text-[18px] leading-[32.4px] text-center"
        >
          <span class="text-[#FF4B26] font-[400] text-center">*</span>* We will
          send you a message to set or reset your new password
        </p>
      </div>
      <div class="w-full space-y-10">
        <div class="w-full">
          <input
            type="text"
            placeholder="Enter OTP here"
            class="w-full bg-white py-3.5 rounded-lg pl-4 text-sm border outline-none"
          />
        </div>

        <div class="flex justify-between items-center">
          <div class="w-full">
            <button class="bg-[#002482] text-white py-3 rounded-lg w-full">
              Confirm
            </button>
          </div>
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
