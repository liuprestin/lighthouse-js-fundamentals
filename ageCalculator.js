function ageCalculator(name, yearOfBirth, currentYear) {
  //input type check
  if (typeof yearOfBirth != "number" || typeof currentYear != "number") {
    return "input a number for year(s)";
  }

  let age = currentYear - yearOfBirth;
  return `${name} is ${age} years old.`;
}

console.log(ageCalculator("Kat", 1984, 2020));
