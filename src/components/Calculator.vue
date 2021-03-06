<template>
  <div class='calculator'>
    <form @submit.prevent="handleSubmit">
      <cleave 
        v-model="billInfo.totalBill" 
        placeholder='Bill Amount' 
        class='calculator-input'
        id='bill-amount-input'
        name="card"
        :class="{ 'has-error': submitting && invalidTotalBill }"
        :options="options" 
      ></cleave>
      <select 
        class='calculator-input' 
        id='tip-amount-input'
        :class="{ 'has-error': submitting && invalidTipPercentage }"
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
        <option value='.45'>45%</option>
        <option value='.50'>50%</option>
      </select>
      <cleave 
        class='calculator-input' 
        type='text' 
        placeholder='Party Size (Optional)' 
        v-model='billInfo.partySize'
        :options="options" 
      />
      <div class='error-container'>
        <p 
          v-if="error && submitting" 
          class="error-message"
        >
          Please fill out all required fields
        </p>
      </div>
      <button class='calculator-submit'>Calculate</button>
    </form>
  </div>
</template>

<script>
import Cleave from 'vue-cleave-component';

export default {
  name: 'Calculator',
  data() {
    return {
      submitting: false,
      error: false,
      success: false,
      tipTotal: '',
      billTotal: '',
      billInfo: {
        totalBill: '',
        tipPercentage: '',
        partySize: '',
      },
      options: {
        numeral: true,
      }
    };
  },
  components: {
    Cleave
  },
  methods: {
    handleSubmit() {
      this.submitting = true
      this.clearStatus()
      if (this.invalidTotalBill || 
        this.invalidTipPercentage) {
        this.error = true
        return
      }
      this.$emit('calculate:tip', this.billInfo)
      this.billInfo = {
        totalBill: '',
        tipPercentage: '',
        partySize: '',
      }
      this.error = false
      this.success = true
      this.submitting = false
    },
    clearStatus() {
      this.success = false
      this.error = false
    },
  },
    computed: {
    invalidTotalBill() {
      return this.billInfo.totalBill === ''
    },
    invalidTipPercentage() {
      return this.billInfo.tipPercentage === ''
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  form {
    display: flex;
    flex-direction: column;
    height: 250px;
    justify-content: space-evenly;
  }
  .calculator-input {
    border-radius: 3px;
    border: 1px solid grey;
    height: 35px;
    padding-left: 10px;
    width: 100%;
  }
  select {
    cursor: pointer;
  }
  .calculator-submit {
    border-radius: 3px;
    border: 1px solid grey;
    height: 35px;
    margin-left: auto;
    width: 150px;
  }
  .error-container {
    height: 20px;
  }
  .error-message {
    margin: auto;
  }
  .has-error {
    border: 1.5px solid red;
  }
</style>
