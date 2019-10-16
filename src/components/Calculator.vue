<template>
  <div class="calculator">
    <input 
      class='calculator-input' 
      type='number' 
      placeholder='Total bill'
    />
    <select class='calculator-input' name='Tip Percentage'>
      <option value='5%'>5%</option>
      <option value='10%'>10%</option>
      <option value='15%'>15%</option>
      <option value='20%'>20%</option>
      <option value='25%'>25%</option>
      <option value='30%'>30%</option>
      <option value='35%'>35%</option>
      <option value='40%'>40%</option>
      <option value='50%'>50%</option>
    </select>
    <input class='calculator-input' type='text' placeholder='Party Size' />
    <button class='calculator-submit'>Calculate</button>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
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
    height: 500px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .calculator-input {
    width: 400px;
    height: 35px;
    border-radius: 5px;
  }
  .calculator-submit {
    width: 150px;
    height: 35px;
    margin-left: auto;
    border-radius: 5px;
  }
</style>
