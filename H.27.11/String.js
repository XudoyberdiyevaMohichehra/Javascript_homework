// TASK 1. check(str1, str2) function yozilsin. berilgan parametrlar bir biriga mos yoki umuman tugri kelmasligi va qisman
//  tug'ri ekanligini ifodalovchi natija qaytarsin. 
// ex = str = "webbrain", str = "acsa"

// function check(str1, str2) {
//     let res = (str1 === str2) ? console.log("To'liq mos") : console.log("qisman") ? (str1.includes(str2) || str2.includes(str1)) :console.log( "umuman");
//     return res
// }
// check("webbrain", "webbr");

//  function check(str1, str2) {
//    if(str1 === str2)
//    return "To'liq mos keladi"
//    if(str1.includes(str2))
//    return "qisman mos keladi"
//    return "umuman mos kelmaydi"
// }
// console.log(check("webbrain", "acsa")); 



// TASK 2 getCounter(str)- function yozilsin. function str dagi harflar sanogini chiqarib bersin.
// ex: str = "webbrain" {w: 1, e: 1, b: 2, r:1, a: 1, i: 1, n:1}

// function getCounter(str){
//     let res = {}
//     for(char of str){
//       if(char in res) res[char] ++
//       else res[char] = 1
//   }
//    return res
// }
// console.log(getCounter("Mohichehra"));



// TASK 3. truncate(str, n) -- function yozilsin. Berilgan stringdan n ta harf ajratib chiqarib bersin.
// ex: str = "webbrain academy", n = 5
// res: "webbr"

// function truncate(str, n) {
//     return str.slice(0, n)
// }
// console.log(truncate("webbrain", 5));


// TASK 4. getCurrency(str)-- berilgan pul birligini faqat raqamlarini ajratib chiqaring. 
// ex: str = "$1200" -- 1200.

// function getCurrency(str) {
//     let num = "";
//     for(char of str){
//       if(!isNaN(char)){num+= char}
//       console.log(str);
//     }
//     return +num
// }
// console.log(getCurrency("$1200"));



// TASK 5. Berilgan string ichidan raqam, string  va characterlarni alohida sanog'i bilan chiqaring.
// ex: "webbr@!n_2022", res: {letter: 6, char: 3, numbers: 4}

// function sortChar(str) {
//   let res = {letter: 0, char: 0, numbers: 0}
//   let letters = "ABCDEFGHIJKLMNOPQRSTUVXWZYabcdefghijklmnopqrstuvxwyz"
//   for(char of str){
//     if(!isNaN([char]))res.numbers++
//     else if(letters.includes([char])) res.letter++
//     else res.char++
//   }
//     return res
// }
// console.log(sortChar("webbrr@!n_20262!!@!!!"));

