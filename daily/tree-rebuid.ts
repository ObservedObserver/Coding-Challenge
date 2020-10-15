interface Tree {
  left: Tree | null;
  right: Tree | null;
  val: number;
}

function generateTree(preTree: number[], midTree: number[]): Tree {
  let tailTree: Tree = {
    left: null,
    right: null,
    val: preTree[0]
  };
  let index = 1;
  function buildTree(tree: Tree, midNodes: number[]): void {
    let rootIndex = midNodes.findIndex((node) => node === tree.val);
    if (rootIndex > 0) {
      tree.left = {
        left: null,
        right: null,
        val: preTree[index++],
      };
      buildTree(tree.left, midNodes.slice(0, rootIndex));
    }
    if (rootIndex < midNodes.length - 1) {
      tree.right = {
        left: null,
        right: null,
        val: preTree[index++]
      }
      buildTree(tree.right, midNodes.slice(rootIndex +1));
    }
  }
  buildTree(tailTree, midTree);
  console.log(JSON.stringify(tailTree, null, 2))
  return tailTree;
}

console.log(generateTree([1, 2, 3, 4, 5, 6, 7], [3, 2, 4, 1, 6, 5, 7]));