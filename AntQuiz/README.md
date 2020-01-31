# Solutions

用程序实现输入表达式 x = "1 2 + 2 + 5 4 + -", 输出该表达式的执行结果
逆波兰式，操作符置于操作数的后面。例如表达 “三加四” 时，写作 “3 4 +”，而不是 “3 + 4”。

+ 源文件[p1.js](./p1.js)

```js
var cal = (exp) => {
  var stack = []
  var ele = []
  ele = exp.split(' ')
  for (let i = 0; i < ele.length; i++) {
    // 若为数字入栈，
    // 若为运算符则从栈中取顶部两个数字出栈运算后入栈
    if (!isNaN(Number(ele[i]))) {
      stack.push(ele[i])
    } else {
      let x, y, ans
      y = stack.pop()
      x = stack.pop()
      ans = eval(x + ele[i] + y)
      stack.push(String(ans))
    }
  }
  return stack[0]
}
console.log(cal('1 2 + 2 + 5 4 + -'))

```

请写一个方法，用递归 加 循环 两种方式实现 阶乘: n！= n* (n-1) * ... * 5 * 4 * 3 * 2 * 1, 要求函数输入任意自然数 n 后，返回该自然数的阶乘。

+ 源文件[p2.js](./p2.js)

```js
// 循环写法
var cal1 = (n) => {
  var ans = 1
  for (let i = n; i > 1; i--) {
    ans *= i
  }
  return ans
}
// 阶乘写法
var cal2 = (n) => {
  if (n === 1 || n === 0) {
    return 1
  } else {
    return n * cal2(n - 1)
  }
}
console.log(cal1(4), cal2(4))

```

目前 G2 是一个纯 js 的类库，在React项目中使用比较麻烦，用 React 包一个 components，简单的封装他们的生命周期，以达到在 React 应用中使用的目的

+ 组件源代码[./r-g2/src/components/ReactG2.js](./r-g2/src/components/ReactG2.js)

// your code here
```js
import React, { Component } from 'react';
import G2 from '@antv/g2';
var cid = 0
class ReactG2 extends Component {
  constructor (props) {
    super(props);
    this.chartId = 'ReactG2-Charts-' + (cid++);
  }
  initCharts (props) {
    const chart = new G2.Chart({
      container: this.chartId,
      width: props.width,
      height: props.height
    });
    chart.source(props.data);
    props.config(chart);
    // chart.interval().position('year*sales');
    chart.render();
    this.chart = chart;
  }
  componentDidMount () {
    this.initCharts(this.props);
  }
  componentWillReceiveProps (newProps) {
    if (this.props.data !== newProps.data) {
      this.chart.changeData(newProps.data);
    }
    if (this.props.width !== newProps.width || this.props.height !== newProps.height) {
      this.chart.changeData(newProps.width, newProps.height);
    }
    if (this.props.config !== newProps.config) {
      newProps.config(this.chart);
    }
    this.chart.render();
  }
  componentWillUnmount () {
    this.chart.destroy();
    this.chart = null;
    this.chartId = null;
  }
  render() {
    return (
      <div id={this.chartId}></div>
    );
  }
}

export default ReactG2;

```

// 期望使用结果

```
import 'react';
import ReactG2 from 'r-g2';

export default class Demo {
  render() {
    var operation = (chart) => {
      chart.interval().position('year*sales');
    }
    const { data } = this.props;
    return <ReactG2
      data={data}
      width={100}
      height={100}
      config={operation}
    />;
  }
}
```

写一个算法，找出项目中npm包依赖里面有同一个包的多版本存在的情况
伪代码即可

+ 源代码[p4.js](./p4.js)

// your code here
```js
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
```

你作为一个可视化工程师，接收到一个分析网站流量的任务，并没有给出网站的结构，只给出了每个页面（节点）的信息和页面间跳转的数据，写一个算法通过节点信息和页面跳转信息推断出网站的结构。
可用伪代码或者流程图说明实现结果
// 页面信息，包括 id, 页面名，页面的访问数
const nodes = [
  {id: '1', name: 'xxx 页面', pv: 10000},
  {id: '2', name: 'xxx 页面2', pv: 5000},
  ....
];

// 页面间的跳转，weight 是页面间的流量
const links = [
  {source: '1', target: '2', weight: 1000},
  {source: '1', target: '3', weight: 1000},
  ...
]
// your code here

+ 转化临界矩阵与分析思路[p5.js](./p5.js)
+ 可视化分析见[p5.html](./p5.html)

```js
const nodes = [
  {id: 0, name: 'xxx 页面', pv: 10000},
  {id: 1, name: 'xxx 页面2', pv: 5000},
  {id: 2, name: 'xxx 页面3', pv: 1000},
  {id: 3, name: 'xxx 页面4', pv: 3000}
]
const links = [
  {source: 0, target: 1, value: 1000},
  {source: 0, target: 2, value: 900},
  {source: 1, target: 2, value: 880},
  {source: 1, target: 3, value: 680},
  {source: 3, target: 0, value: 800},
  {source: 2, target: 0, value: 980}
]

const NODE_NUM = nodes.length
const EDGE_NUM = links.length

var Graph = []
for (let i = 0; i < NODE_NUM; i++) {
  Graph.push([])
  for (let j = 0; j < NODE_NUM; j++) {
    Graph[i].push(0)
  }
}

for (let i = 0; i < EDGE_NUM; i++) {
  Graph[links[i].source][links[i].target] = links[i].value
}

console.log(Graph)
```
+ 对Graph分析，可检测：
  + Graph[i][...] == 0
  + Graph[...][j] == 0
  + Graph[i][...] > Graph[...][j]
  + Graph[i][...] < Graph[...][j]
  + Graph[i][j] > Graph[i][j]
  + Graph[i][j] < Graph[i][j]
+ 也可以结合nodes:
  + Graph[i][...] / nodes[i].pv
  + Graph[...][j] / nodes[j].pv
+ 以及对于流量分析中比较关心的页面，分析对其的最大引流入口maxValPos(Graph[...][j])
