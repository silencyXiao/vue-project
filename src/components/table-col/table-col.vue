<template>
  <td :width="width" ref="cell" class="x-table__cell" :align="align">
    <slot v-if="$scopedSlots.default" :row="row"></slot>
    <span v-else>{{ row[prop] }}</span>
  </td>
</template>

<script>
  export default {
    name: 'x-table-col',
    inject: ['rows'],
    props: {
      prop: {
        type: String,
        required: true
      },
      label: String,
      align: {
        type: String,
        default: 'left'
      },
      sortable: {
        type: Boolean,
        default: false
      },
      width: {
        type: [String, Number],
        default: 100
      }
    },
    computed: {
      row ({ rows, rowId }) {
        let _row
        rows.some(row => {
          if (row._id === rowId) {
            _row = row
            return true
          }
        })
        return _row || {}
      }
    },
    mounted () {
      this.rowId = this.$refs.cell.parentNode.getAttribute('row-id')
    },
    data() {
      return {
        rowId: null
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>