<template>
  <v-container fluid>
    <!-- Navbar -->
    <v-toolbar class="red darken-1">
      <v-toolbar-side-icon to="/home/">
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
      <h1 class="text-xs-center">#{{ id }} - {{ pokemonInfo.forms[0].name | capitalize }}</h1>
      <p>{{ nameFromStore }}</p>
    </v-container>

    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-card>
          <v-img :src="`https://pokeres.bastionbot.org/images/pokemon/${id}.png`"></v-img>
        </v-card>
      </v-flex>
      <v-flex md6>
        <v-expansion-panel expand>
          <v-expansion-panel-content>
            <template v-slot:header>
              <div>Abilities</div>
            </template>
            <v-card>
              <v-card-text
                v-for="(abilityName, i) in pokemonInfo.abilities"
                :key="abilityName.ability.name"
                class="grey lighten-3"
              >
                {{ i+1 }}. {{ abilityName.ability.name | capitalize }}
                <v-btn color="success" @click="abilities">Press for more info</v-btn>
                <!-- <v-card-text>{{ abilities[i].effect_entries[0].effect }}</v-card-text> -->
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>

    <!-- Footer buttons -->
    <v-layout row wrap>
      <v-bottom-nav fixed :value="true" color="white">
        <v-btn v-if="id > 1" color="blue" :to="'/pokemon/' + (Number(id) - 1)">
          <span>Previous</span>
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>

        <v-divider></v-divider>

        <v-btn v-if="id < 151" color="blue" :to="'/pokemon/' + (Number(id) + 1)">
          <span>Next</span>
          <v-icon>keyboard_arrow_right</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      url: "https://pokeapi.co/api/v2/pokemon/"
      // pokemonInfo: [],
      // abilities: []
    };
  },
  methods: {
    abilities() {
      this.$store.getters.getAbilities;
    }
    // async getPokemonInfo(id) {
    //   fetch(this.url + id)
    //     .then(res => res.json())
    //     .then(data => {
    //       this.pokemonInfo = data;
    //       this.getPokemonAbilities();
    //       // window.location.reload();
    //     })
    //     .catch(err => console.log(err));
    // },
    // getPokemonAbilities() {
    //   this.pokemonInfo.abilities.forEach(ability => {
    //     fetch(ability.ability.url)
    //       .then(res => res.json())
    //       .then(data => this.abilities.push(data))
    //       .catch(err => console.log(err));
    //   });
    // }
  },
  beforeRouteUpdate(to, from, next) {
    return this.$store.dispatch("getPokemonInfo", to.params.id).then(next);
  },
  computed: {
    nameFromStore() {
      return this.$store.getters.getName;
    },
    pokemonInfo() {
      return this.$store.getters.getOnePokemon;
    }
    // abilities() {
    //   return this.$store.getters.getAbilities;
    // }
  },
  created() {
    // this.getPokemonInfo(this.id);
    this.$store.dispatch("getPokemonInfo", this.id);
    // this.$store.dispatch("getPokemonAbilities");
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
</style>
