<template>
  <table
    cellspacing="0"
    cellpadding="0"
    :width="width"
    class="x-table">
    <colgroup v-if="cols.length">
      <col
        v-for="(col, index) in cols"
        :key="index"
        :width="col.width"
        :align="col.align" />
    </colgroup>
    <thead>
      <th
        v-for="(col, index) in cols"
        :key="index"
        class="x-table__cell"
        :align="col.align">
          {{ col.label }}
          <div v-if="col.sortable" class="x-table__sort">
            <i
              :class="[
                'x-table__arrow',
                'x-table__arrow--up',
                {'x-table__arrow--active': sortType === 'desc' && sortProp === col.prop}
              ]" 
              @click="onSort('desc', col.prop)"></i>
            <i
              :class="[
                'x-table__arrow',
                'x-table__arrow--down',
                {'x-table__arrow--active': sortType === 'asc' && sortProp === col.prop}
              ]" 
              @click="onSort('asc', col.prop)"></i>
          </div>
      </th>
    </thead>
    <tbody v-if="rows && rows.length > 0">
      <tr 
        v-for="row in rows"
        :key="row._id"
        :row-id="row._id"
        class="x-table__row">
        <template v-if="!$slots.default">
          <td
            v-for="(col, key) in row"
            :key="key"
            class="x-table__cell">
            <span>{{ col }}</span>
          </td>
        </template>
        <template v-else>
          <slot></slot>
        </template>
      </tr>
    </tbody>
    <tbody v-else>
      <tr>
        <td class="x-table__cell" :colspan="cols.length" align="center">暂无数据</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: 'x-table',
    provide () {
      return {
        rows: this.rows
      }
    },
    props: {
      data: {
        type: Array,
        default: () => []
      },
      width: {
        type: String,
        default: '100%'
      }
    },
    computed: {
      cols () {
        return this.$slots.default
          .filter(item => item.tag.includes('x-table-col'))
          .map(item => {
            const propsData = item.componentOptions.propsData
            if (typeof propsData.sortable !== 'undefined') {
              propsData
            }
            propsData.sortable = typeof propsData.sortable !== 'undefined'
            return item.componentOptions.propsData
          })
      }
    },
    watch: {
      data: {
        handler () {
          this.initRows()
        },
        immediate: true
      }
    },
    data() {
      return {
        rows: [],
        sortType: '',
        sortProp: ''
      }
    },
    methods: {
      initRows () {
        this.rows = this.data.map((row, index) => {
          row._id = String(row._id || index)
          return row
        })
      },
      onSort (type, prop) {
        if (this.sortType === type && this.sortProp === prop) {
          this.sortType = ''
          this.sortProp = ''
          this.initRows()
          return
        }
        this.sortType = type
        this.sortProp = prop
        const sort = function (a, b) {
          const [x, y] = type === 'asc'
            ? [a, b]
            : [b, a]
          if (new Date(x[prop]) !== 'Invalid Date') {
            return new Date(x[prop]).getTime() - new Date(y[prop]).getTime()
          }
          return a[prop] - b[prop] 
        }
        this.rows = this.rows.sort(sort)
      }
    }
  }
</script>

<style lang="scss">
$table: 'x-table';
.#{$table} {
  
  border-collapse: collapse;
  &__cell {
    border: 1px solid #ddd;
    padding: 5px 8px;
    font-size: 13px;
    color: #666;
    position: relative;
  }
  &__sort {
    position: relative;
    display: inline-block;
    vertical-align: -6px;
    width: 16px;
    height: 22px;
    .#{$table}__arrow {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: inline-block;
      width: 0;
      height: 0;
      border-width: 5px;
      border-style: solid;
      border-color: #ccc;
      &--active {
        border-color: #409eff;
      }
      &--down {
        bottom: 0;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
      }
      &--up {
        top: 0;
        border-top-color: transparent;
        border-right-color: transparent;
        border-left-color: transparent;
      }
    }
  }
}
</style>