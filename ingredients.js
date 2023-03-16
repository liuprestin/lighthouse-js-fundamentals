const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let counter = 0;
while(counter < (ingredients.length - 1)){
    console.log(ingredients[counter]);
    counter += 1;
}

// Write a for loop that prints out the contents of ingredients:
for (const ele of ingredients){
    console.log(ele);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
let swapped_ingredients = ingredients.reverse();
for (const ele of swapped_ingredients){
    console.log(ele);
}

// another possible way is to use the .pop() method in the array 