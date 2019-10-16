<template>
  <div class='results-container'>
    <div class='result-container'>
      <p>Tip:</p>
    </div>
    <div class='result-container'>
      <p>Total:</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultsContainer',
  methods: {

  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .results-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }
  .result-container {
    width: 100%;
    display: flex;
  }
</style>
