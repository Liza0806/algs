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
  delete(value) {
    if (!this.root) {
      return;
    }

    let {nodefindEl, parentfindEl} = findEl(this.root, value);
console.log(nodefindEl,'nodefindEl')
    if (!nodefindEl) {
      return "this node not in this tree";
    }

    if (!nodefindEl.left && !nodefindEl.right) {
      debugger
      findElAndDelete(nodefindEl, value, parentfindEl, "noChildren");
   console.log(nodefindEl, 'node2')
   return
    }
    if ((nodefindEl.left && !nodefindEl.right) || (!nodefindEl.left && nodefindEl.right)) {
   debugger
      node = findElAndDelete(nodefindEl, value, parentfindEl, "oneChild");
   return
    }
    if (nodefindEl.left && nodefindEl.right) {
      debugger
      node = findElAndDelete(nodefindEl, value, parentfindEl, "twoChildren");
   return
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
tree.add(10);
tree.add(5);
tree.add(15);
tree.add(18);
tree.add(3);
tree.add(11);
tree.add(6);
tree.add(6.4);
tree.add(5.5);
tree.add(1);
tree.add(4);
// tree.add(10);
// tree.add(-9);
// tree.add(14);
// tree.add(12);
// tree.add(-6);
// tree.add(15);
// tree.add(-14);
function max(node, parent = 0) {
  if (node === null) {
    return parent;
  }
  max(node.right, node);
}
function min(node) {
  if (node === null) {
    return null; // или можно вернуть какое-то другое значение, в зависимости от контекста
  }
  if (node.left === null) {
    return node;
  }
  return min(node.left);
}
console.log(min(tree.root))
function findEl(node, el, parent = null) {
  debugger
  if (node === null) {
    debugger
    return null;
  }
  if (node.value === el) {
    debugger
    return {parentfindEl, nodefindEl};
  }
  if (el < node.value) {
    debugger
    return findEl(node.left, el, node);
  } else {
    debugger
    return findEl(node.right, el, node);
  }
}
function findElAndDelete(node, el, parent, mode) {
  if ((el < node.value) && node.left) {
    return findElAndDelete(node.left, el, node, mode);
  } else if ((el > node.value) && node.right) {
    return findElAndDelete(node.right, el, node, mode);
  } else {
    if (node.value === el) {
      switch (mode) {
        case "noChildren":
          parent.value> el? parent.left = null : parent.right = null;
        //node = null;
        break

        case "oneChild":
          if (node.left) {
            parent.left = node.left;
            break;
          }
          if (node.right) {
            parent.right= node.right;
        break
          }

        case "twoChildren":
          debugger
          console.log(node.right, '191')
          let nodeForChange = min(node.right);
   
          parent.value > el? parent.left.value = nodeForChange?.value : parent.right.value  = nodeForChange.value
       let mode; 
      console.log(nodeForChange, 'nodeForChange')
     
      debugger
      const { parent, node} = findEl(node.right, nodeForChange.value, node)
      debugger
      if (node.left && node.right){
        mode = 'twoChildren'
      }
      if (node.left || node.right){
        mode = 'oneChld'
      }
      if (!node.left && !node.right){
        mode = 'noChildren'
      }
   
          findElAndDelete(
            node,
            node.value,
            parent,
           mode
          );
          return;
      }
    }
    return
  }
}
function deleteSon(node, el, parent){
  if(node === null){
    return
  }
  if(node.value === el){
    debugger
    parent.value > el? parent.left = null : parent.right = null
    return
  }
  if (el>node.value){
    deleteSon(node.right, el, node)
  }
  if (el<node.value){
    deleteSon(node.left, el, node)
  }
 }
 

function max(node, parent = 0) {
  if (node === null) {
    return parent;
  }
   max(node.right, node.value);
}

function find(node, k) {
  if (node === null) {
    return;
  }
  if (node.value === k) {
    return node;
  }
  if (k < node.value) {
    return find(node.left, k);
  } else {
    return find(node.right, k);
  }
}

console.log(min(tree.root));

tree.delete(5);
console.log(tree)
console.log(min(tree.root));

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

function isSimm(node) {
  if (node === null) {
    return true;
  }
  if ((!node.left && node.right) || (node.left && !node.right)) {
    debugger;
    return false;
  }
  return isSimm(node.left) && isSimm(node.right);
}
function findMaxKty(node, k) {
  let maxKty = 0;
  let count = 0;
  function helper(node, k) {
    if (node === null) {
      return;
    }

    helper(node.right, k);
    count++;
    if (k === count) {
      maxKty = node.value;
      return;
    }
    helper(node.left, k);
  }
  helper(node, k);
  return maxKty;
}
//console.log(findMaxKty(tree.root, 3));

function findMinKty(node, k) {
  let maxKty = 0;
  let count = 0;
  function helper(node, k) {
    if (node === null) {
      return;
    }

    helper(node.left, k);
    count++;
    if (k === count) {
      maxKty = node.value;
      return;
    }
    helper(node.right, k);
  }
  helper(node, k);
  return maxKty;
}
function heigh(node) {
  if (node === null) {
    return 0;
  }
  let l = heigh(node.left);
  let r = heigh(node.right);
  let res = Math.max(l, r) + 1;

  return res;
}
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

function print1(node) {
  if (node === null) {
    return;
  }
  print1(node.left);
  console.log(node.value);
  print1(node.right);
}

const arr1 = [2, 5, 11, 13, 34, 45, 77, 85, 100];
function fromArrToTree(arr) {
  const newTree = new BTree();

  fromArrToTreeHelp(arr, (l = 0), (r = arr.length), newTree);

  return newTree;
}
function fromArrToTreeHelp(arr, l, r, newTree) {
  if (!arr.length) {
    return;
  }

  if (l >= r) {
    return;
  }

  const midInd = Math.floor((l + r) / 2);
  newTree.add(arr[midInd]);
  fromArrToTreeHelp(arr, l, midInd - 1, newTree);
  fromArrToTreeHelp(arr, midInd + 1, r, newTree);
}

function difTrees(node, arrPl = [], arrMin = []) {
  if (node === null) {
    return;
  }
  if (node.value > 0) {
    arrPl.push(node.value);
  } else {
    arrMin.push(node.value);
  }
  difTrees(node.left, arrPl, arrMin);
  difTrees(node.right, arrPl, arrMin);

  const treeP = new BTree();
  arrPl.map((el) => treeP.add(el));

  const treeM = new BTree();
  arrMin.map((el) => treeM.add(el));

  return [treeP, treeM];
}
//console.log(fromArrToTree(arr1));

