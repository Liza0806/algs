// Разделение:

// Разделите массив на две примерно равные части.
// Если массив состоит из одного элемента или пуст, он уже считается отсортированным.
// Повторяйте процесс рекурсивно для каждой части,
// пока не останутся массивы из одного элемента.

// Слияние:
// Возьмите два соседних отсортированных подмассива.
// Сравните первые элементы каждого из подмассивов
// и перенесите меньший элемент в результирующий массив.
// Повторяйте процесс, пока один из подмассивов не будет пустым.
// Добавьте оставшиеся элементы из непустого подмассива в результирующий массив.

// Завершение:
// После завершения слияния для всех подмассивов,
// вы получите один отсортированный массив.
// Этот процесс рекурсивно разделяет массив,
// а затем объединяет его обратно в отсортированном порядке.

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor((0 + arr.length) / 2);
  const leftSide = arr.slice(0, middle);
  const rightSide = arr.slice(middle);
  const sortedRight = mergeSort(rightSide);
  const sortedLeft = mergeSort(leftSide);
  return merge(sortedLeft, sortedRight);
};
const merge = (sortedLeft, sortedRight) => {
  const result = [];
  let i = 0; // Указатель для левого массива
  let j = 0; // Указатель для правого массива
  // Сравниваем элементы двух массивов и добавляем наименьший
  while (i < sortedLeft.length && j < sortedRight.length) {
    if (sortedLeft[i] < sortedRight[j]) {
      result.push(sortedLeft[i]);
      i++;
    } else {
      result.push(sortedRight[j]);
      j++;
    }
  }
  while (i < sortedLeft.length) {
    result.push(sortedLeft[i]);
    i++;
  }
  while (j < sortedRight.length) {
    result.push(sortedRight[j]);
    j++;
  }
  return result;
};

const array = [8, 3, 5, 4, 7, 6, 2, 1];

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

const mergeSortAbc = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let l = arr.slice(0, mid);
  let r = arr.slice(mid);
  let sortedL = mergeSortAbc(l);
  let sortedR = mergeSortAbc(r);
  return mergeAbc(sortedL, sortedR);
};
const mergeAbc = (left, right) => {
  let i = 0;
  let j = 0;
  let res = [];
  while (i < left.length && j < right.length) {
    if (left[i][0].localeCompare(right[j][0]) < 0) {
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

//console.log(mergeSortAbc(["banana", "apple", "grape", "kiwi"]))
const data = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 30 },
];
// mergeSort(data, "age");

const mergeSortObj = (arr, field) => {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let l = arr.slice(0, mid);
  let r = arr.slice(mid);
  let sortedL = mergeSortObj(l, field);
  let sortedR = mergeSortObj(r, field);
  return mergeA(sortedL, sortedR, field);
};

const mergeA = (left, right, field) => {
  let i = 0;
  let j = 0;
  let res = [];
  while (i < left.length && j < right.length) {
    if (
      typeof left[i][field] === "string" &&
      typeof right[j][field] === "string"
    ) {
      if (left[i][field].localeCompare(right[i][field]) < 0) {
        res.push(left[i]);
        i++;
      } else {
        res.push(right[j]);
        j++;
      }
    } else if (
      typeof left[i][field] === "number" &&
      typeof right[j][field] === "number"
    ) {
      if (left[i][field] < right[i][field]) {
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
  }
  return res;
};

const dataA = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 30 },
];
// console.log(mergeSortObj(dataA, "age"));

const mergeSortEvenOdd = (arr) => {
  debugger;
  if (arr.length <= 1) {
    debugger;
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const l = arr.slice(0, mid);
  const r = arr.slice(mid);
  const sortedL = mergeSortEvenOdd(l);
  const sortedR = mergeSortEvenOdd(r);
  debugger;
  return mergeEvenOdd(sortedL, sortedR);
};
const mergeEvenOdd = (left, right) => {
  let i = 0;
  let j = 0;
  let resOdd = [];
  let resEven = [];

  while (i < left.length && j < right.length) {
    debugger;
    if (left[i] < right[j]) {
      left[i] % 2 === 0 ? resOdd.push(left[i]) : resEven.push(left[i]);
      i++;
      debugger;
    } else {
      right[j] % 2 === 0 ? resOdd.push(right[j]) : resEven.push(right[j]);
      j++;
      debugger;
    }
  }
  while (i < left.length) {
    left[i] % 2 === 0 ? resOdd.push(left[i]) : resEven.push(left[i]);
    i++;
    debugger;
  }
  while (j < right.length) {
    right[j] % 2 === 0 ? resOdd.push(right[j]) : resEven.push(right[j]);
    j++;
    debugger;
  }
  return [...resOdd, ...resEven];
};
