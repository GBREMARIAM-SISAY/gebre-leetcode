/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let myarr=[]
    let str;
    for(let i=1; i<=n ; i++ ){
        str=''
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