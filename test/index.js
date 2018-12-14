// var new_array = arr.filter(callback(element[, index[, array]])[, thisArg])
var index = -1
var num = 5
var arr = []
for (let i = 0;i < 10;i++) {
  let obj = {
    id: i + 1,
    name: 'obj_' + (i + 1)
  }
  arr.push(obj)
}
console.log('开始调试')
var target = arr.filter((e,i)=>{
  if (e.id === num) {
    index = i
    
    return true
  }
  return false
})
console.log(target)

