// check if number is ODD 
function isOdd(num){
    if (typeof(num ) === "number" ){
        return (num % 2) != 0;
    }
    return "Not a number"; // if its not a number it can't be odd or even
    
}

// quick testing 
// console.log(isOdd(70));