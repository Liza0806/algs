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