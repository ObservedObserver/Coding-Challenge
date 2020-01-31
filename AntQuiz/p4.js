var fs = require('fs')
var data = fs.readFileSync('./package-lock-test.json')
// 获取'package-lock.json'中的dependencies字段
var dependencies = JSON.parse(data).dependencies
// convertTree 用于存储最终各多版本依赖信息
var convertTree = {}
// 将所有依赖的所有版本存储在convertTree中
// 主要检测requires与version字段
for (let dependency in dependencies) {
  if (typeof convertTree[dependency] === 'undefined') {
    convertTree[dependency] = new Set()
  }
  convertTree[dependency].add(dependencies[dependency].version)

  if (typeof dependencies[dependency].requires !== 'undefined') {
    for (let item in dependencies[dependency].requires) {
      if (typeof convertTree[item] === 'undefined') {
        convertTree[item] = new Set()
      }
      convertTree[item].add(dependencies[dependency].requires[item])
    }
  }
}
// 删除convertTree中所有版本信息统一的依赖
for (let node in convertTree) {
  if (convertTree[node].size === 1) {
    delete convertTree[node]
  }
}
console.log(convertTree)
