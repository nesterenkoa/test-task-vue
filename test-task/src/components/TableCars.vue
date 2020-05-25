<template>
  <div>

  <div class="tabs">
    <div class="tab tab-completed">Завершено</div>
    <div class="tab tab-available">Доступно</div>
    <div class="tab tab-reserve">Резерв</div>
  </div>

  <table>
      <tr>
        <th></th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        <th>5</th>
        <th>6</th>
        <th>7</th>
        <th>8</th>
        <th>9</th>
        <th>10</th>
        <th>11</th>
        <th>12</th>
        <th>13</th>
        <th>14</th>
        <th>15</th>
        <th>16</th>
        <th>17</th>
        <th>18</th>
        <th>19</th>
        <th>20</th>
        <th>21</th>
        <th>22</th>
        <th>23</th>
        <th>24</th>
        <th>25</th>
        <th>26</th>
        <th>27</th>
        <th>28</th>
        <th>29</th>
        <th>30</th>
        <th>31</th>
      </tr>
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
  .tabs{
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin-bottom: 10px;
  }

  .tab {
    flex: 1;
    padding: 8px;
    text-align: center;
    margin-right: 4px;
  }

  .tab:hover{
    background: #0482fb;
    color: white;
  }

  .tab:last-of-type{
  margin-right: 0;
}

  .tab-completed{
    background: #a2b9ed;
  }

  .tab-available{
    background:#aeede4;
  }

  .tab-reserve{
    background:#a3dcef;
  }

 table{
   width: 100%;
 }
  table *{
    padding: 4px;
  }
  th {
    font-weight: normal;
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
