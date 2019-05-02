<template>
  <v-container>
    <v-card v-for="(pokemon, index) in pokemons" :key="pokemon.name" class="ma-3">
      <v-list>
        <template>
          <v-subheader :key="pokemon.name">
            <a :href="pokemon.url">{{ index+1 }}. {{ pokemon.name }}</a>
          </v-subheader>
        </template>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  data() {
    return {
      url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151",
      pokemons: []
    };
  },
  methods: {
    getData() {
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
    this.getData();
  }
};
</script>

<style>
.v-subheader {
  display: flex;
  justify-content: center;
}
.v-card {
  max-width: 500px;
}
.v-container {
  display: flex;
  justify-content: center;
}
</style>
