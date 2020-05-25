<template>

  <div class="tabs">
    <div class="tab tab-completed">Завершено</div>
    <div class="tab tab-available">Доступно</div>
    <div class="tab tab-reserve">Резерв</div>
  </div>

</template>

<script>
  export default {
    name: "TabsTable"
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
</style>
