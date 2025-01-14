// Binary Search (бинарный поиск)
//  Идея алгоритма:
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
let array = [1, 3, 5, 7, 9, 11];
// binarySearch(array, 0, array.length - 1, 7)

// ОБРАТИ ВНИМАНИЕ, ЧТО В БИНАРНОМ ПОИСКЕ БЕЗ РЕКУРСИИ //
      // ТЕБЕ МОЖНО НЕ ПЕРЕДАВАТЬ ЛЕФТ И РАЙТ  //

// поиск без рекурсии

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
