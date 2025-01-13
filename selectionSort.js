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