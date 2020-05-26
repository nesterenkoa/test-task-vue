<template>
  <div>
  <table v-if="loaded">
      <tr>
        <th class="column-name">Cars list:</th>
        <th v-for="(day, i) in days" :key="i" class="column-name">
          {{ day | moment }}
        </th>
      </tr>
      <tr v-for="(car, i) in cars" :key="car.id" class="row">
        <th class="row-name">{{car.model}}</th>
        <td
            v-for="(day, j) in days"
            :key="j"
            v-bind:class="getClass(grid[j][i])"
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
    }
  }
}
</script>

<style scoped>
.column-name {
  min-width: 30px;
  height: 20px;
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
