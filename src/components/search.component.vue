<template>
  <div class="content-search">
    <input
      v-on:keyup.enter.prevent="search"
      class="search"
      type="text"
      name="search"
      placeholder="Buscar gif..."
    />
    <button class="searchBtn" v-on:click="search">Buscar</button>
  </div>
</template>

<script>
export default {
  name: "search",
  props: ["search"],
};
</script>

<style scoped>
.content-search {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 15px;
  top: 10px;
}

.search {
  outline: none;
  width: 290px;
  height: 50px;
  padding: 10px;
  border: 2px solid #c7c7c7;
  border-radius: 5px;
  font-family: monospace, sans-serif;
  font-weight: 700;
  font-size: 18px;
  background-color: #e7e7e7;
  color: #000;
}
.search::-webkit-input-placeholder {
  color: #ccc;
}
.search:focus {
  background-color: #e7e7e7;
}
.search:focus::-webkit-input-placeholder {
  color: #ccc;
}
.searchBtn {
  outline: none;
  padding: 10px;
  border: 2px solid #c7c7c7;
  border-radius: 5px;
  font-weight: 700;
  font-size: 18px;
  height: 50px;
}
@media (min-width: 321px) and (max-width: 480px) {
  .search {
    outline: none;
    width: 200px;
    padding: 10px;
    border: 2px solid #c7c7c7;
    border-radius: 5px;
    font-family: monospace, sans-serif;
    font-weight: 700;
    font-size: 18px;
    background-color: #e7e7e7;
    color: #000;
  }
}
</style>
