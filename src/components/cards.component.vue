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
  props: ["page", "search", "limit", "load"],
  data() {
    return {
      cards: "",
      favorites: [],
      loading: "",
      message: "",
      alert: false,
      offset: this.page,
    };
  },
  components: {
    MDBIcon,
    Spinners,
    Alert,
  },
  created() {
    this.getCards({
      limit: this.limit,
      offset: this.offset,
      load: this.load,
    });
  },
  watch: {
    page() {
      this.getCards({
        offset: this.page,
        limit: this.limit,
      });
      this.scrollTo();
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
      // consultamos si existen imagenes en el store
      getStorage().then((response) => {
        for (let id in response) {
          let favorite = {
            id: response[id].id,
            img: response[id].img,
          };
          // sea el resultado lo agregamos en un array
          this.favorites.push(favorite);
        }
        // validamos si contiene algo
        // si el array contiene objetos
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
          // si el array no contiene objetos
        } else if (this.favorites.length === 0) {
          // agregamos uno
          postStorage(data);
        }
      });
    },
    // metodo que copia la url de la imagen en el browser
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

    // Metodo que obtiene un numero de gifs por la query Dogs
    getCards(obj) {
      this.loading = true;
      getAll(obj)
        .then((data) => {
          this.cards = data;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // Metodo que obtiene un numero de gifs por la query enviada
    searchCards(obj) {
      this.loading = true;
      getSearch(obj)
        .then((data) => {
          this.cards = data;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // Metodo que muestra una alerta con el mensaje recibido
    timerAlert(msg) {
      this.message = msg;
      setTimeout(() => {
        this.alert = false;
      }, 2000);
    },

    // Metodo que efectua una animación de auto scroll
    scrollTo() {
      let i = 100;
      let int = setInterval(function () {
        window.scrollTo(0, i);
        i += 100;
        if (i >= 200) clearInterval(int);
      }, 90);
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
