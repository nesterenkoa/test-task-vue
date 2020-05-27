<template>
  <div class="wrapper">
    <table v-if="loaded">
        <tr>
          <th class="column-name">Cars:</th>
          <th v-for="(day, i) in days" :key="i" class="column-name">
            {{ day | moment }}
          </th>
        </tr>
        <tr v-for="(car, i) in cars" :key="car.id" class="row">
          <th
              class="row-name"
              :style="{ borderColor: car.color }"
          >
            {{car.model}}
          </th>
          <td
              v-for="(day, j) in days"
              :key="j"
              :class="getClass(grid[j][i])"
          >
            {{ grid[j][i] | order }}
          </td>
        </tr>
    </table>
</div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'Grid',
  props:  ['cars', 'days', 'grid'],
  computed: {
    loaded: function () {
      return this.grid && this.grid.length && this.grid[0].length
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('D');
    },
    order: function(item) {
      return item ? item.id : ''
    }
  },
  methods: {
    getClass: function(order) {
      if (!order) {
        return 'cell available';
      }

      switch (order.status) {
        case 'completed':
          return 'cell completed';
        case 'reserved':
          return 'cell reserved';
      }
    },
  }
}
</script>

<style scoped>
.wrapper {
  overflow-x: scroll;
}
.column-name {
  min-width: 30px;
  height: 20px;
}

.row-name{
  position: sticky;
  left: 0;
  background:#e3ebfe ;
  padding: 10px;
  min-width: 85px;
  border-left: 12px solid;
}

td{
  background:#e3ebfe;
}
.cell {
  text-align: center;
}
.completed{
  background: #a2b9ed;
}

.available{
  background:#aeede4;
}

.reserved{
  background:#a3dcef;
}
</style>
