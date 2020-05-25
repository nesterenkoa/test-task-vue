<template>
  <div id="app">
      <!--<ListCars :cars="cars"> </ListCars>-->
      <div class="wrapper">
        <div class="flex">
          <date-picker
              v-model="range"
              type="date"
              range
              format="YYYY-MM-DD"
              class="date-picker" />
          <SearchCars> </SearchCars>
        </div>
        <TableCars :cars="cars"> </TableCars>
        <p>{{days.length}} days selected</p>
      </div>

    <div class="wrapper">
      <TableTable />
      <TableDates :days="days" :months="months"> </TableDates>
    </div>
  </div>
</template>

<script>
  import TableCars from './components/TableCars.vue';
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
  import SearchCars from './components/SearchCars.vue'
  import cars from './data/cars.js';
  import TableDates from './components/TableDates.vue'
  import TableTable from './components/TabsTable.vue'

  import Moment from 'moment';
  import { extendMoment } from 'moment-range';

  const moment = extendMoment(Moment);

  export default {
    name: 'App',
    components: {
      // ListCars,
      TableCars,
      DatePicker,
      SearchCars,
      TableDates,
      TableTable
    },
    data() {
      return {
        range: [null, null],
        cars,
        days: [],
        months: {}
      }
    },
    watch: {
      months: (currentMonths) => console.log({ currentMonths }),
      range: function (current) {
        const startDate = current[0];
        const endDate = current[1];

        if (!startDate || !endDate) {
          console.log('No start/end date specified');
          return;
        }

        const range = moment.range(startDate, endDate);
        this.days = []; // можно удалить
        this.months = {};

        const daysObjects = Array.from(range.by('days'));

        daysObjects.forEach(d => {
          const day = d.format('D');
          const month = d.format('MMM');

          if (!this.months[month]) {
            this.months[month] = [];
          }

          this.months[month].push(day);

        });
      },
    },
  }


</script>

<style>
  .wrapper{
    width: 90%;
    margin: 0 auto;
  }
  .flex{
    display: flex;
    justify-content: space-between;
  }
.date-picker{
  margin-bottom: 30px;

}
</style>
