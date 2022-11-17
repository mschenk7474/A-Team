import { DataHandler } from "./DataHandler.js";

var dataHandler = new DataHandler();
dataHandler.init();

var categories = dataHandler.getCategories();

console.log(categories);

function displayTags() {}

function filter(data, key, value, isArray = false) {
  if (value == "") {
    // no value specified by user, no filtering to be done
    return data;
  }
  for (var i = 0; i < data.length; i++) {
    var dataArray = data[i][key];
    if (!value.some((e) => dataArray.includes(e))) {
      data.splice(i, 1);
      i--;
    }
  }
  return data;
}

console.log(filter([{ cat: 1 }, { cat: 3 }], "cat", [1], true));

var url = new URL(window.location);

var targetCats = url.searchParams.getAll("tag") || [0]; // Get target languages as array of strings
console.log(targetCats);

//    categories = filter(categories, "id", targetCats, true);
//    display(categories, $("#engine-display"));
