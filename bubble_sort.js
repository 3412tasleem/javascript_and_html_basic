let arr = [19, 1, 23, 3, 66, 45, 100];
for (var j = 0; j < arr.length; j++) {
for (var i = 0; i < arr.length - j - 1; 
i++) {
if (arr[i] > arr[i + 1]) {
let temp = arr[i];
arr[i] = arr[i + 1];
arr[i + 1] = temp;
}
}
}
console.log(arr);
