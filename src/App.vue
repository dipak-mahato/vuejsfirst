<template>
  <div id="app">
    <div id="nav">
 
            <button type="button" @click="logout()" v-if="isLogged">
        Logout
      </button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
 
export default {
  computed: {
    ...mapGetters([
      'isLogged'
    ])
  },

  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
 
  }
}
</script>