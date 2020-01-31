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

// 对Graph分析，可检测：
// Graph[i][...] == 0
// Graph[...][j] == 0
// Graph[i][...] > Graph[...][j]
// Graph[i][...] < Graph[...][j]
// Graph[i][j] > Graph[i][j]
// Graph[i][j] < Graph[i][j]
//
// 也可以结合nodes:
// Graph[i][...] / nodes[i].pv
// Graph[...][j] / nodes[j].pv

// 以及对于流量分析中比较关心的页面，分析对其的最大引流入口maxValPos(Graph[...][j])
