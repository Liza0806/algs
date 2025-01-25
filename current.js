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

    let { nodefindEl, parentfindEl } = findEl(this.root, value);
    //  console.log(nodefindEl, "nodefindEl");
    if (!nodefindEl) {
      return "this node not in this tree";
    }

    if (!nodefindEl.left && !nodefindEl.right) {
      findElAndDelete(nodefindEl, value, parentfindEl, "noChildren");
      // console.log(nodefindEl, "node2");
      return node;
    }
    if (
      (nodefindEl.left && !nodefindEl.right) ||
      (!nodefindEl.left && nodefindEl.right)
    ) {
      let node = findElAndDelete(nodefindEl, value, parentfindEl, "oneChild");
      return node;
    }
    if (nodefindEl.left && nodefindEl.right) {
      let node = findElAndDelete(
        nodefindEl,
        value,
        parentfindEl,
        "twoChildren"
      );
      return node;
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
    while (queue.length) {
      const node = queue.shift();
      callback(node);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
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
tree.add(11);
tree.add(3);
tree.add(6);
tree.add(6.4);
tree.add(5.5);
tree.add(1);
tree.add(4);

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
//console.log(min(tree.root));
function findEl(node, el, parent = null) {
  if (node === null) {
    return null;
  }
  if (node.value === el) {
    return { parentfindEl: parent, nodefindEl: node };
  }
  if (el < node.value) {
    return findEl(node.left, el, node);
  } else {
    return findEl(node.right, el, node);
  }
}
function findElAndDelete(node, el, parent, mode) {
  if (el < node.value && node.left) {
    return findElAndDelete(node.left, el, node, mode);
  } else if (el > node.value && node.right) {
    return findElAndDelete(node.right, el, node, mode);
  } else {
    if (node.value === el) {
      switch (mode) {
        case "noChildren":
          parent.value > el ? (parent.left = null) : (parent.right = null);
          break;

        case "oneChild":
          if (node.left) {
            parent.left = node.left;
            break;
          }
          if (node.right) {
            parent.right = node.right;
            break;
          }

        case "twoChildren":
          //    console.log(node.right, "191");

          // Ищем минимальный узел в правом поддереве
          let nodeForChange = min(node.right);

          // Обновляем node.value
          node.value = nodeForChange.value;

          //  console.log(nodeForChange, "nodeForChange");

          // Ищем узел, который был перемещен
          const { parentfindEl, nodefindEl } = findEl(
            node.right,
            nodeForChange.value,
            node
          );

          // Определяем, сколько детей у узла nodefindEl
          let mode;
          if (nodefindEl.left && nodefindEl.right) {
            mode = "twoChildren";
          } else if (nodefindEl.left || nodefindEl.right) {
            mode = "oneChild";
          } else {
            mode = "noChildren";
          }

          // Рекурсивно удаляем узел, из которого взяли значение
          return findElAndDelete(
            nodefindEl,
            nodefindEl.value,
            parentfindEl,
            mode
          );
      }
    }
    return;
  }
}
function deleteSon(node, el, parent) {
  if (node === null) {
    return;
  }
  if (node.value === el) {
    parent.value > el ? (parent.left = null) : (parent.right = null);
    return;
  }
  if (el > node.value) {
    deleteSon(node.right, el, node);
  }
  if (el < node.value) {
    deleteSon(node.left, el, node);
  }
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

// console.log(min(tree.root));

// tree.delete(5);
// console.log(tree);
// console.log(min(tree.root));

function fromTreeToArray(node, arr = []) {
  if (node === null) {
    return;
  }
  fromTreeToArray(node.left, arr);
  arr.push(node.value);
  fromTreeToArray(node.right, arr);
  return arr;
}
function isBinary(node) {
  if (node === null) {
    return;
  }
  if (node.right && node.left && node.right.value > node.left.value) {
    return true;
  }
  if (node.right && node.left && node.right.value < node.left.value) {
    return false;
  }
  return isBinary(node.right) && isBinary(node.right);
}
//console.log(isBinary(tree.root))
// улучшенная версия
function isBinary(node, min = -Infinity, max = Infinity) {
  if (node === null) {
    return true;
  }

  if (node.value <= min || node.value >= max) {
    return false;
  }

  return (
    isBinary(node.left, min, node.value) &&
    isBinary(node.right, node.value, max)
  );
}

function isBalanced(node) {
  if (node === null) {
    return 0;
  }

  let leftHeight = isBalanced(node.left);
  let rightHeight = isBalanced(node.right);

  if (
    leftHeight === -1 ||
    rightHeight === -1 ||
    Math.abs(leftHeight - rightHeight) > 1
  ) {
    return -1;
  }

  // Возвращаем высоту текущего узла
  return Math.max(leftHeight, rightHeight) + 1;
}

//Нахождение K-го по величине элемента
function kTy(node, k, arr = []) {
  if (node === null) {
    return;
  }
  kTy(node.left, k, arr);
  if (arr.length >= k) {
    return arr[arr.length - 1];
  }
  arr.push(node.value);
  kTy(node.right, k, arr);
}
function kTy1(node, k, arr = []) {
  if (node === null) {
    return;
  }
  kTy(node.left, k, arr);
  arr.push(node.value);

  if (arr.length >= k) {
    return arr[arr.length - 1];
  }

  kTy(node.right, k, arr);
}

// Нахождение общего предка двух узлов
function commonFather(node, a, b) {
  if (node === null) {
    return;
  }
  if (a < node.value && b < node.value) {
    return commonFather(node.left, a, b);
  }
  if (a > node.value && b > node.value) {
    return commonFather(node.right, a, b);
  }

  return node;
}
//Найди путь от корня до узла
function way(node, x, arr = []) {
  if (node === null) {
    return;
  }
  if (x === node.value) {
    return arr;
  }
  way(node.left, x, arr);

  way(node.right, x, arr);
  arr.push(node.value);
  return arr;
}
console.log(way(tree.root, 5));
