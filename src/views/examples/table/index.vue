<template>
  <div>
    <x-table :data="tableData" width="600">
      <x-table-col
        prop="name"
        label="姓名"
        width="80"
        align="left"
      ></x-table-col>
      <x-table-col
        prop="age"
        label="年龄"
        width="60"
        align="center"
        sortable
      ></x-table-col>
      <x-table-col
        prop="date"
        label="日期"
        width="120"
        align="center"
        sortable
      ></x-table-col>
      <x-table-col
        prop="address"
        label="地址"
        width="200"
      ></x-table-col>
      <x-table-col
        prop="action"
        label="操作"
        width="100"
      >
        <template v-slot="{ row }">
          <button v-if="row.action === 'add'">添加</button>
          <button v-else-if="row.action === 'delete'">删除</button>
          <button v-else-if="row.action === 'edit'">编辑</button>
          <button v-else-if="row.action === 'query'">查询</button>
        </template>
      </x-table-col>
    </x-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableData1: [],
        tableData: [{
          date: '2016-05-02',
          name: '张三',
          age: 23,
          address: '上海市普陀区金沙江路 1518 弄',
          action: 'add'
        }, {
          date: '2016-05-04',
          name: '李四',
          age: 45,
          address: '上海市普陀区金沙江路 1517 弄',
          action: 'delete'
        }, {
          date: '2016-05-01',
          name: '王二麻子',
          age: 42,
          address: '上海市普陀区金沙江路 1519 弄',
          action: 'edit'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          age: 15,
          address: '上海市普陀区金沙江路 1516 弄',
          action: 'query'
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>