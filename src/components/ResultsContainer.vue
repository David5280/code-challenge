<template>
  <div class='results-container'>
    <div class='result-container'>
      <p>Tip:</p>
      <p v-if='results.tipAmount'>${{ results.tipAmount }}</p>
    </div>
    <div class='result-container'>
      <p>Total:</p>
      <p v-if='results.finalBillAmount'>${{ results.finalBillAmount }}</p>
    </div>
    <div class='result-container'>
      <p>Per Person:</p>
      <p v-if='results.pricePerPerson'>${{ results.pricePerPerson }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultsContainer',
  methods: {

  },
  props: {
    results: Object
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
    height: 30px;
    display: flex;
    justify-content: space-between;
  }
</style>
