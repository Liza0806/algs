// Выбор опорного элемента (pivot):

// Выберите один элемент массива в качестве опорного
// (обычно первый, последний, средний или случайный элемент).

// Разделение массива:
// Разделите массив на три части:
// элементы, меньшие опорного (левая часть);
// элементы, равные опорному (центральная часть);
// элементы, большие опорного (правая часть).

// Рекурсивная сортировка:
// Рекурсивно примените алгоритм quick sort к левой и правой частям массива.
// Центральная часть уже отсортирована.

// Объединение:
// Объедините три части массива: сначала левая часть,
// затем центральная (опорный элемент), и затем правая часть.

// Завершение:
// Повторяйте шаги, пока массивы не станут размером в один элемент или пустыми.
// В конце получите отсортированный массив.

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[Math.floor(arr.length / 2)];
  let less = [];
  let greater = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === pivot) continue;
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
};

const quickSortAbc = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    let pivot = arr[Math.floor(arr.length / 2)];
    let less = [];
    let greater = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === pivot) {
        continue;
      } else if (arr[i].localeCompare(pivot) < 0) {
        less.push(arr[i]);
      } else if (arr[i].localeCompare(pivot) > 0) {
        greater.push(arr[i]);
      }
    }
    return [...quickSortAbc(less), pivot, ...quickSortAbc(greater)];
  };
  const arrAbc = ["apple", "banana", "orange", "grape", "pear"];