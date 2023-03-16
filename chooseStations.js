const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

//where a station is a voting station 
function chooseStations(stations) {
  let goodStations = [];

  for (const ele of stations) {
    //where 1 is capacity , 2 is station type
    if (ele[1] >= 20 && (ele[2] == "school" || ele[2] == "community centre")) {
      goodStations.push(ele[0]);
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));
