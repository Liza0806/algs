//// сортировка пузырьком

// Принцип работы
// 1.	Проходим по массиву n−1 раз, где n — длина массива.
// 2.	На каждой итерации сравниваем текущий элемент с соседним.
// 3.	Если текущий элемент больше следующего (для сортировки по возрастанию), меняем их местами.
// 4.	После первого прохода самый большой элемент оказывается на своём месте (в конце массива).
// 5.	Повторяем процесс для оставшихся элементов.

function bubbleSort(array) {
  debugger;
  const n = array.length;

  for (let i = 0; i < array.length - 1; i++) {
    debugger;
    for (let j = 0; j < array.length - i - 1; j++) {
      //                                       //// в этом цикле мы проходимся по массиву и двигаем 1 цифру вперед, то есть на 1й ит
      debugger; //                             //// меняем 5 и 3, потом 5 и 8 не меняем, потом меняем 8 и 4 и 8 и 2
      //                                       //// итого 8 выползла направо как точно самый большой элемент массива за 1 круг внутр.цикла
      if (array[j] > array[j + 1]) {
        //                                      //// соотв-но это условие: (let j = 0; j < array.length - i - 1; j++) значит, что на сл цикле
        debugger; //                            //// мы не будем пробегать весь массив тк 100% знаем после 1го цикла, что 8 уже крайняя справа, тк самая большая
        // Меняем местами                       //// => j < array.length - i - 1 каждый БОЛЬШОЙ (наружный) круг сокращает массив для внутреннего круга на 1 эл-т
        [array[j], array[j + 1]] = [array[j + 1], array[j]]; //// тк при первой ит-ии на внутреннем круге самый большой элемент уже уполз вправо и идти до него нет смысла
        debugger; //                           //// каждый цикл внутренний 1 эл-т (сам.большой из оставшихся) ползет вправо
      } //                                     //// на сл.цикле сл.элемент попробует доползти максимально правее
      debugger; //                             //// итого когда каждый попробует (усл-е большого круга - перебор всех эл-тов:  for (let i = 0; i < array.length - 1; i++) )
    } //                                       //// итоговая конструкция - цикл в цикле, весь движ - во внутреннем цикле
    debugger;
  }
  console.log(array);
  debugger;
  return array;
}

let a = [5, 3, 8, 4, 2];
//bubbleSort(a);

///// Selection Sort (Сортировка выбором)

// 1.	Разделите массив на две части:
// o	Сортированная (вначале пустая).
// o	Несортированная (изначально весь массив).
// 2.	Найдите минимальный элемент в несортированной части.
// 3.	Поменяйте местами минимальный элемент с первым элементом несортированной части.
// 4.	Увеличьте размер сортированной части на 1.
// 5.	Повторяйте, пока весь массив не станет отсортированным.

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
// selectionSort(a)

/// Insertion Sort (Сортировка вставками)

// Как работает алгоритм
// 1.	Считаем первый элемент массива отсортированным.
// 2.	Переходим ко второму элементу и сравниваем его с элементами отсортированной части.
// o	Если он меньше, перемещаем его в нужное место.
// 3.	Повторяем шаги для каждого следующего элемента, расширяя отсортированную часть массива.
// 4.	В результате весь массив становится отсортированным.

const insertionSort = (arr) => {
  //let a = [5, 3, 8, 4, 2]; //                                                                         3я ит// [3, 5, 8, 4, 2];
  for (let i = 1; i < arr.length; i++) {
    //                                                                                           ||| нач с 8, тк і = 3
    let current = arr[i]; //                  // Текущий элемент, типа отсортированный на 1й ит это 3, тк i начиналось с 1го в цикле  ||| каррент = 4
    let j = i - 1; //                         // индекс предыдущего элемента, на 1й итерации равен 0, сам эл-т на 1й итерации = 5     ||| j = 2
    debugger; //                                                                                                                            ||| while (2 >= 0 && 8 > 4) попадаем в цикл   ///(на 2й ит было while (1 >= 0 && 5 > 8)) и не попали
    // Сдвигаем элементы вправо, чтобы найти место для текущего элемента                                                              ||| arr[j + 1] = arr[j] => [3, 5, 8, 8, 2]
    while (j >= 0 && arr[j] > current) {
      // тут сравниваем на 1й ит 5 и 3, => ( 0 >= 0 && 5  > 3 ), попадаем в цикл                  |||   j--; => j=1 => (1 >= 0 && 5 > 4) => [3, 5, 5, 8, 2]
      arr[j + 1] = arr[j]; //следующий заменяем предыдущим  (на 1й ит получается  [5, 5, 8, 4, 2])                                    ||| j--; => j=0 => (0 >= 0 && 3 > 5) - 2е усл не вып, т.е в цикл не идем
      j--; // а тут мы ползем сравнивать влево, чтобы не оставить после того, как поменяли, а, если надо, поменять левее              |||
      debugger; // но, тк на 1й ит  j--; получается -1, то во 2й раз в цикл мы не заходим, тк  while (j >= 0 && arr[j] > current)      |||  arr[j + 1] = current; => arr[0 + 1] = 4; => [3, 4, 5, 8, 2]
    } // что логично, ибо двигать левее нулевого элемента не получится                                                       |||
    debugger; //                                                                                                                        |||
    // Вставляем текущий элемент в правильное место
    arr[j + 1] = current; // возвращаем тройку на место: arr[j + 1] = arr[0] = 3, см стр где объявлялся каррент
    debugger;
  }
  debugger;
  console.log(arr);
  return arr;
};

///  insertionSort(a); // Вывод: [2, 3, 4, 5, 8]

// Binary Search (бинарный поиск)
// 3. Идея алгоритма:
// 1.	Сравниваем искомый элемент с элементом в середине массива:
// o	Если он равен среднему, возвращаем его индекс.
// o	Если он меньше среднего, ищем в левой половине массива.
// o	Если он больше среднего, ищем в правой половине массива.
// 2.	Повторяем шаги до нахождения элемента или сужения диапазона до пустого (если элемент отсутствует).

const binarySearch = (arr, left, right, x) => {
  let midInd = Math.floor((right + left) / 2); // ищем серединку

  if (left > right) {
    // в конце концов правый край и левый сойдутся, и тогда можно заканчивать, тк массива больше не осталось
    return -1;
  }
  if (arr[midInd] === x) {
    // удачный сценарий, нашли
    console.log(midInd);
    return midInd;
  }
  if (x > arr[midInd]) {
    //если х больше, то он в правой стороне, двигаем интересующую нас часть массива вправо
    binarySearch(arr, midInd + 1, right, x); // запускаем функцию еще раз
  }
  if (x < arr[midInd]) {
    binarySearch(arr, left, midInd - 1, x); // если х меньше, сдвигаем чать массива, в которой ищем, влево
  }
  ////////////// И ПОМНИ, ТУТ ТОЛЬКО ИНДЕКСЫ, МЫ НИГДЕ НИЧЕГО ФУНКЦИЯМИ НЕ ПРОБЕГАЕМ, ПРОСТО СОКРАЩАЕМ ДИАПАЗОН ИНДЕКСОВ, ДАЖЕ НЕ САМ МАССИВ //////////////////////
};
// binarySearch(array, 0, array.length - 1, 7)
let array = [1, 3, 5, 7, 9, 11];
const anotherBinarySearch = (arr, x) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // рекурсию переписываем циклами и чаще это while. Удобно, тк сразу и условие выхода
    let midInd = Math.floor((right + left) / 2); // индекс будет динамически на каждом цикле свой
    if (arr[midInd] === x) {
      console.log(midInd);
      return midInd;
    }

    if (x > arr[midInd]) {
      left = midInd + 1; // и на каждом цикле переназначаем лефт или райт, в зависимости от случая
    }
    if (x < arr[midInd]) {
      right = midInd - 1;
    }
  }
  return -1;
};
////////////// ОБРАТИ ВНИМАНИЕ, ЧТО В БИНАРНОМ ПОИСКЕ БЕЗ РЕКУРСИИ ТЕБЕ МОЖНО НЕ ПЕРЕДАВАТЬ ЛЕФТ И РАЙТ  //////////////
////////////// впрочем, как напишешь, так и будет //////////////
//anotherBinarySearch(array, 7);

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

//const arra = [8, 3, 5, 4, 7, 6, 2, 1];
//const sortedArray = mergeSort(arra);
//console.log(sortedArray); // [1, 2, 3, 4, 5, 6, 7, 8]
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
console.log(mergeSortObj(dataA, "age"));

const mergeSortEvenOdd = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const l = arr.slice(0, mid);
  const r = arr.slice(mid);
  const sortedL = mergeSortEvenOdd(l);
  const sortedR = mergeSortEvenOdd(r);
  return mergeEvenOdd(sortedL, sortedR);
};
const mergeEvenOdd = (left, right) => {
  let i = 0;
  let j = 0;
  let resOdd = [];
  let resEven = [];
  let final = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      left[i] % 2 === 0 ? resOdd.push(left[i]) : resEven.push(left[i]);
      i++;
    } else {
      right[j] % 2 === 0 ? resOdd.push(right[j]) : resEven.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    left[i] % 2 === 0 ? resOdd.push(left[i]) : resEven.push(left[i]);
    i++;
  }
  while (j < right.length) {
    right[j] % 2 === 0 ? resOdd.push(right[j]) : resEven.push(right[j]);
    j++;
  }
  return [...resOdd, ...resEven];
};
console.log(mergeSortEvenOdd([5, 2, 4, 7, 8, 3, 6, 1]));
