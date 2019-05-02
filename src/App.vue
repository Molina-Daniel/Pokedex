<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Landing from "./views/Landing";

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
</style>
