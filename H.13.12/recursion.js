// task 1 n gacha bolgan raqamlar yigindisi
// Recursion function
// let num = 4;
// let sum = 0;

// for (let i = 1; i <= num; i++) {
//     sum= sum + i
// }
// console.log(sum);
// let res = 0;
// function getSum(s) {
    
//     if (s === 1) {
//         return res += 1
//     }else{
//         res += s
//         return getSum(s - 1)
//     }
// }
// getSum(100);
// console.log(res);

// let sum = 0;
// function getFactorial(s) {
//     if(s === 0)  return  sum
//      sum += s
//      return  getFactorial(s-1)
   
   
// }
// console.log(getFactorial(4));;



// Task 2 GetFactorial

// function getFactorial(s) {
//     return (s !== 1) ? s * getFactorial(s - 1) : 1
// }
// console.log(getFactorial(4));

// function getFactorial(s) {
//     if (s !== 1) {
//         return s * getFactorial(s - 1)
//     }else{
//         return 1
//     }
// }
// console.log(getFactorial(4));


// function getFactorial(s) {
//     if (s === 1) {
//         return 1
//     }else{
//         return s * getFactorial(s - 1)
//     }
// }
// console.log(getFactorial(4));

// task 3 getFibonachi()

// function getFibonachi(n) {
//     if(n <= 1)return n
//     else return getFibonachi(n - 1) + getFibonachi(n - 2)
// }
// console.log(getFibonachi(19));

// function getFibonachi(n) {
//     let a = 1;
//     let b = 1;
//     for (let i = 2; i < n; i++) {
//        let c = a + b  
//        a = b
//        b = c
//     } 
//     return b
       
// }
// console.log(getFibonachi(19));

// function fastRecursiveFib( n, a=0, b=1 ) {
//     return n <= 2
//     ? a + b
//     : fastRecursiveFib( n - 1, b, a + b );
// }
// console.log(fastRecursiveFib(19));