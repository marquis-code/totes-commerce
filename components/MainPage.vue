<template></template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      form: {
        username: "",
        email: "",
      },
    };
  },
  methods: {
    reserve() {
      const payload = {
        handle: this.form.username,
        email: this.form.email,
      };
      this.$axios
        .post("https://api.develop.storipod.app/users/reservations", payload)
        .then((res) => {})
        .catch(() => {})
        .finally(() => []);
    },
  },
  computed: {
    firstBatch() {
      return this.starterOffer.slice(0, 6);
    },
    secondBatch() {
      return this.starterOffer.slice(6);
    },
  },
};
</script>

<style scoped>
.card {
  height: 100vh;
  width: 100vw;
  position: sticky;
  top: 0;
}

</style>
