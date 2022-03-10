/**
3. Given a 2-d matrix of characters, write a function that takes this 2-d matrix
    and a string and returns whether the string can be formed using characters
    of this string. Note that one character from the matrix can be used only 
    once."  
*/


let possibleStringFromMatrix=(matrix,word)=>{
    let obj={}
    let obj2={}
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            obj[matrix[i][j]]=obj[matrix[i][j]]+1||1;
        }
    }
    for(let i=0 ;i<word.length;i++){
        obj2[word[i]]=obj2[word[i]]+1||1
    }
    let isPossible;
    for(let i in obj2){
        if(obj.hasOwnProperty(i)){
            isPossible=false;
            if(obj[i]===obj2[i]){
                isPossible=true;
            }
        }
    }
    return isPossible;
    
}

console.log(possibleStringFromMatrix([ [ "A", "B", "C", "E" ],
[ "S", "F", "C", "S" ],
[ "A", "D", "E", "E" ],],"CFDASABCESEE"))