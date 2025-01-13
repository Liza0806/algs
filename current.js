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

class Node {
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
myTree.traverseDfs((node) => {
  console.log(node.value);
}, "preOrder");
myTree.traverseDfs((node) => {
  console.log(node.value);
}, "inOrder");
myTree.traverseDfs((node) => {
  console.log(node.value);
}, "postOrder");
myTree.traverseBfs((node) => {
  console.log(node.value);
});
