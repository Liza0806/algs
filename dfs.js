// Depth-First Search (DFS)
// 1.	Начни с выбранной вершины.
// 2.	Отметь её как посещённую.
// 3.	Для каждой соседней вершины:
// o	Если она не посещена, перейди к ней и повтори шаги 1–3.
// 4.	Если все соседи посещены, вернись назад.
//Для DFS (поиск в глубину) используется метод pop() вместо shift(),
// потому что DFS работает по принципу стека (LIFO — Last In, First Out).

function dfs(graph, node, visited = new Set()) {
    if (visited.has(node)) return;
  
    console.log(node); // Действие с узлом
    visited.add(node);
  
    for (const neighbor of graph[node]) {
      debugger;
      dfs(graph, neighbor, visited);
      debugger;
    }
  };

  const graph1 = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E"],
  };
