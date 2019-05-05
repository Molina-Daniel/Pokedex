import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "Daniel",
    url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151",
    urlPokemon: "https://pokeapi.co/api/v2/pokemon/",
    pokemons: [],
    pokemonInfo: [],
    abilities: []
  },
  mutations: {
    setPokemons(state, payload) {
      state.pokemons = payload;
    },
    setPokemon(state, payload) {
      state.pokemonInfo = payload;
    },
    setAbilities(state, payload) {
      state.abilities = payload;
    }
  },
  actions: {
    getPokemons(context) {
      fetch(context.state.url)
        .then(response => response.json())
        .then(data => {
          context.commit("setPokemons", data.results)
        });
    },
    getPokemonInfo(context, id) {
      fetch(context.state.urlPokemon + id)
        .then(res => res.json())
        .then(data => {
          context.commit("setPokemon", data)
          context.dispatch("getPokemonAbilities")
        })
        .catch(err => console.log(err));
    },
    getPokemonAbilities(context) {
      let abilitiesArr = [];
      context.state.pokemonInfo.abilities.forEach(ability => {
        fetch(ability.ability.url)
          .then(res => res.json())
          .then(data => {
            abilitiesArr.push(data);
          })
          .catch(err => console.log(err));
      });
      context.commit("setAbilities", abilitiesArr)
    }
  },
  getters: {
    getName(state) {
      return state.name;
    },
    getAllPokemons(state) {
      return state.pokemons;
    },
    getOnePokemon(state) {
      return state.pokemonInfo;
    },
    getAbilities(state) {
      console.log(state.abilities);
      return state.abilities;
    }
  }
});
