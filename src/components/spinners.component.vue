<template>
  <div class="spinners">
    <MDBSpinner grow color="primary" />
    <MDBSpinner grow color="secondary" />
    <MDBSpinner grow color="success" />
    <MDBSpinner grow color="danger" />
    <MDBSpinner grow color="warning" />
    <MDBSpinner grow color="info" />
    <MDBSpinner grow color="light" />
  </div>
</template>

<script>
import { MDBSpinner } from "mdb-vue-ui-kit";
export default {
  name: "spinners",
  components: {
    MDBSpinner,
  },
};
</script>

<style lang="scss">
.spinners {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 10rem;
}
</style>
