// where veggies is list of vegetables to be judged
// and the trait is a number to be judged
function judgeVegetable(veggies, trait) {
  let winner = "";
  let top_trait = 0;

  //go through all the contestants
  for (const ele of veggies) {
    if (ele[trait] > top_trait) {
      top_trait = ele[trait]; //update the top contestant
      winner = ele["submitter"];
    }
  }
  return winner;
}

/**
 * TEST
 */

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

console.log(judgeVegetable(vegetables, metric));
