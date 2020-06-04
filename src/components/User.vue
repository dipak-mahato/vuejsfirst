<template>
  <div class="hello">
 
  <h1>User PAGE</h1>
  <p v-for="det in detail" v-bind:key="det.name">{{det.address}}</p>
  
  <p>
    <!-- use router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
 
  </p>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
 
  </div>
</template>

<script>
export default {
    data () {
    return {
      detail:''
    }
  },
    created: function() {
      this.$store
        .dispatch('detail')
        .then((res) => {
          this.detail=res.data
        })
        .catch((err) => {
          console.log(err)
        })
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
