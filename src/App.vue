<template>
  <v-app>
    <v-container fill-height grid-list-md text-xs-center>
      <v-layout row wrap align-center justify-center>
        <v-flex class="logo" xs8 offset-xs-2>
          <v-img
            max-width="200px"
            src="https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png"
            lazy-src="https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png"
          >
            <template v-slot:placeholder>
              <v-layout fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="blue"></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
        </v-flex>
        <v-flex class="pokeball" xs8 offset-xs-2>
          <v-img
            max-width="200px"
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
            lazy-src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
          >
            <template v-slot:placeholder>
              <v-layout fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="blue"></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {},
  data() {
    return {
      //
    };
  }
};
</script>

<style>
.container.grid-list-md.text-xs-center {
  display: flex;
  align-items: center;
}
.pokeball {
  display: flex;
  justify-content: center;
  margin-top: -15rem;
}
.pokeball {
  animation: shake infinite 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
.logo {
  display: flex;
  justify-content: center;
}
</style>
