/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    const checkSymbol = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};
    const charArr = s.split("");
        
    charArr.forEach((symbol,idx)=>{
        let now = checkSymbol[symbol];
        let next = checkSymbol[charArr[idx+1]];
        
        if(now >= next || next == undefined){
           result += now;
          }else{
           result -= now; 
        }
    });
    
    return result;
};