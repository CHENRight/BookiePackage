<template>
  <div id="app" >
    <router-view></router-view>
  </div>

</template>

<script>
  import RookieStation from "@/views/RookieStation";
  export default {
    name: 'app',
    components: {RookieStation},
  }
</script>

<style>

</style>
