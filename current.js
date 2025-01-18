// Depth-First Search (DFS)
// 1.	Начни с выбранной вершины.
// 2.	Отметь её как посещённую.
// 3.	Для каждой соседней вершины:
// o	Если она не посещена, перейди к ней и повтори шаги 1–3.
// 4.	Если все соседи посещены, вернись назад.
//Для DFS (поиск в глубину) используется метод pop() вместо shift(),
// потому что DFS работает по принципу стека (LIFO — Last In, First Out).
/// эти функции работают для графов!!!
function dfs(graph, node, visited = new Set()) {
  if (visited.has(node)) return;

  console.log(node); // Действие с узлом
  visited.add(node);

  for (const neighbor of graph[node]) {
    debugger;
    dfs(graph, neighbor, visited);
    debugger;
  }
}

// Пример графа
const graph1 = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

///dfs(graph1, "A"); // Вывод: A B D E F C

// Breadth-First Search (BFS)
// 1.	Начни с выбранной вершины.
// 2.	Помести её в очередь и отметь как посещённую.
// 3.	Пока очередь не пуста:
// o	Удали вершину из очереди.
// o	Добавь всех её непосещённых соседей в очередь и отметь их как посещённые.
// Использует очередь (FIFO — First In, First Out)
function bfs(graph, startNode) {
  const visited = new Set();
  const queue = [startNode];

  while (queue.length > 0) {
    const node = queue.shift(); // Извлекаем первый элемент
    if (!visited.has(node)) {
      console.log(node); // Действие с узлом
      visited.add(node);
      // Добавляем соседей, если они ещё не посещены
      queue.push(...graph[node].filter((neighbor) => !visited.has(neighbor)));
    }
  }
}

// Пример графа
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

//bfs(graph, "A"); // Вывод: A B C D E F

class Node1 {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  add(value) {
    const newNode = new Node1(value);
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
const myTree = new BinaryTree();
myTree.add(8);
myTree.add(7);
myTree.add(9);
myTree.add(5);
myTree.add(10);
myTree.add(20);
myTree.add(6);
myTree.add(2);
myTree.add(11);

//console.log(myTree);
// myTree.traverseDfs((node) => {
//   console.log(node.value);
// }, "preOrder");
// myTree.traverseDfs((node) => {
//   console.log(node.value);
// }, "inOrder");
// myTree.traverseDfs((node) => {
//   console.log(node.value);
// }, "postOrder");
// myTree.traverseBfs((node) => {
//   console.log(node.value);
// });

const arr = [1, 3, 2, 0, 2, 9, 7];

const bs = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

const ins = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > cur) {
      [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      j--;
    }
    arr[j + 1] = cur;
  }
  return arr;
};

const sel = (arr) => {
  let arrS = [];
  while (arr.length > 0) {
    let { ind, el } = findM(arr);
    arrS.push(el);
    arr.splice(ind, 1);
  }

  return arrS;
};
const findM = (arr) => {
  let el = arr[0];
  let ind = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < el) {
      el = arr[i];
      ind = i;
    }
  }
  return { ind: ind, el: el };
};

const mS = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor((0 + arr.length) / 2);
  let l = arr.slice(0, mid);
  let r = arr.slice(mid);
  let left = mS(l);
  let right = mS(r);
  return mr(left, right);
};
const mr = (left, right) => {
  let res = [];
  let i = 0;
  let j = 0;
  while (i < left[i] && j < right[j]) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    res.push(left[i]);
    i++;
  }
  while (j < right.length) {
    res.push(right[j]);
    j++;
  }
  return res;
};

const qs = (arr) => {
  const pivot = arr[Math.floor((0 + arr.length) / 2)];
  const less = [];
  const greater = [];
  if (arr.length <= 1) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === pivot) continue;
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return [...qs(less), pivot, ...qs(greater)];
};
//console.log(qs(arr));

const bp = (arr, x, left = 0, right = arr.length) => {
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === x) {
    return mid;
  }
  if (left >= right) {
    return false;
  }
  if (x > arr[mid]) {
    return bp(arr, x, mid + 1, right);
  }
  if (x < arr[mid]) {
    return bp(arr, x, left, mid - 1);
  }
};
const sortedArr = [0, 2, 8, 11, 25, 29, 36, 57];

const bp2 = (arr, x) => {
  let left = 0;
  let right = arr.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === x) {
      return mid;
    }
    if (left >= right) {
      return false;
    }

    if (x > arr[mid]) {
      left = mid + 1; // и на каждом цикле переназначаем лефт или райт, в зависимости от случая
    }
    if (x < arr[mid]) {
      right = mid - 1;
    }
  }
  return false;
};
//  console.log(bp2(sortedArr, 11));

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
//const tree = new BTree();
// tree.add(10);
// tree.add(5);
// tree.add(15);
// tree.add(18);
// tree.add(3);
// tree.add(7);
//console.log(tree);
function sumTree(node) {
  if (node === null) {
    return 0;
  }
  return node.value + sumTree(node.left) + sumTree(node.right);
}

// tree.traverseBfs(sumTree);
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
//console.log(isInMiddle2(0, 11, tree.root))

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

//console.log(isB(tree.root, -Infinity, Infinity));
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
function toBST2(arr, l=0, r=arr.length) {
  if (l > r) {  
debugger
    return null;
  }
  const midInd = Math.floor((l + r) / 2);
  
  return new BTree2(
    arr[midInd],
    toBST2(arr, l, midInd - 1),
    toBST2(arr, midInd + 1, r)
  );
}
function toBST3(arr){
  const tree = new BTree();
  func2(arr, tree, 0, arr.length)
return tree;
}
function func2(arr, tree, l, r){
 // debugger
  if(l > r){
    return null;
  }
  let midIndex = Math.floor((l+r) / 2);
  tree.add(arr[midIndex]);
func2(arr, tree, l, midIndex-1)
func2(arr, tree, midIndex+1, r)

}
console.log(toBST3(arrT));

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
function isSymmetric(node, callback) {
  debugger;
  return callback(node.left, node.right);
}

//console.log(isSymmetric(tree.root, isMirror));

// function treeLength(node) {
//   if (node === null) {
//     debugger;
//     return 0;
//   }
//   debugger;
//   const left = treeLength(node.left);
//   const right = treeLength(node.right);
//   debugger;
//   return Math.max(left, right) + 1;
// }
function isMirror(node) {}

// traverseBfs(callback) {
//   const queue = [this.root];
//   while (queue.length) {
//     const node = queue.shift();

// }
