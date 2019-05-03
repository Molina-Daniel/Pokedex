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

    <v-layout row wrap align-center justify-center fill-height>
      <v-flex xs12 md6 offset-xs1>
        <v-card flat tile class="d-flex">
          <v-img class="#D84315" :src="`https://pokeres.bastionbot.org/images/pokemon/${id}.png`">
            <template v-slot:placeholder>
              <v-layout fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
        </v-card>
      </v-flex>
      <v-container>
        <p>asdfsajdfjksdhfkjahdsfñ</p>
      </v-container>
    </v-layout>
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
