
function moment() {
    return  {format : function (p){
        let date = new Date()
        let LLarr = ['January','February','March','Aprel','May','June','July','August','September','October','November','December']
        let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let minuts = `${date.getHours()}:${date.getMinutes()}`
        let minresult = (date.getHours() > 12) ? "PM" : 'AM'
        let seconds = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        let secresult = (date.getHours() > 12) ? "PM" : 'AM'
        let Lres = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} `;
        let LLres = `${LLarr[date.getMonth()]} ${date.getMonth() + 1}, ${date.getFullYear()} `
        let llres = `${LLarr[date.getMonth()].slice(0,3)} ${date.getMonth() + 1}, ${date.getFullYear()} `
        let LLLLres = `${week[date.getDay()]}, `
        let llllres = `${week[date.getDay()].slice(0,3)}, `

        if(p === 'LT') return minuts + ' '+ minresult
        else if(p === 'LTS') return seconds + ' '+ secresult
        else if(p === 'LL') return LLres
        else if(p === 'll') return llres
        else if(p === 'LLL') return LLres + ' ' + minuts + ' '+ minresult
        else if(p === 'lll') return llres + ' ' + minuts + ' '+ minresult
        else if(p === 'LLLL') return LLLLres + LLres + ' ' + minuts + ' '+ minresult
        else if(p === 'llll') return llllres + llres + ' ' + minuts + ' '+ minresult
        else if(p === 'L' || 'l') return Lres
    
    }}
}
console.log(moment().format('llll'));
