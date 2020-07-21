// Question 1
let arr =[1,2,3,4,5,6,7,8,9];
 let odd = arr.filter(el=>el%2==0);

 let oddcubes = arr.filter(el=>el%2==0).map(el=>el**3);
 console.log(odd);
 console.log(oddcubes);
















// let arr = [1, 2, 3, 4, 5];
// const oddArr = arr.filter(num => num % 2 === 0);
// console.log(oddArr); 
// function filter(arr, filterFunc) {    const filterArr = [];
//     for(let i=0;i<arr.length;i++)
//     {        const result = filterFunc(arr[i], i, arr);
//         if(result)   filterArr.push(arr[i]);
//     }    return filterArr;}
//     const oddArr2 = filter(arr, num => num % 2 === 0);
//     console.log(oddArr2);


    // Question-1(i)

    // function myDiff(a, b) {
    //     return Math.abs(a - b);
    //  }
    //  document.write(myDiff(-99, 100));