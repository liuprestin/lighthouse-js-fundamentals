let counter = 100;

while (counter <= 200) {
  //if its a multiple of 3 AND 4
  if (counter % 3 == 0 && counter % 4 == 0) {
    console.log("LoopyLighthouse");
  } else if (counter % 3 == 0 || counter % 4 == 0) {
    // multiple of 4
    if (counter % 4 == 0) {
      console.log("Lighthouse");
    }
    // multiple of 3
    if (counter % 3 == 0) {
      console.log("Loopy");
    }
  } else {
    console.log(counter);
  }
  counter += 1;
}
