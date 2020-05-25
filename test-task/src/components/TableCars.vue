<template>
  <div>
  <table>
      <tr v-for="car in cars" :key="car.id">
        <td class="car-model">{{ car.model }}</td>
        <td>f</td>
        <td>d</td>
        <td>d</td>
        <td>d</td>
        <td>d</td>
        <td>hd</td>
        <td></td>
        <td>d</td>
        <td></td>
        <td>d</td>
        <td></td>
        <td></td>
        <td>d</td>
        <td>d</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>


      </tr>
    </table>
</div>
</template>

<script>
export default {
name: 'TableCars',
props:[ 'cars' ]
}
</script>

<style scoped>

 table{
   width: 100%;
 }
  table *{
    padding: 4px;
  }
  td{
    background:#e3ebfe;
  }

.car-model{
  position: sticky;
  left: 0;
  right: 0;
  background: #e3ebfe;
  border-left: 7px solid #0482fb;
  min-width: 10%;
}
</style>
