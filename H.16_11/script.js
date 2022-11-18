// TASK 1

// let browser = 'Chrome'
// switch (browser) {
//     case 'Edge':  //browser uzgaruvchimizni 'Edge'ga tenglasak terminalda 'You have got the Edge' degan javob chiqadi chunki shart qanoatlanyapti

//         console.log('You have got the Edge');
//         break;
//                   //browser uzgaruvchimizni 'Chrome','Firefox','Safari','Opera'dan biriga  tenglasak terminalda 'Okay, we support these brousers too' degan javob chiqadi chunki shart qanoatlanyapti
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         console.log('Okay, we support these brousers too');
//         break;

//     default:  //browser uzgaruvchimizni yuqoridagi qiymatlardan boshqa harqanday nom bilan qiymat kiritganimizda 'we hope that this page looks ok!' degan javobni olamiz bu ifdagi else kabi ishlaydi. yani hech qaysi shart qanoatlanmaganda chiqadigan qiymat.

//         console.log('we hope that this page looks ok!');
//         break;
// }

// ===========================================================================================================================================================

// TASK 2

// let a = 1;

// if (a == 0) {        // a 0ga teng bulsa 0 chiqadi chunki shart qanoatlanadi
//     console.log(0);
// }

// if (a == 1) {       // a 1 ga teng bulsa 1 chiqadi chunki shart qanoatlanadi
//     console.log(1);
// }

// if (a == 2 || a == 3) {  // a 2 ga yoki 3 teng bulsa 1 chiqadi chunki shart qanoatlanadi
//     console.log('2, 3');
// }

// ===========================================================================================================================================================

// TASK 2

// Prime numbers
// var a = 33;
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(`${i}  not a prime `);
//     }else {
//         console.log(`${i}  a prime `);
//     }
    // console.log(i);
// }


// ===========================================================================================================================================================

// KARRA JADVALI

for (let i = 2; i < 10; i++) {
   for (let j = 1; j < 10; j++) {
    
    console.log( `${i} * ${j} == ${i * j}`);
   }
    console.log(`Karra jadvali`);
}