<template>
  <div>
    <div class="card-wrapper">
      <div v-if="loading">
        <Spinners></Spinners>
      </div>
      <div
        class="card"
        v-for="card in cards"
        :key="card.id"
        v-else-if="loading === false"
      >
        <img
          :src="'https://media.giphy.com/media/' + card.id + '/giphy.gif'"
          alt="gifs"
          class="card-image"
        />
        <div class="info">
          <ul class="favorites">
            <li>
              <a title="Copiar Link" @click="copyLink(card.id)" class="cursor"
                ><MDBIcon icon="link" iconStyle="fas" size="xs" /><small
                  >Copiar link</small
                ></a
              >
            </li>
            <li>
              <a
                title="Agregar Favorito"
                @click="addFavorite(card.id)"
                class="cursor"
                ><MDBIcon icon="plus" iconStyle="fas" size="xs" /><small
                  >Favoritos</small
                ></a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Alert v-bind:message="message" v-if="alert" id="alertComponent"></Alert>
  </div>
</template>

<script>
import { getAll, getSearch, getStorage, postStorage } from "../service/index";
import { MDBIcon } from "mdb-vue-ui-kit";
import Spinners from "../components/spinners.component";
import Alert from "../components/alerts.component";

export default {
  name: "cards-component",
  props: ["page", "search"],
  data() {
    return {
      cards: "",
      favorites: [],
      loading: "",
      limit: 5,
      offset: this.page,
      message: "",
      alert: false,
    };
  },
  components: {
    MDBIcon,
    Spinners,
    Alert,
  },
  created() {
    this.getCards();
  },
  watch: {
    page() {
      console.log({
        offset: this.page,
      });
    },
    search() {
      this.searchCards({
        offset: this.page,
        query: this.search,
      });
    },
  },
  methods: {
    addFavorite(id) {
      let add = `https://media.giphy.com/media/${id}/giphy.gif`;
      let data = { id: id, img: add };
      getStorage().then((response) => {
        for (let id in response) {
          let favorite = {
            id: response[id].id,
            img: response[id].img,
          };
          this.favorites.push(favorite);
        }
        if (this.favorites.length > 0) {
          // mapeamos el array para extraer solo el id
          let items = this.favorites;
          let a = items.map(function (items) {
            // devolvemos el array de id´s
            return items.id;
          });
          // biuscamos si coincide con el id de la card enviada
          let find = a.includes(id);
          // validamos si existe enviamos alerta
          if (find == true) {
            this.alert = true;
            this.timerAlert(`La tarjeta ya existe en favoritos`);
          } else if (find == false) {
            // si no existe añadimos el item al item de la db
            postStorage(data);
          }
        } else if (this.favorites.length === 0) {
          postStorage(data);
        }
      });
    },

    copyLink(id) {
      let copyLink = `https://media.giphy.com/media/${id}/giphy.gif`;
      navigator.clipboard
        .writeText(copyLink)
        .then(() => {
          this.alert = true;
          this.timerAlert(`Link copiado: ${copyLink}`);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCards() {
      this.loading = true;
      getAll()
        .then((data) => {
          this.cards = data;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    searchCards(data) {
      this.loading = true;
      getSearch(data.query)
        .then((data) => {
          this.cards = data;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    timerAlert(msg) {
      this.message = msg;
      setTimeout(() => {
        this.alert = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss">
.fadeOut {
  opacity: 0;
}
.fadeIn {
  opacity: 9;
}
</style>
