import Button from '../packages/button'

const install = function(Vue,opts = {}) {
  Vue.component(Button.name,Button)
}

// module.exports = {
//   install,
//   Button
// }
// module.exports.default = module.exports;
export default install