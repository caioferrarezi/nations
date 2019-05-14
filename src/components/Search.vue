<template>
  <section class="c-search">
    <h1 class="c-search__title">{{ title }}</h1>
    <form v-on:submit.prevent="search">
      <input type="text"
        class="c-search__input"
        v-bind:placeholder="placeholder"
        v-model="searchTerm">
    </form>
  </section>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "Search",
    data() {
      return {
        searchTerm: '',
      }
    },
    props: {
      title: String,
      placeholder: String
    },
    mounted() {
      this.search()
    },
    methods: {
      search() {

        const searchTerm = this.searchTerm.toLowerCase()
        const url = searchTerm ?
          `https://restcountries.eu/rest/v2/name/${searchTerm}` :
          `https://restcountries.eu/rest/v2/all`

        this.$emit('searchStart')

        axios.get(url)
          .then(response => {
            this.$emit('searchEnd', { countries: response.data })
          })
          .catch(error => {
            this.$emit('searchError', { ...error.response, searchTerm: this.searchTerm })
          })
      }
    }
  };
</script>

<style lang="scss">
  .c-search {
    margin: auto;
    text-align: center;
    padding: 15rem 0;
    background-color: #403D58;

    &__title {
      color: #F2EFEA;
      font-size: 4rem;
      margin-bottom: 2.4rem;
    }

    &__input {
      display: inline-block;
      width: 76.8rem;
      max-width: 100%;
      height: 6rem;
      padding: 1.6rem 2.4rem;
      color: inherit;
      text-align: center;
      font-family: inherit;
      font-size: 2.4rem;
      border: 0.1rem solid #e6e6e6;
      border-radius: 0.3rem;
      appearance: none;
      outline: none;
    }
  }
</style>
