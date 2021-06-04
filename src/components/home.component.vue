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
      <Cards :page="page" :search="search" :limit="limit"></Cards>
      <MDBContainer class="container-home">
        <button
          class="loadMore"
          v-on:click="loadMore"
          ref="loadMore"
          v-if="load"
          :load="load"
        >
          ver más...
        </button>
      </MDBContainer>
    </MDBContainer>
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
      limit: 5,
      search: "",
      load: true,
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
    // metodo que envia por props el numero de pagina y limite de resultado
    loadMore() {
      this.page += 10;
      this.limit += 5;
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
.loadMore {
  padding: 0.8rem;
  background-color: #b23cfd;
  outline: none;
  border: none;
  color: #fff;
  border-radius: 32px;
  width: 100%;
  z-index: 999;
  &:hover {
    box-shadow: 0.1rem 0.1rem 2rem rgba(0, 0, 0, 0.3);
    transition: 0.2s ease-in-out;
    color: #fafafa;
  }
}
</style>
