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
          Welcome back to E-Com!
        </h1>
        <p class="font-[400] text-[#848484] text-[18px] leading-[32.4px]">
          Let’s make your account.
        </p>
      </div>
      <div class="w-full space-y-6">
        <div class="relative w-full">
          <input
            type="text"
            placeholder="Name"
            class="w-full bg-white py-3.5 rounded-lg pl-14 text-sm border outline-none"
          />
          <img
            src="@/assets/icons/user_vector.svg"
            alt=""
            class="absolute left-3 top-3"
          />
        </div>
        <div class="relative w-full">
          <input
            type="email"
            placeholder="Your Email / Phone Number"
            class="w-full bg-white py-3.5 rounded-lg pl-14 text-sm border outline-none"
          />
          <img
            src="@/assets/icons/email.svg"
            alt=""
            class="absolute left-3 top-3"
          />
        </div>

        <div class="relative w-full">
          <input
            type="password"
            placeholder="Password"
            class="w-full bg-white py-3.5 rounded-lg pl-14 text-sm border outline-none"
          />
          <img
            src="@/assets/icons/password_vector.svg"
            alt=""
            class="absolute left-3 top-3"
          />
        </div>

        <div class="relative w-full">
          <input
            type="password"
            placeholder="Confirm Password"
            class="w-full bg-white py-3.5 rounded-lg pl-14 text-sm border outline-none"
          />
          <img
            src="@/assets/icons/password_vector.svg"
            alt=""
            class="absolute left-3 top-3"
          />
        </div>
        <div class="flex justify-end items-end">
          <nuxt-link to="/login" class="text-[#002482] font-[700] text-[14px]">
            Already have an account ?
          </nuxt-link>
        </div>
        <div class="w-full">
          <button
            @click="handleClick"
            class="bg-[#002482] text-white py-3 rounded-lg w-full"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: "authLayout",
  head() {
    return {
      title: "Signup Page",
    };
  },
  methods: {},
};
</script>
