<template>
  <div>
    <MDBNavbar
      light
      bg="light"
      container
      class="d-flex justify-content-between header"
    >
      <router-link to="/" exact class="d-flex">
        <MDBNavbarBrand href="#" class="brand">Giphy Trends</MDBNavbarBrand>
      </router-link>

      <Search :search="searchGifs"></Search>

      <form class="d-flex input-group w-auto">
        <router-link to="/favoritos/">
          <button type="button" class="btn-fav">
            <MDBIcon icon="heart" iconStyle="fas" /> Favoritos
          </button>
        </router-link>
      </form>
    </MDBNavbar>
    <MDBContainer fluid class="container-home">
      <Cards :page="page" :search="search"></Cards>
    </MDBContainer>
    <!-- <button class="loadMore" v-on:click="loadMore" ref="loadMore">
      Load More...
    </button> -->
    <Footer></Footer>
  </div>
</template>

<script>
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBIcon,
} from "mdb-vue-ui-kit";
import Search from "../components/search.component";
import Footer from "../components/footer.component";
import Cards from "../components/cards.component";
export default {
  name: "home-component",
  data() {
    return {
      page: 0,
      search: "",
    };
  },
  components: {
    Footer,
    MDBContainer,
    Cards,
    Search,
    MDBNavbar,
    MDBNavbarBrand,
    MDBIcon,
  },
  methods: {
    searchGifs() {
      let search = document.querySelector(".search").value;
      this.search = search.trim();
    },
    loadMore() {
      this.page += 25;
    },
  },
};
</script>

<style lang="scss" scoped>
.brand {
  font-family: monospace, sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  color: #000;
}
.header {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  margin-bottom: 12px;
}
a {
  font-family: monospace, sans-serif;
  font-weight: 700;
}
.container-home {
  margin-bottom: 10rem;
  margin-top: 1rem;
}
</style>
