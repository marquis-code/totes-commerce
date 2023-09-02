<template>
  <main
    class="lg:flex w-11/12 lg:w-10/12 mx-auto gap-x-32 my-10 space-y-10 lg:space-y-0"
  >
    <div class="lg:w-6/12 flex justify-center items-center">
      <img src="@/assets/images/single-product.jpg" class="rounded-lg">
    </div>
    <div class="lg:w-6/12">
      <div class="border-b pb-10 space-y-3">
        <h1 class="text-lg lg:text-3xl font-bold">
          {{ productDetails.productName }}
        </h1>
        <p class="text-xs lg:text-sm lg:w-10/12">
          {{ productDetails.productDescription }}
        </p>
        <div class="flex items-center gap-x-1">
          <img
            v-for="n in productDetails.stars"
            :key="n"
            src="@/assets/icons/star.svg"
            alt="ratings"
          >

          <span class="text-sm">({{ productDetails.likes }})</span>
        </div>
      </div>

      <div class="border-b py-3 space-y-1">
        <h1 class="text-lg lg:text-3xl font-bold">
          {{
            productDetails.productPrice.toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
              minimumFractionDigits: 2,
            })
          }}
        </h1>
        <p class="text-xs text-sm lg:w-10/12">
          {{ productDetails.purchaseInfo }}
        </p>
      </div>

      <div class="border-b py-7 space-y-2">
        <h1 class="text-sm lg:text-lg font-bold">
          Choose a Color
        </h1>
        <p class="text-xs font-medium">
          {{ selectedColor }}
        </p>
        <div class="flex items-center gap-x-4">
          <span
            v-for="{ name, code } in productDetails.colorVariants"
            :key="name"
            class="h-6 cursor-pointer hover:border hover:border-green-500 lg:h-10 w-6 lg:w-10 block rounded-full shadow-md"
            :class="`bg-[${code}]`"
            @click="handleSelectedColor(name)"
          />
        </div>
      </div>
      <div class="flex items-center gap-x-3 py-8">
        <div>
          <label for="Quantity" class="sr-only"> Quantity </label>

          <div class="flex items-center border border-gray-200 rounded-full">
            <button
              type="button"
              class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
              @click="decreaseItemCount"
            >
              &minus;
            </button>

            <input
              id="Quantity"
              type="number"
              :value="itemCount"
              min="0"
              class="h-10 w-16 outline-none border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
            >

            <button
              type="button"
              class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
              @click="increaseItemCount"
            >
              &plus;
            </button>
          </div>
        </div>
        <p class="text-sm">
          Only
          <span class="font-medium text-orange-500">{{ productDetails.countAvailable }} items</span>
          left don't miss it
        </p>
      </div>
      <div class="space-x-3 lg:space-x-6">
        <button
          class="bg-green-800 text-white px-10 py-2.5 text-xs lg:text-sm rounded-full"
        >
          Buy Now
        </button>
        <button
          class="border-2 border-green-700 text-green-600 text-xs lg:text-sm px-10 py-2.5 rounded-full"
          @click="addToCart"
        >
          Add to cart
        </button>
      </div>
      <div class="space-y-4 pt-10">
        <details
          class="group rounded-lg bg-gray-50 px-6 py-3 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
          >
            <h2 class="font-medium text-sm">
              Product Details
            </h2>

            <span class="relative h-5 w-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed text-gray-700 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic.
          </p>
        </details>

        <details
          class="group rounded-lg bg-gray-50 px-6 py-3 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
          >
            <h2 class="font-medium text-sm">
              Specification
            </h2>

            <span class="relative h-5 w-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed text-gray-700 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          </p>
        </details>

        <details
          class="group rounded-lg bg-gray-50 px-6 py-3 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
          >
            <h2 class="font-medium text-sm">
              How this was made
            </h2>

            <span class="relative h-5 w-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed text-gray-700 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          </p>
        </details>

        <details
          class="group rounded-lg bg-gray-50 px-6 py-3 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
          >
            <h2 class="font-medium text-sm">
              Manufacturing Information
            </h2>

            <span class="relative h-5 w-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed text-gray-700 text-xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          </p>
        </details>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      itemCount: 1,
      productDetails: {
        productName: 'Airods- Max',
        productDescription:
          'A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods',
        stars: 5,
        likes: 121,
        productPrice: 8000000,
        purchaseInfo: 'Suggested payment with 6 month special financing',
        colorVariants: [
          {
            name: 'Blue',
            code: '#FFCFB5'
          },
          {
            name: 'Red',
            code: '#FFCFB5'
          },
          {
            name: 'Green',
            code: '#96F9FF'
          },
          {
            name: 'Yellow',
            code: '#FEC8FF'
          },
          {
            name: 'Gray',
            code: '#C1C1C1'
          }
        ],
        countAvailable: 12
      },
      selectedColor: ''
    }
  },
  head () {
    return {
      title: this.productDetails.productName,
      meta: [
        { name: 'twitter:title', content: this.productDetails.productName },
        {
          name: 'twitter:description',
          content: this.productDetails.productDescription
        },
        {
          name: 'twitter:image',
          content: '@/assets/images/tote5.jpg'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ]
    }
  },
  methods: {
    addToCart () {
      this.$toastr.s('Item has been added to cart', 'Success')
      this.$router.go(-1)
    },
    increaseItemCount () {
      this.itemCount += 1
    },
    decreaseItemCount () {
      if (this.itemCount === 1) {
        return
      }
      this.itemCount -= 1
    },
    handleSelectedColor (item) {
      this.selectedColor = item
    }
  }
}
</script>
