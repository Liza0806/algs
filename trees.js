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

function sumTree(node) {
  if (node === null) {
    return 0;
  }
  return node.value + sumTree(node.left) + sumTree(node.right);
}

function isInMiddle(min, max, node) {
  if (node === null) {
    return true;
  }

  if (node.value < min || node.value > max) {
    return false;
  }
  return isInMiddle(min, max, node.left) && isInMiddle(min, max, node.right);
}

function isInMiddle2(min, max, node) {
  if (node === null) {
    return false;
  }

  let nodeMin = node;
  let nodeMax = node;
  while (nodeMin && nodeMin.left !== null) {
    nodeMin = nodeMin.left;
  }
  while (nodeMax && nodeMax.right !== null) {
    nodeMax = nodeMax.right;
  }

  if (
    nodeMin.value >= min &&
    nodeMin.value <= max &&
    nodeMax.value >= min &&
    nodeMax.value <= max
  ) {
    return true;
  }
  return false;
}

function isBinary(node) {
  if (node === null) {
    return true;
  }
  if (node.left && node.left.value > node.value) {
    return false;
  }
  if (node.right && node.right.value < node.value) {
    return false;
  }
  return isBinary(node.left) && isBinary(node.right);
}
function isB(node, low, high) {
  if (node === null) {
    return true;
  }
  if (node.value > low && node.value < high) {
    return isB(node.left, low, node.value) && isB(node.right, node.value, high);
  }
  return false;
}

const arrT = [2, 4, 13, 22, 23, 34, 50, 63, 71];
function toBST1(arr) {
  const tree = new BTree();
  func(arr, tree);
  return tree;
}
function func(arr, tree) {
  if (!arr.length) {
    return;
  }
  console.log(tree);
  let midIndex = Math.floor(arr.length / 2);
  tree.add(arr[midIndex]);

  func(arr.slice(0, midIndex), tree);
  func(arr.slice(midIndex + 1), tree);
}
class BTree2 {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
function toBST2(arr, l = 0, r = arr.length) {
  if (l > r) {
    debugger;
    return null;
  }
  const midInd = Math.floor((l + r) / 2);

  return new BTree2(
    arr[midInd],
    toBST2(arr, l, midInd - 1),
    toBST2(arr, midInd + 1, r)
  );
}
function toBST3(arr) {
  const tree = new BTree();
  func2(arr, tree, 0, arr.length);
  return tree;
}
function func2(arr, tree, l, r) {
  // debugger
  if (l > r) {
    return null;
  }
  let midIndex = Math.floor((l + r) / 2);
  tree.add(arr[midIndex]);
  func2(arr, tree, l, midIndex - 1);
  func2(arr, tree, midIndex + 1, r);
}

function clothestNum(node, x, clothest = node.value) {
  if (node === null) {
    return clothest;
  }
  if (node.value === x) {
    return x;
  }
  clothest = node.value;

  if (x < node.value) {
    return clothestNum(node.left, x, clothest);
  }
  if (x > node.value) {
    return clothestNum(node.right, x, clothest);
  }

  return clothest;
}

function minKty(node, k, resarr) {
  if (node === null) {
    return;
  }
  if (resarr.length >= k) {
    return resarr[k - 1];
  }

  minKty(node.left, k, resarr);
  resarr.push(node);
  minKty(node.right, k, resarr);
  return resarr[k - 1]?.value === undefined ? "none" : resarr[k - 1]?.value;
}
function print(node, k, resarr) {
  if (node === null) {
    return;
  }

  // console.log(node.value);

  print(node.left, k, resarr);
  // console.log(node.value);
  print(node.right, k, resarr);
  console.log(node.value);

  return;
}

function isMirror(nodeLeft, nodeRight) {
  debugger;
  if (nodeLeft === null && nodeRight === null) {
    debugger;
    return true;
  }
  if (nodeLeft === null && nodeRight !== null) {
    debugger;
    return false;
  }
  if (nodeLeft !== null && nodeRight === null) {
    debugger;
    return false;
  }
  debugger;
  return (
    nodeLeft.value === nodeRight.value &&
    isMirror(nodeLeft.left, nodeRight.right) &&
    isMirror(nodeLeft.right, nodeRight.left)
  );
}
