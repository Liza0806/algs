class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  preOrder(node, callback) {
    if (!node) {
      return;
    }
    if (callback) {
      callback(node);
    }
    this.preOrder(node.left, callback);
    this.preOrder(node.right, callback);
  }
  inOrder(node, callback) {
    if (!node) {
      return;
    }
    this.inOrder(node.left, callback);
    if (callback) {
      callback(node);
    }
    this.inOrder(node.right, callback);
  }
  postOrder(node, callback) {
    if (!node) {
      return;
    }
    this.postOrder(node.left, callback);
    this.postOrder(node.right, callback);
    if (callback) {
      callback(node);
    }
  }
  traverseDfs(callback, method) {
    if (method === "preOrder") {
      return this.preOrder(this.root, callback);
    }
    if (method === "inOrder") {
      return this.inOrder(this.root, callback);
    }
    return this.postOrder(this.root, callback);
  }
  traverseBfs(callback) {
    const queue = [this.root];
    debugger;
    while (queue.length) {
      debugger;
      const node = queue.shift();
      callback(node);
      if (node.left) {
        debugger;
        queue.push(node.left);
      }
      if (node.right) {
        debugger;
        queue.push(node.right);
      }
    }
  }
}
const tree = new BTree();
// tree.add(10);
// tree.add(5);
// tree.add(15);
// tree.add(18);
// tree.add(3);
// tree.add(11);
// tree.add(6);

tree.add(10);
tree.add(-9);
tree.add(14);
tree.add(12);
tree.add(-6);
tree.add(15);
tree.add(-14);


function minKty2(node, k) {
  function inorder(node) {
    if (node === null) {
      return;
    }
    let res = inorder(node.left);
    if (res !== 0) {
      return res;
    }
    k = k - 1;
    if (k === 0) {
      return node.value;
    }
    return inorder(node.right);
  }
}

function maxK(node, x) {
  let count = 0;
  let res = null;

  function helper(node) {
    if (!node || count >= x) {
      return;
    }

    helper(node.right);
    count++;
    if (count === x) {
      res = node.value;
      return res;
    }
    helper(node.left);
  }
  helper(node);
  return res;
}

function sum(node) {
  if (node === null) {
    return 0;
  }
  return node.value + sum(node.left) + sum(node.right);
}
//Найти вершины, у которых количество потомков
// в левом поддереве не равно количеству потомков
// в правом поддереве.
function heigh(node) {
  if (node === null) {
    return 0;
  }
  let l = heigh(node.left);
  let r = heigh(node.right);
  let res = Math.max(l, r) + 1;

  return res;
}
let arr = [];
function compare(node, arr) {
  if (node === null) {
    return arr;
  }

  let leftHeight = heigh(node.left);
  let rightHeight = heigh(node.right);

  if (leftHeight !== rightHeight) {
    arr.push(node.value);
  }

  compare(node.left, arr);
  compare(node.right, arr);
  return arr;
}

function max(node, parent = 0) {
  if (node === null) {
    return parent;
  }
  return max(node.right, node.value);
}
function min(node, parent = 0) {
  if (node === null) {
    return parent;
  }
  return min(node.left, node.value);
}

function find (node, k){
  if (node === null) {
    return;
  }
  if (node.value === k) {
    return node;
  }
if (k < node.value){
  return find(node.left, k)
}
else {
  return find(node.right, k)
}
}
function isSimm (node){
  if (node === null) {
    return true;
  }
  if ((!node.left && node.right) || (node.left && !node.right)){
    debugger
    return false;
  }
  return isSimm(node.left) && isSimm(node.right)
}
function difTrees (node, arrPl = [], arrMin= []){
if(node === null){
  return
}
if(node.value > 0){
  arrPl.push(node.value)
} else {
  arrMin.push(node.value)
}
difTrees(node.left, arrPl, arrMin)
difTrees(node.right, arrPl, arrMin)
const treeP = new BTree();
arrPl.map(el=>treeP.add(el))
const treeM = new BTree();
arrMin.map(el=>treeM.add(el))
return [treeP, treeM]
}
console.log(difTrees(tree.root));

