<template>
  <div class="flex">
    <form>
      <input class="search-cars" v-model="search" type="search" placeholder="Type to search">
    </form>
    <!--<button class="btn-search">search</button>-->
  </div>
  
</template>

<script>
  export default {
    name: 'SearchCars',
    props: ['cars'],
    data() {
      return {
        search: '',
        searchTimeout: null
      }
      //   watch: {
      //   search(newValue)
      //   {
      //     clearTimeout(this.searchTimeout)
      //     this.searchTimeout = setTimeout(async() => {
      //       if(newValue.length >= 3)
      //     {
      //       this.cars = await
      //       this.$axios.$get('/', {
      //         params: {
      //           search: newValue
      //         }
      //       })
      //     }
      //   else
      //     {
      //       this.articles = await
      //       this.$axios.$get('/articles')
      //     }
      //   },
      //     500
      //   )
      //   }
      // }
    }
  }
</script>

<style scoped>
.flex{
  display: flex;
}
.btn-search{
  padding: 5px;
  background: transparent;
}
.search-cars{
  width: 100%;
}
</style>
