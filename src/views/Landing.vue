<template>
  <v-container fill-height grid-list-md text-xs-center>
    <v-layout row wrap align-center justify-center>
      <v-flex class="logo" xs8 offset-xs-2>
        <v-img
          max-width="300px"
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
        <!-- <router-link to="/about"> -->
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
        <!-- </router-link> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>
