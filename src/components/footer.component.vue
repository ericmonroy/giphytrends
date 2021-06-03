<template>
  <!-- Footer -->
  <div>
    <MDBFooter :text="['center', 'lg-start']" class="footer">
      <!-- Copyright -->
      <div class="text-center p-1" style="background-color: #b23cfd">
        <p class="text-dark">
          © 2021 Copyright: <a class="text-white" href="#">ericmonroy</a>
        </p>
      </div>
      <!-- Copyright -->
    </MDBFooter>
  </div>
  <!-- Footer -->
</template>

<script>
import { MDBFooter } from "mdb-vue-ui-kit";

export default {
  name: "footer-component",
  components: {
    MDBFooter,
  },
};
</script>

<style lang="scss" scoped>
p {
  font-family: monospace, sans-serif;
  font-weight: 700;
}
</style>
