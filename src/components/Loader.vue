<template>
  <div class="c-loader" v-bind:class="{ 'is-hidden': !isLoading }"></div>
</template>

<script>
  export default {
    name: "Loader",
    props: {
      isLoading: Boolean
    }
  }
</script>

<style lang="scss">
  .c-loader {
    display: block;
    width: 4.8rem;
    height: 4.8rem;
    margin: 4.8rem auto;
    border: .3rem solid transparent;
    border-top-color: #403D58;
    border-right-color: #403D58;
    border-radius: 8rem;
    animation-name: load;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    &.is-hidden {
      display: none;
    }
  }

  @keyframes load {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
