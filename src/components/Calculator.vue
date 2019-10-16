<template>
  <div class="calculator">
    <input 
      v-model='billInfo.totalBill'
      class='calculator-input' 
      type='text' 
      placeholder='Total bill'
    />
    <select 
      class='calculator-input' 
      name='Tip Percentage'
      v-model='billInfo.tipPercentage'
      placeholder='Tip Percentage'
    >
      <option value="" disabled selected>Tip Percentage</option>
      <option value='.05'>5%</option>
      <option value='.10'>10%</option>
      <option value='.15'>15%</option>
      <option value='.20'>20%</option>
      <option value='.25'>25%</option>
      <option value='.30'>30%</option>
      <option value='.35'>35%</option>
      <option value='.40'>40%</option>
      <option value='.50'>50%</option>
    </select>
    <input 
      class='calculator-input' 
      type='text' 
      placeholder='Party Size' 
      v-model='billInfo.partySize'
    />
    <button class='calculator-submit'>Calculate</button>
    <div class='results-container'>
      <div class='result-container'>
        <p>Tip:</p>
      </div>
      <div class='result-container'>
        <p>Total:</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      submitting: false,
      error: false,
      success: false,
      billInfo: {
        totalBill: '',
        tipPercentage: '',
        partySize: '',
      },
      tipTotal: '',
      billTotal: '',
    };
  },
  methods: {
    handleSubmit() {
      this.submitting = true
      this.clearStatus()
      if (this.invalidTotalBill || 
        this.invalidTipPercentage || 
        this.invalidPartySize) {
        this.error = true
        return
      }
      this.$emit('add:employee', this.employee)
      this.billInfo = {
        totalBill: '',
        tipPercentage: '',
        partySize: '',
      }
      this.error = false
      this.success = true
      this.submitting = false
    },
    computed: {
      invalidTotalBill() {
        return this.billInfo.totalBill === ''
      },
      invalidTipPercentage() {
        return this.billInfo.tipPercentage === ''
      },
      invalidPartySize() {
        return this.billInfo.partySize === ''
      },
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .calculator {
    background-color: lightgrey;
    width: 400px;
    height: 450px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 3px;
    box-shadow: 1px 1px 15px black;
  }
  .calculator-input {
    width: 390px;
    height: 35px;
    border-radius: 3px;
    border: 1px solid grey;
    padding-left: 10px;
  }
  .calculator-submit {
    width: 150px;
    height: 35px;
    margin-left: auto;
    border-radius: 3px;
    border: 1px solid grey;
  }
  .results-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .result-container {
    width: 98%;
    display: flex;
    /* border: 1px solid black; */
    padding-left: 10px;
    /* justify-content: space-between; */
  }
</style>
