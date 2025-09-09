//Create an array named numbers.
//Initialize it as an empty arry.
//Add an element at as pecific intex in the arry.
//write a function print all elements ()that inserts an element at a given index.
//print all elements of the array
//write a function print all elements ()that prints the entire array
//print a selectet range of elements in the array
//write a function print range (starts end)that prints elements fron index











function addAnElement(numbers,index,value){
    if (index<0 || index >=numbers.length){
        console.log("invalite index value");
    }
    else{
        numbers.splice(index,0,value);
        console.log("new array is"+numbers);
 }
}
addAnElement(numbers,0,5);