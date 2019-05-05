<template>
  <v-container fluid>
    <v-toolbar class="red darken-1">
      <v-toolbar-side-icon>
        <v-img
          src="https://i.gifer.com/origin/2a/2ad505dc5b96f55ab6993d0667d79986_w200.gif"
          lazy-src="https://i.gifer.com/origin/2a/2ad505dc5b96f55ab6993d0667d79986_w200.gif"
        ></v-img>
      </v-toolbar-side-icon>

      <v-toolbar-title class="white--text"></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field hide-details prepend-icon="search" single-line></v-text-field>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container>
      <h1 class="text-xs-center">Welcome Trainer!</h1>
    </v-container>
    <v-layout row wrap align-center justify-center fill-height>
      <v-flex
        align-self-center
        xs12
        sm3
        md2
        offset-xs1
        v-for="(pokemon, index) in pokemons"
        :key="pokemon.name"
        class="ma-3"
      >
        <v-card :to="'/pokemon/' + Number(index + 1)">
          <v-img :src="`https://pokeres.bastionbot.org/images/pokemon/${Number(index + 1)}.png`"></v-img>

          <v-card-title>
            <div>
              <p class="mb-0">#{{ index+1 }} - {{ pokemon.name | capitalize }}</p>
              <div>{{ card_text }}</div>
            </div>
          </v-card-title>

          <v-layout justify-space-around class="mb-2">
            <v-btn icon>
              <v-img
                max-width="32px"
                src="https://cloud.githubusercontent.com/assets/1094151/17297180/9f2950ca-57d2-11e6-9bd3-d3f15ae7aeb7.png"
                lazy-src="https://cloud.githubusercontent.com/assets/1094151/17297180/9f2950ca-57d2-11e6-9bd3-d3f15ae7aeb7.png"
              ></v-img>
            </v-btn>
            <v-btn icon>
              <v-icon medium>star_border</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon medium>info</v-icon>
            </v-btn>
          </v-layout>

          <!-- <v-card-actions>
            <v-btn flat color>Explore</v-btn>
          </v-card-actions>-->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import HelloWorld from "../components/HelloWorld";

export default {
  data() {
    return {
      url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151",
      // pokemons: [],
      card_text: "Texto de prueba"
    };
  },
  methods: {
    getPokemonName() {
      if (localStorage.pokemons) {
        this.pokemons = JSON.parse(localStorage.pokemons);
      } else {
        fetch(this.url)
          .then(response => response.json())
          .then(data => {
            localStorage.setItem("pokemons", JSON.stringify(data.results));
            this.pokemons = JSON.parse(localStorage.pokemons);
          });
      }
    }
  },
  created() {
    // this.getPokemonName();
  },
  computed: {
    pokemons() {
      return this.$store.getters.getAllPokemons;
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style>
.container {
  background-color: #eeeeee;
}
.v-subheader {
  display: flex;
  justify-content: center;
}
.v-card {
  /* max-width: 200px; */
}
.v-card__title {
  padding: 10px;
}
</style>
