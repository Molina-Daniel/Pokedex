<template>
  <v-container fluid>
    <v-toolbar dark color="primary">
      <v-toolbar-side-icon></v-toolbar-side-icon>

      <v-toolbar-title class="white--text">Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>refresh</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
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

          <v-card-title primary-title>
            <div>
              <p class="mb-0">#{{ index+1 }} - {{ pokemon.name | capitalize }}</p>
              <div>{{ card_text }}</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
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
      pokemons: [],
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
    this.getPokemonName();
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
.v-subheader {
  display: flex;
  justify-content: center;
}
.v-card {
  /* max-width: 200px; */
}
</style>
