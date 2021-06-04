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
      <h3>Favoritos</h3>
      <form class="d-flex input-group w-auto">
        <router-link to="/" exact>
          <button type="button" class="btn-fav">Home</button>
        </router-link>
      </form>
    </MDBNavbar>

    <div class="card-wrapper">
      <div v-if="loading">
        <Spinners></Spinners>
      </div>
      <div
        class="card"
        v-for="card in favoritesGiphy"
        :key="card.id"
        v-else-if="loading === false"
      >
        <img
          :src="'https://media.giphy.com/media/' + card.id + '/giphy.gif'"
          alt="dogs"
          class="card-image"
        />
        <div class="info">
          <ul class="favorites">
            <li>
              <a title="copylink" @click="copyLink(card.id)" class="cursor"
                ><MDBIcon icon="link" iconStyle="fas" size="xs" /><small
                  >Copiar link</small
                ></a
              >
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
    <Alert v-bind:message="message" v-if="alert" id="alertComponent"></Alert>
    <Footer></Footer>
  </div>
</template>

<script>
import { MDBNavbarBrand, MDBIcon, MDBNavbar } from "mdb-vue-ui-kit";
import Spinners from "../components/spinners.component";
import Footer from "../components/footer.component.vue";
import Alert from "../components/alerts.component";
import { getStorage } from "../service/index";

export default {
  components: {
    MDBIcon,
    Spinners,
    Footer,
    MDBNavbarBrand,
    MDBNavbar,
    Alert,
  },
  data() {
    return {
      favoritesGiphy: [],
      loading: true,
      message: "",
      alert: false,
    };
  },
  created() {
    this.getfavorites();
  },

  methods: {
    // metodo que copia la url de la imagen en el browser
    copyLink(id) {
      let copyLink = `https://media.giphy.com/media/${id}/giphy.gif`;
      navigator.clipboard
        .writeText(copyLink)
        .then(() => {
          this.alert = true;
          this.timerAlert("Link copiado");
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // Metodo que obtiene del store firebase  los gifs seleccionados
    getfavorites() {
      getStorage().then((data) => {
        for (let id in data) {
          let favorites = {
            id: data[id].id,
            img: data[id].img,
          };
          this.favoritesGiphy.push(favorites);
        }
        if (this.favoritesGiphy.length > 0) {
          this.loading = false;
          return this.favoritesGiphy;
        } else if (this.favoritesGiphy.length === 0) {
          this.alert = true;
          this.loading = false;
          this.timerAlert(`No has agregado ninguna tarjeta`);
        }
      });
    },
    // Metodo que efectua una animación de auto scroll
    timerAlert(msg) {
      this.message = msg;
      setTimeout(() => {
        this.alert = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-family: monospace, sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  color: #000;
}
.brand {
  font-family: monospace, sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  color: #000;
}
</style>
