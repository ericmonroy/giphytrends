<template>
  <div class="alerts">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "alert-component",
  props: ["message"],
};
</script>

<style lang="scss" scoped>
.alerts {
  position: fixed;
  right: 0;
  top: 20%;
  width: 40%;
  height: auto;
  z-index: 999;
  background-color: #b23cfd;
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
  box-shadow: 0.2rem 0.4rem 0.9rem rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 12px 6px 12px;
  p {
    font-family: monospace, sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: rgb(235, 235, 235);
    text-align: center;
  }
}
</style>
