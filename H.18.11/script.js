// TASK 1

// for (let i = 0; i < 3; i++) {
//         console.log(`Number ${i} !`); 
// }

// let i = 0;
// while (i < 3) {
//     console.log(`Number ${i} !`);
//     i++
// }

// 1. for loop while loopga o'zgartirildi. 
// 2. ikkalasida ham natija bir xil: ularning farqi sintaksisida.
// For loopda boshlangich nuqta ham shart ham qadam uzunligi ham bir qavsning ichida beriladi.
// While loopda esa 3 lasi alohida yoziladi.

// ==================================================================================

// TASK 2

// function checkAge(age) {
//     if (age >= 18) {
//         return true;
//     }else{
//         return 'Did parents allow you?';
//     }
// }
// console.log(checkAge(14));

// yoshni aniqlaydigan programma tuzildi.
// agar 18 ga teng yoki 18 dan katta bo'lsa return true qaytarsin.
// agar 18 dan kichkina  bo'lsa  return 'Did parents allow you?' qaytarsin.

// =========================================================================================

// task 3 
// Yuqoridagi task 2   Ternary shart operatori ? :  yoki || or operatori orqali bajarilsin

// function checkAge(age) {
//     (age >= 18) ?  console.log(true) : console.log( 'Did parents allow you?');
// }
// checkAge(10);


// function checkAge(age) {
//     age >= 18 && console.log(true) ||  age < 18 && console.log('Did parents allow you?');
// }
// checkAge(92);

// ===================================================================================================

// TASK 4
// minimum sonni  topish

// function findMin(a, b) {
//     if (a < b) console.log(a);
//     else console.log(b);
// }
// findMin(11, 10)


// ===================================================================================================

// TASK 5
// Sonning darajasini topish

// function getSquare(son, daraja) {
//     let result = 1;
//     for (let i = 0; i < daraja; i++) {
//         result *= son
//     }
//     return result
// }
// console.log(getSquare(2, 4));



// ===================================================================================================

// TASK 6
// Function declarationni Arrow functionga o'zgartiring.

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }

// ask(
//     "Do you agree?",
//     function () {alert("You agreed.");},
//     function () {alert("You canceled the excution.");}
// )



const ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
     () => alert("You agreed."),
     () => alert("You canceled the excution.")
)