<template>
  <v-container>
    <h1>Under construction! WARRA! BEH!</h1>
    <v-img :src="`https://pokeres.bastionbot.org/images/pokemon/${id}.png`"></v-img>
  </v-container>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      url: "https://pokeapi.co/api/v2/pokemon/",
      pokemon: []
    };
  },
  methods: {
    getPokemonInfo() {
      fetch(this.url + this.id)
        .then(res => res.json())
        .then(data => (this.pokemon = data))
        .catch(err => console.log(err));
    }
  },
  created() {
    this.getPokemonInfo();
  }
};
</script>

<style>
</style>
