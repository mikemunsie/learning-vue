const app = new Vue({
  el: '#app',
  data: {
    isVisible: false
  },
  methods: {
    toggleThat() {
      this.isVisible = !this.isVisible;
    }
  }
});

function test() {
  console.log(this);
}