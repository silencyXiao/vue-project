<template>
  <div>
    <p>{{ title }}</p>
    <child>
      <!-- 作用域插槽 -->
      <!-- 通过作用域插槽，父组件可访问子组件中的数据 -->
      <!-- 必须使用template标签 -->
      <template v-slot="{ user }">
        <p>{{ user.firstName }}</p>
        <p>{{ user.lastName }}</p>
      </template>
    </child>
  </div>
</template>

<script>
  import Child from './components/child.vue'
  export default {
    components: {
      Child
    },
    data () {
      return {
        title: '我是debug',
        user: {
          firstName: 'Xiao',
          lastName: 'peng'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>