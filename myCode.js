const buubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      let temp = arr[j];
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
};
let b = [5, 3, 8, 4, 2];
//buubbleSort(b)

const insertionSortt = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  console.log(arr);
};
//insertionSortt(b)

const reverseString = (str) => {
  if (str.length === 0) {
    return "";
  }
  return str[str.length - 1] + reverseString(str.slice(0, -1));
};

// console.log(reverseString('funnyFunc'));

// reverseString('funnyFunc')

const recursiveFind = (arr, element) => {
  if (arr.length === 0) {
    console.log(false);
    return false;
  }
  if (arr[arr.length - 1] === element) {
    console.log(true);
    return true;
  }
  recursiveFind(arr.slice(0, -1), element);
};

// recursiveFind(b, 3)
// recursiveFind(b, 111)
/// считаем буквы в словах
let str = "abra-cadabra";

const countElements = (str) => {
  let storage = {};
  for (let i = 0; i < str.length; i++) {
    if (!storage[str[i]]) {
      storage[str[i]] = 1;
    } else {
      storage[str[i]] = storage[str[i]] + 1;
    }
  }
  console.log(storage);
  return storage;
};
// countElements(str);
const countElementsRec = (str, storage = {}, index = 0) => {
    if (index===str.length){
        console.log(storage)
        return storage
    }
  if(!storage[str[index]]){
    storage[str[index]] = 1;
    return countElementsRec(str, storage, ++index)
  } else{
    storage[str[index]] = storage[str[index]] + 1;
    return countElementsRec(str, storage, ++index)
  }

}
// countElementsRec(str)

const isPalindrome =(str) => {
 if(str.length === 1 || str.length === 0 ){
    return true
} else {
    if(str[0]===str[str.length-1]){
    return isPalindrome(str.slice(1,-1))
 }
 if(str[0]!==str[str.length-1]){
    return false
 } 
}
}
//console.log(isPalindrome('alla'))
//console.log(isPalindrome('alala'))
//console.log(isPalindrome('alxfhjnxfla'))
const buble = (arr) => {
  let n = arr.length;
for(let i = 0; i < arr.length; i++){
  for (let j = 0; a < arr.length - j - 1; i++) {
    if (array[j] > array[j + 1]) {

[arr[j], arr[j+1]] = [arr[j+1], arr[j]];
    }
  }
}
return array;
}
const sS = (arr) => {
  for(let i = 0; i < arr.length; i++){
      let minInd = i;
  for(let j = i+1; j < arr.length; j++){
    if (array[j] < array[minInd]) {
      minInd=j;
    }
  }
  [arr[i], arr[minInd]] = [arr[minInd], arr[i]];
  }
return arr
}

const iS = (arr)=> {
  for(let i = 0; i < arr.length; i++){
    let curr = arr[i];
    let j = i - 1;
    while (j>=0 && arr[j]> arr[curr]){
      arr[j+1] = arr[j];
      j--
    }
    arr[j+1]=curr;
  }
  return arr;
}
//console.log(iS(array))


const findMin = (arr) => {
  let min = arr[0];
  let ind = 0;
  for (let i = 0; i < arr.length; i++) {
    // делаем отдельную функцию поиска минимального, чтобы не сорить в коде
    if (arr[i] < min) {
      min = arr[i];
      ind = i;
    }
  }
  return { index: ind, minValue: min };
};

const selectionSort = (arr) => {
  let sortedArr = [];
  while (arr.length > 0) {
    // используй тут именно while, так будет короче и красивее - массив уменьшается с каждым сплайсом, это нужно учитывать
    let { index, minValue } = findMin(arr);
    sortedArr.push(minValue);
    arr.splice(index, 1);
  }
  console.log(sortedArr);
  return sortedArr;
};

function dfs(graph, node, visited = new Set()) {
  if (visited.has(node)) return;

  console.log(node); // Действие с узлом
  visited.add(node);

  for (const neighbor of graph[node]) {
    dfs(graph, neighbor, visited);
  }
}
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
