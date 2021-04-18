<template>
  <div>
    <slot :user="user"></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          firstName: 'Xiao',
          lastName: 'peng'
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>