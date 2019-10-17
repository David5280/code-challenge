<template>
  <div id="app">
    <h1>Tip Calculator</h1>
    <div class='container'>
      <Calculator @calculate:tip='calculateTip'/>
      <ResultsContainer :results='results'/>
    </div>
  </div>
</template>

<script>
import Calculator from './components/Calculator.vue';
import ResultsContainer from './components/ResultsContainer.vue';

export default {
  name: 'app',
  methods: {
    calculateTip(billInfo) {
      const tipAmount = billInfo.totalBill * billInfo.tipPercentage;
      const finalBillAmount = 
        parseInt(billInfo.totalBill) + 
        parseInt(tipAmount);
      const pricePerPerson = finalBillAmount / billInfo.partySize;
      this.results.tipAmount = tipAmount.toFixed(2);
      this.results.finalBillAmount = finalBillAmount.toFixed(2);
      this.results.pricePerPerson = pricePerPerson.toFixed(2);
    }
  },
  data() {
    return {
      results: {
        tipAmount: '',
        finalBillAmount: '',
        pricePerPerson: '',
      }
    }
  },
  components: {
    Calculator,
    ResultsContainer
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.container {
  background-color: lightgrey;
  width: 400px;
  height: 450px;
  box-shadow: 1px 1px 15px black;
  border-radius: 3px;
}
</style>
