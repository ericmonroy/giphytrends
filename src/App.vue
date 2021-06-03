<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="scss">
@import "~@/../mdb/scss/index.free.scss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
}
.cursor {
  cursor: pointer;
}
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  p {
    top: 6px;
    position: relative;
  }
}
</style>
