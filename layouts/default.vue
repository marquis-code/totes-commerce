<template>
  <div>
    <navigation-bar @toggleCart="handleCart"></navigation-bar>
    <div>
      <Nuxt />
    </div>
    <footer-section></footer-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showOverlay: false,
    };
  },
  methods: {
    handleClaim() {
      this.showOverlay = !this.showOverlay;
    },
    handleCart(val) {
      console.log(val);
      if (val === false) {
        this.showOverlay = true;
      }
    },
  },
};
</script>

<style scoped>
.backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
}
</style>
