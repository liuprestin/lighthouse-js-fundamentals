const whichSchool = function (age) {
    //note: could type check age 

    if (age < 13) {
        return "Elementry School";
    }else if ((age >= 13) || (age <= 18) ){
        return "Secondary School"
    }else {
        return "Lighthouse Labs"
    }

}

console.log(whichSchool("2"));

/**
 * Example Output:
 * 
 * console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));
 */