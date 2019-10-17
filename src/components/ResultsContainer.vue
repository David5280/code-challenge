<template>
  <div class='results-container'>
    <div class='result-container'>
      <p>Tip:</p>
      <p class='tip-display' v-if='results.tipAmount'>
        ${{ results.tipAmount | numeral('0,0.00') }}
      </p>
    </div>
    <div class='result-container'>
      <p>Total:</p>
      <p class='bill-display' v-if='results.finalBillAmount'>
        ${{ results.finalBillAmount | numeral('0,0.00')  }}
      </p>
    </div>
    <div 
      class='result-container per-person-display' 
      v-if='results.pricePerPerson'
    >
      <p>Per Person:</p>
      <p>${{ results.pricePerPerson | numeral('0,0.00')  }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultsContainer',
  props: {
    results: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .results-container {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .result-container {
    display: flex;
    height: 30px;
    justify-content: space-between;
    width: 100%;
  }
</style>
