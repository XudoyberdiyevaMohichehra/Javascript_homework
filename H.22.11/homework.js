
// #    /////////////////object/////////////////
// No1
// object keylarini toping
// let obj={
//     id:1,
//     name:"WebBrain"
// }
// for(let i in obj){
//     console.log(i);
// }
// chiqish
// id,name
// =============================================================================================

// No2
// object valuelarining raqamga tenglarini toping
// let obj={
//     id:1,
//     founded: 2020,
//     name:"WebBrain"
// }
// for(let i in obj){
//     if(typeof obj[i] == 'number')
//     console.log(i);
// }

// chiqish
// id
// =============================================================================================

// No3
// object valuelarining boolean tipidagi malumotlrini qaytaring keylari bn biriga

// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }

// let total = {}

//   for(let i in obj){
//     if(typeof obj[i] == 'boolean'){
//         total[i] = obj[i]
    // }
// }

// console.log(total);


// chiqish
// {   offline:true,
//     online:true,
//     individual:false
// }
// ====================================================================================================================

// No4
// object va string berilgan .agar object keylari ichida stringga teng bolgan key bolsa shu key va valueni chiqazing

// let obj={
//     id:1,
//     name:"WebBrain",
//     nam:"academy",
//     offline:true,
//     online:true,
//     individual:false
// }
// function Search(obj,str){
//     for(let i in obj){
//         if(obj[i] == str)
//         console.log(`${i}:  ${obj[i]}`);
//     }
// }
// Search(obj, 'academy')

// chiqish
//     name:"WebBrain"
// ===============================================================================================================

// No5
// object va string berilgan.  string bor bolgan object valuelarining chiqaring

// let obj={
//   id:1,
//   name:"atirgul",
//   color:"qizil",
//   count:10,
//   price:"10$",
//   price2:"10$yu"
// }
// function searchValue(i) {
//     for(let i in obj){
//         if(typeof obj[i] == 'string'){
//              console.log(obj[i]);
//         }
    
//     }
// }
// searchValue( 'i');
// searchValue(obj,'i') => atirgul,qizil
// ================================================================================================================
