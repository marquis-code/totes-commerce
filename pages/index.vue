<template>
  <main>
    <main>
      <HeroSection />
    <section class="bg-gray-200 card">
        <div class="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header class="text-center">
            <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
              New Collection
            </h2>

            <p class="max-w-md mx-auto mt-4 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <ul class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
              <nuxt-link to="/products" class="relative block group">
                <img
                  src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt=""
                  class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div
                  class="absolute inset-0 flex flex-col items-start justify-end p-6"
                >
                  <h3 class="text-xl font-medium text-white">
                    Casual Trainers
                  </h3>

                  <span
                    class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </span>
                </div>
              </nuxt-link>
            </li>

            <li>
              <nuxt-link to="/products" href="#" class="relative block group">
                <img
                  src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt=""
                  class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div
                  class="absolute inset-0 flex flex-col items-start justify-end p-6"
                >
                  <h3 class="text-xl font-medium text-white">Winter Jumpers</h3>

                  <span
                    class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </span>
                </div>
              </nuxt-link>
            </li>

            <li
              class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1"
            >
              <nuxt-link to="/products" class="relative block group">
                <img
                  src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                  alt=""
                  class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div
                  class="absolute inset-0 flex flex-col items-start justify-end p-6"
                >
                  <h3 class="text-xl font-medium text-white">
                    Skinny Jeans Blue
                  </h3>

                  <span
                    class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </span>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </section> 
    </main>
  </main>
</template>

<script>
import HeroSection from "@/components/HeroSection";
export default {
  scrollToTop: true,
  components: {
    HeroSection,
  },
  data() {
    return {
      showCart: false,
    };
  },
  methods: {
    toggleCart() {
      this.showCart = !this.showCart;
    },
  },
};
</script>

<style scoped></style>
