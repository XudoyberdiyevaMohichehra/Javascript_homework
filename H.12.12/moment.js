// task 1
// let moment = {locale: function () {
//      console.log('en');
// }}
// moment.locale()

// task 2  moment()format('LT')---> 8:10 AM
// function format(p) {
//     let date = new Date()
//     let resu = `${date.getHours()}:${date.getMinutes()}`
//     let result = (date.getHours() > 12) ? "PM" : 'AM'
//      if(p === 'LT') return resu + ' '+ result
// }
// console.log(format('LT'));

// task 3  moment()format('LTS')---> 8:10:32 AM
// function format(p) {
//     let date = new Date()
//     let seconds = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
//     let secresult = (date.getHours() > 12) ? "PM" : 'AM'
//      if(p === 'LTS') return seconds + ' '+ secresult
// }
// console.log(format('LTS'));


// task 4 and 5  moment()format('L')---> 12/12/2022
// function format(p) {
//     let date = new Date()
//     let Lres = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} `;
//     if(p === 'L' || 'l') return Lres
// }
// console.log(format('l'));


// task 6  moment()format('LL')---> december 12, 2022
// function format(p) {
//     let date = new Date()
//     let LLarr = ['January','February','March','Aprel','May','June','July','August','September','October','November','December']
//     let LLres = `${LLarr[date.getMonth()]} ${date.getMonth() + 1}, ${date.getFullYear()} `
//     if(p === 'LL') return LLres
// }
// console.log(format('LL'));


// task 7  moment()format('ll')---> dec 12, 2022
// function format(p) {
//     let date = new Date()
//     let llarr = ['January','February','March','Aprel','May','June','July','August','September','October','November','December']
//     let llres = `${llarr[date.getMonth()].slice(0,3)} ${date.getMonth() + 1}, ${date.getFullYear()} `
//     if(p === 'll') return llres
// }
// console.log(format('ll'));




// function getToday(p) {
//     let date = new Date()
//     let res = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} `
//     if(p == 'll') return res
//     else if(p === 'LL') return 'hello'
//     else return 'You are my honey'
// }
// console.log(getToday('LL'));;

// function getMonth(p) {
//     if(p == 'll') return 'Hello'
// }
// console.log(getMonth('ll'));

// function moment() {
//     return  {format : function (p){
//         let date = new Date()
//         let minuts = `${date.getHours()}:${date.getMinutes()}`
//         let minresult = (date.getHours() > 12) ? "PM" : 'AM'
//         let seconds = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
//         let secresult = (date.getHours() > 12) ? "PM" : 'AM'
//         let Lres = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} `;
//         let LLarr = ['January','February','March','Aprel','May','June','July','August','September','October','November','December']
//         let LLres = `${LLarr[date.getMonth()]} ${date.getMonth() + 1}, ${date.getFullYear()} `
//         let llres = `${LLarr[date.getMonth()].slice(0,3)} ${date.getMonth() + 1}, ${date.getFullYear()} `

//         if(p === 'LT') return minuts + ' '+ minresult
//         else if(p === 'LTS') return seconds + ' '+ secresult
//         else if(p === 'LL') return LLres
//         else if(p === 'll') return llres
//         else if(p === 'L' || 'l') return Lres
    
//     }}
// }
// console.log(moment().format('ll'));