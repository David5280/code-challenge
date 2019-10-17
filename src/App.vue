<template>
  <div id="app" :class='this.theme'>
    <div class='title'>
      <h1>Tip Calculator</h1>
    </div>
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
        if (billInfo.partySize) {
        const pricePerPerson = finalBillAmount / billInfo.partySize;
        this.results.pricePerPerson = pricePerPerson.toFixed(2);
        }
      this.results.tipAmount = tipAmount.toFixed(2);
      this.results.finalBillAmount = finalBillAmount.toFixed(2);
      this.determineTheme(billInfo.tipPercentage);
    },
    determineTheme(tipPercentage) {
      if (tipPercentage <= .15) {
        this.theme = 'theme1'
      } else if (tipPercentage > .15 && tipPercentage <= .30) {
        this.theme = 'theme2'
      } else if (tipPercentage > .30) {
        this.theme = 'theme3'
      }
    }
  },
  data() {
    return {
      results: {
        tipAmount: '',
        finalBillAmount: '',
        pricePerPerson: '',
      },
      theme: ''
    }
  },
  components: {
    Calculator,
    ResultsContainer
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
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
  background-color: rgb(211, 211, 211);
  align-items: center;
}
.title {
  background-color: rgba(211, 211, 211, 0.8);
  margin: 50px 0px;
  height: fit-content;
}

.container {
  background-color: rgba(240, 236, 236, 0.8);
  min-width: 300px;
  max-width: 500px;
  width: 25vw;
  height: 375px;
  box-shadow: 1px 1px 15px black;
  border-radius: 3px;
  border: 1px solid black;
  padding: 20px;
}

.theme1 {
  background-color: red;
  background-image: url('./assets/images/no-money.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.theme2 {
  background-image: url('./assets/images/good-tip.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.theme3 {
  background-image: url('./assets/images/big-baller.jpg');
  background-size: cover;
  background-position: center;
}


</style>
