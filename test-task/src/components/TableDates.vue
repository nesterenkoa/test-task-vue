<template>
  <div class="flex">
    <table v-for="(days, month) in months" class="table-date" :key="month">
      <tr>
        <th class="month">{{ month }}</th>
        <th v-for="day in days" :key="day">{{ day }}</th>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "TableDates",
    props: [ 'months', 'days' ]
  }
</script>

<style scoped>
.flex{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
  .table-date{
    margin-right: 30px;
  }

.table-date th{
  padding: 4px;
  font-weight: normal;
}
  .month{
    background: orange;
  }
</style>
