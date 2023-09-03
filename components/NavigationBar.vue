<template>
  <main class="relative">
    <div class="sticky top-0 w-full z-50">
      <h1 class="text-center bg-black text-white py-5 text-xs">
        ALL OF OUR PRODUCTS ARE MADE FROM 100% CERTIFIED ORGANIC FABRICS - SHOP
        NOW 🥳
      </h1>
      <header class="bg-gray-50">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div class="flex items-center justify-end gap-4">
            <div class="flex items-center gap-4">
              <div class="relative">
                <label class="sr-only" for="search"> Search </label>

                <input
                  id="search"
                  class="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56 border outline-none"
                  type="search"
                  placeholder="Search website..."
                />

                <button
                  type="button"
                  class="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                >
                  <span class="sr-only">Search</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>

              <div
                class="block shrink-0 cursor-pointer rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                @click="toggleCart"
              >
                <span class="sr-only">Notifications</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0"
                  />
                </svg>
              </div>
            </div>

            <span
              aria-hidden="true"
              class="block h-6 w-px rounded-full bg-gray-200"
            />

            <div class="hidden lg:flex items-center gap-x-3">
              <nuxt-link
                to="/login"
                class="text-[#23A6F0] font-[700] text-[15px] leading-[24px] space-x-2"
              >
                <img
                  src="@/assets/icons/green_user.svg"
                  alt=""
                  class="inline"
                /><span>Login</span>
              </nuxt-link>
              <span class="text-[#23A6F0] font-[700] text-[15px] leading-[24px]"
                >/</span
              >
              <nuxt-link
                to="/signup"
                class="text-[#23A6F0] font-[700] text-[15px] leading-[24px]"
              >
                Register
              </nuxt-link>
            </div>
          </div>

          <div class="mt-8">
            <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
              Welcome to Tote on Steroids!
            </h1>

            <p class="mt-1.5 text-sm text-gray-500">
              Your website has seen a 52% increase in traffic in the last month.
              Keep it up! 🚀
            </p>
          </div>
        </div>
      </header>
    </div>

    <div v-scroll-stop>
      <section
        v-if="showCart"
        class="h-screen w-full lg:w-4/12 absolute right-0 top-0 bg-white shadow-sm z-50 overflow-y-hidden"
      >
        <div class="flex justify-between items-center border-b py-4 px-4">
          <p>Cart</p>
          <div class="flex items-center gap-x-3">
            <p class="font-medium text-green-500">Saved Items</p>
            <img
              src="@/assets/icons/close.svg"
              class="rounded-full bg-white shadow-md p-2 cursor-pointer"
              @click="showCart = false"
            />
          </div>
        </div>
        <div
          v-if="!cartItems.length"
          class="h-full flex justify-center items-center"
        >
          <div class="flex justify-center items-center flex-col gap-y-3">
            <img class="" src="@/assets/icons/empty-cart.svg" />
            <h1 class="font-medium text-lg">Your Cart is Empty</h1>
            <p class="text-gray-600">Add items to get started</p>
          </div>
        </div>
        <div v-else>
          <section class="h-[300px]">
            <div
              class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8"
            >
              <div class="mx-auto max-w-3xl">
                <header class="text-center">
                  <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">
                    Your Cart
                  </h1>
                </header>

                <div class="mt-8">
                  <ul class="space-y-4">
                    <li
                      v-for="(item, index) in cartItems"
                      :key="index"
                      class="flex items-center gap-4"
                    >
                      <img
                        :src="item.imgUrl"
                        alt=""
                        class="h-16 w-16 rounded object-cover"
                      />

                      <div>
                        <h3 class="text-sm text-gray-900">
                          {{ item.name }}
                        </h3>

                        <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                          <div>
                            <dt class="inline">Size:</dt>
                            <dd class="inline">
                              {{ item.size }}
                            </dd>
                          </div>

                          <div>
                            <dt class="inline">Color:</dt>
                            <dd class="inline">
                              {{ item.color }}
                            </dd>
                          </div>

                          <div>
                            <dt class="inline">Price:</dt>
                            <dd class="inline">
                              {{
                                item.price.toLocaleString("en-NG", {
                                  style: "currency",
                                  currency: "NGN",
                                  minimumFractionDigits: 0,
                                })
                              }}
                            </dd>
                          </div>
                        </dl>
                      </div>

                      <div class="flex flex-1 items-center justify-end gap-2">
                        <form>
                          <label for="Line1Qty" class="sr-only">
                            Quantity
                          </label>

                          <input
                            id="Line1Qty"
                            type="number"
                            min="1"
                            :value="item.count"
                            class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                          />
                        </form>

                        <button
                          class="text-gray-600 transition hover:text-red-600"
                          @click="deleteItem(item)"
                        >
                          <span class="sr-only">Remove item</span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-4 w-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </li>
                  </ul>

                  <div
                    class="mt-8 flex justify-end border-t border-gray-100 pt-8"
                  >
                    <div class="w-screen max-w-lg space-y-4">
                      <dl class="space-y-0.5 text-sm text-gray-700">
                        <div class="flex justify-between">
                          <dt>Subtotal</dt>
                          <dd>
                            {{ totalPrice }}
                          </dd>
                        </div>

                        <div class="flex justify-between">
                          <dt>VAT</dt>
                          <dd>₦ 0.00</dd>
                        </div>

                        <div class="flex justify-between">
                          <dt>Discount</dt>
                          <dd>-₦ 0.00</dd>
                        </div>

                        <div
                          class="flex justify-between !text-base font-medium"
                        >
                          <dt>Total</dt>
                          <dd>
                            {{ totalPrice }}
                          </dd>
                        </div>
                      </dl>

                      <div class="flex justify-end">
                        <span
                          class="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="-ms-1 me-1.5 h-4 w-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                            />
                          </svg>

                          <p class="whitespace-nowrap text-xs">
                            0 Discounts Applied
                          </p>
                        </span>
                      </div>

                      <div class="flex justify-end">
                        <button
                          class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                          @click="initializePaystack"
                        >
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import VueScrollStop from "vue-scroll-stop";
export default {
  components: {
    VueScrollStop,
  },
  scrollToTop: true,
  data() {
    return {
      showCart: false,
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems
        .reduce((acc, item) => acc + item?.price * item?.count, 0)
        .toLocaleString("en-NG", {
          style: "currency",
          currency: "NGN",
          minimumFractionDigits: 0,
        });
    },
    totalPriceWithoutNairaSign() {
      return this.cartItems.reduce(
        (acc, item) => acc + item?.price * item?.count,
        0
      );
    },
    cartItems() {
      console.log(this.$store?.state?.cart?.cartItems.length, "ddd");
      return this.$store?.state?.cart?.cartItems;
    },
  },
  methods: {
    toggleCart() {
      this.$emit("toggleCart", this.showCart);
      this.showCart = !this.showCart;
    },
    deleteItem(item) {
      console.log(item, "delete item here");
      this.$store.dispatch("cart/DeleteItemFromCart", { item });
      // const result = this.cartItems.filter((item, index) => {
      //   return index !== itemIndex
      // })
      // this.cartItems = result
    },
    initializePaystack() {
      // access the paystack key from env file
      // const paystack_key = process.env.PAYSTACK_KEY
      this.$paystack({
        key: "pk_live_407a008b8d69340ee3c305ea012631380b153f19", // Replace with your public key.
        email: "abahmarquis@mail.com",
        // amount value is expected in kobo (charge * 100)
        amount: this.totalPriceWithoutNairaSign,
        ref: "" + Math.floor(Math.random() * 100000000000000 + 1),
        currency: "NGN",
        callback: (res) => {
          this.$toastr.s(
            "You have successfully completed checkout.",
            "Checkout completed."
          );
        },
        onClose: () => {
          alert("window cosed");
        },
      });
    },
  },
};
</script>
