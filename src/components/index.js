import Table from './table/index.js'
import TableCol from './table-col/index.js'

const components = [
  Table,
  TableCol
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  Table,
  TableCol
}