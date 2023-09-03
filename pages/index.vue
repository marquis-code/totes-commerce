<template>
  <main class="">
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
     <section class="bg-green-800">
            <!-- <section class="">
        <div class="relative flex overflow-x-hidden">
          <div class="py-12 animate-marquee whitespace-nowrap">
            <span class="text-4xl mx-4"><img class="h-32 inline" src="@/assets/images/mobile.png" alt="" ></span></span>
            <span class="text-4xl mx-4"><img class="h-32 inline" src="@/assets/images/mobile.png" alt="" ></span>
            <span class="text-4xl mx-4"><img class="h-32 inline" src="@/assets/images/mobile.png" alt="" ></span>
            <span class="text-4xl mx-4"><img class="h-32 inline" src="@/assets/images/mobile.png" alt="" ></span>
            <span class="text-4xl mx-4"><img class="h-32 inline" src="@/assets/images/mobile.png" alt="" ></span>
          </div>

          <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
            <span class="text-4xl mx-4"><img class="h-32 inline" src="@/assets/images/mobile.png" alt="" ></span>
            <span class="text-4xl mx-4"><img class="h-32 inline" src="@/assets/images/mobile.png" alt="" ></span>
            <span class="text-4xl mx-4"><img class="h-32 inline" src="@/assets/images/mobile.png" alt="" ></span>
            <span class="text-4xl mx-4"><img class="h-32 inline" src="@/assets/images/mobile.png" alt="" ></span>
            <span class="text-4xl mx-4"><img class="h-32 inline" src="@/assets/images/mobile.png" alt="" ></span>
          </div>
        </div>
      </section> -->
      
      <section class="">
        <div class="relative flex overflow-x-hidden">
          <div class="py-12 animate-marquee whitespace-nowrap">
            <span class="text-lg mx-4 border rounded-md px-6 bg-green-600 text-white py-3">20/7 support for customers and vendors</span>
            <span class="text-lg mx-4 border rounded-md px-6 bg-green-600 text-white py-3">Quality meal choices</span>
            <span class="text-lg mx-4 border rounded-md px-6 bg-green-600 text-white py-3">Quick and easy onboarding</span>
            <span class="text-lg mx-4 border rounded-md px-6 bg-green-600 text-white py-3">Quality meal choices</span>
            <span class="text-lg mx-4 border rounded-md px-6 bg-green-600 text-white py-3">Live updates on orders</span>
          </div>

          <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
            <span class="text-lg mx-4 border rounded-md px-6 bg-green-600 text-white py-3">20/7 support for customers and vendors</span>
            <span class="text-lg mx-4 border rounded-md px-6 bg-green-600 text-white py-3">Quality meal choices</span>
            <span class="text-lg mx-4 border rounded-md px-6 bg-green-600 text-white py-3">Quick and easy onboarding</span>
            <span class="text-lg mx-4 border rounded-md px-6 bg-green-600 text-white py-3">Quality meal choices</span>
            <span class="text-lg mx-4 border rounded-md px-6 bg-green-600 text-white py-3">Live updates on orders</span>
          </div>
        </div>
      </section>
     </section>
      <section
        class="lg:flex justify-between items-start w-11/12 mx-auto rounded-2xl border-4 border-gray-800 my-10"
      >
        <div class="lg:w-8/12 border-r-2 border-gray-800">
          <div id="map-wrap" class="h-[659px]">
            <client-only>
              <l-map :zoom="13" :center="[55.9464418, 8.1277591]">
                <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
                <l-marker :lat-lng="[55.9464418, 8.1277591]" />
              </l-map>
            </client-only>
          </div>
        </div>

        <div class="lg:w-4/12 border-l-2 border-gray-800">
          <div class="border-6 border-gray-900 space-y-6">
            <div class="text-white p-6 bg-teal-500 border-b-4 border-gray-900">
              <h1 class="text-lg font-bold">Locations</h1>
            </div>
            <div class="space-y-6 px-6 overflow-y-scroll h-[550px]">
              <div
                v-for="({ name }, index) in locations"
                :key="index"
                class="flex justify-between hover:border-green-500 items-center rounded-lg border px-6 py-4 cursor-pointer shadow-sm"
              >
                <p>{{ name }}</p>
                <div class="bg-green-50 rounded-full p-3">
                  <img src="@/assets/icons/green-cart.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </main>
</template>

<script>
import HeroSection from "@/components/HeroSection";
export default {
  components: {
    HeroSection,
  },
  scrollToTop: true,
  data() {
    return {
      showCart: false,
      locations: [
        {
          name: "Homemade By Eden Life - Lekki",
          location: {
            lat: "",
            lng: "",
          },
        },
        {
          name: "WEST GRILLE RESTAURANT",
          location: {
            lat: "",
            lng: "",
          },
        },
        {
          name: "Chefvys Fast Food",
          location: {
            lat: "",
            lng: "",
          },
        },
        {
          name: "The Burger Place- Ikeja",
          location: {
            lat: "",
            lng: "",
          },
        },
        {
          name: "Homemade By Eden Life - Lekki",
          location: {
            lat: "",
            lng: "",
          },
        },
        {
          name: "Chefvys Fast Food",
          location: {
            lat: "",
            lng: "",
          },
        },
        {
          name: "The Burger Place- Ikeja",
          location: {
            lat: "",
            lng: "",
          },
        },
        {
          name: "Homemade By Eden Life - Lekki",
          location: {
            lat: "",
            lng: "",
          },
        },
        {
          name: "Homemade By Eden Life - Lekki",
          location: {
            lat: "",
            lng: "",
          },
        },
        {
          name: "WEST GRILLE RESTAURANT",
          location: {
            lat: "",
            lng: "",
          },
        },
        {
          name: "Chefvys Fast Food",
          location: {
            lat: "",
            lng: "",
          },
        },
        {
          name: "The Burger Place- Ikeja",
          location: {
            lat: "",
            lng: "",
          },
        },
        {
          name: "Homemade By Eden Life - Lekki",
          location: {
            lat: "",
            lng: "",
          },
        },
        {
          name: "Chefvys Fast Food",
          location: {
            lat: "",
            lng: "",
          },
        },
        {
          name: "The Burger Place- Ikeja",
          location: {
            lat: "",
            lng: "",
          },
        },
        {
          name: "Homemade By Eden Life - Lekki",
          location: {
            lat: "",
            lng: "",
          },
        },
      ],
    };
  },
  head() {
    return {
      title: "Home Page",
    };
  },
  methods: {
    toggleCart() {
      this.showCart = !this.showCart;
    },
  },
};
</script>

<style scoped>
span {
  font-family: Plus Jakarta Display,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif!important;
}
</style>
