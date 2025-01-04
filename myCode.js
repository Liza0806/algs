const buubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - i -1; j++){
            let temp = arr[j];
            if (arr[j]>arr[j+1]){
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
console.log(arr)
}
let b = [5, 3, 8, 4, 2]; 
//buubbleSort(b)