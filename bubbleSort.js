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