<template>
  <div id="nations">
    <Search v-bind:title="title"
      placeholder="Search for a country"
      v-on:searchStart="handleSearchStart"
      v-on:searchEnd="handleSearchEnd"
      v-on:searchError="handleSearchError" />

    <Loader v-bind:is-loading="isLoading" />

    <Country
      v-for="country in countries"
      v-if="!error && !isLoading"
      v-bind:country="country"
      v-bind:key="country.numericCode" />

    <template v-if="error && !isLoading">
      <div class="c-warn">
        {{ error }}
      </div>
    </template>
  </div>
</template>

<script>
  import Search from "./components/Search.vue";
  import Country from "./components/Country.vue";
  import Loader from "./components/Loader.vue";

  export default {
    name: "Nations",
    data() {
      return {
        title: "Welcome to Nations",
        countries: [],
        error: '',
        isLoading: false
      }
    },
    methods: {
      handleSearchStart() {
        this.isLoading = true
        this.error = ''
      },
      handleSearchEnd(event) {
        this.countries = [...event.countries]
        this.isLoading = false
      },
      handleSearchError(error) {
        this.countries = []
        this.error =
          `${error.status}: Sorry, we couldn't find any country which contains "${error.searchTerm}" ):`
        this.isLoading = false

        console.log(this.error)
      }
    },
    components: {
      Search,
      Country,
      Loader
    }
  };
</script>

<style lang="scss">
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    color: #403D58;
  }

  .c-warn {
    font-size: 2.4rem;
    text-align: center;
    max-width: 99.2rem;
    margin: 4.8rem auto;
    padding: 2.4rem;
  }
</style>
