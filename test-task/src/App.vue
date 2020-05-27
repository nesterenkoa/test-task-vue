<template>
  <div id="app">
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

        <p>{{days.length}} days selected</p>


    <!--<div class="wrapper">-->
      <TabsTable :cars="cars"  />
      <Grid :days="days" :cars="cars" :grid="grid" />
    </div>
  </div>
  <!--</div>-->
</template>

<script>
  import Moment from 'moment';
  import { extendMoment } from 'moment-range';
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
  import Grid from './components/Grid.vue';
  import SearchCars from './components/SearchCars.vue';
  import TabsTable from './components/TabsTable.vue';
  import cars from './data/cars.js';

  const moment = extendMoment(Moment);

  export default {
    name: 'App',
    components: {
      DatePicker,
      SearchCars,
      TabsTable,
      Grid
    },
    data() {
      return {
        range: [null, null],
        cars,
        days: []
      }
    },
    created() {
      const startDate = moment();
      const endDate = moment().add(7, 'days');
      this.range = [startDate, endDate]
    },
    watch: {
      range: function (current) {
        const startDate = current[0];
        const endDate = current[1];

        if (!startDate || !endDate) {
          console.log('No start/end date specified');
          return;
        }

        const range = moment.range(startDate, endDate);
        this.days = Array.from(range.by('days'));
      }
    },
    computed: {
      grid: function () {
        const grid = [];

        for (let i = 0; i < this.days.length; i++) {
          if (!grid[i]) {
            grid[i] = [];
          }
          for (let j = 0; j < this.cars.length; j++) {
            const day = this.days[i];
            const car = this.cars[j];
            const orderForThisDate = car.orders.find((order) => {
              const orderedPeriod = moment.range(order.startDate, order.endDate);
              return orderedPeriod.contains(day);
            });

            grid[i][j] = orderForThisDate;
          }
        }
        console.log({ grid });
        return grid;

      }
    }
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
