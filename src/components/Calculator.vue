<template>
  <div class="calculator">
    <input type='number' placeholder='Total bill'/>
    <select name='Tip Percentage'>
      <option value='5%'>5%</option>
    </select>
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
  }
  input {
    width: 300px;
    height: 25px;
    padding: 5px;
  }
</style>
