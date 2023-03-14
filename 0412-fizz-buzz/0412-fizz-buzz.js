/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let myarr=[]
    
    for(let i=1; i<=n ; i++ ){
        let str=''
        if (i%3===0){
            str+='Fizz'
        }
        if(i%5===0){
            str+='Buzz'
        }
        if(i%3!==0 && i%5!==0){
            str+=  `${i}`
        }        
       myarr.push(str) 
   }
    return myarr
};