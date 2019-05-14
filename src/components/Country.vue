<template>
  <section class="c-country">
    <div class="c-country__flag">
      <img class="c-country__flag__image" v-bind:src="country.flag" v-bind:alt="country.name">
    </div>
    <div class="c-country__content">
      <h2 class="c-country__title">{{ country.name }}</h2>
      <p class="c-country__subtitle" v-if="localNames">{{ localNames }}</p>

      <ul class="c-country__info">
        <li class="c-country__info__item">Capital: {{ country.capital || '-' }}</li>
        <li class="c-country__info__item">Region: {{ country.subregion || '-' }}</li>
        <li class="c-country__info__item">Languages: {{ languages || '-' }}</li>
        <li class="c-country__info__item">Currency: {{ currencies || '-' }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Country",
    props: {
      country: Object
    },
    computed: {
      currencies() {
        return this.country.currencies.map(currency => {
          return `${currency.name} (${currency.symbol ? currency.symbol : '$'})`
        }).join(', ')
      },
      localNames() {
        return this.languagesCodes.map(languageCode => {
          return this.country.translations[languageCode]
        }).filter(translation => translation && translation != this.country.name).join(', ')
      },
      languages() {
        return this.country.languages.map(language => language.name).join(', ')
      },
      languagesCodes() {
        return this.country.languages.map(language => language["iso639_1"])
      }
    }
  }
</script>

<style lang="scss">
  .c-country {
    background-color: #403D58;
    color: #F2EFEA;
    display: flex;
    align-items: center;
    width: 99.2rem;
    max-width: 100%;
    padding: 1.6rem;
    margin: 2.4rem auto;
    border-radius: .3rem;

    &__flag,
    &__content {
      flex: 0 0 auto;
    }

    &__flag {
      width: 15rem;
      margin-right: 2.4rem;

      &__image {
        display: block;
        max-width: 100%;
        border-radius: .3rem;
      }
    }

    &__title {
      font-size: 2.4rem;
      margin-bottom: 1.6rem;
    }

    &__subtitle {
      font-size: 1.6rem;
      margin: -1.6rem 0 1.6rem;
    }

    &__info {
      list-style: none;

      &__item {
        margin: .8rem 0;
      }
    }

    &:last-child {
      margin-bottom: 15rem;
    }
  }
</style>
