const activities = await fetch("../data/activities.json").then((res) =>
  res.json()
);

console.log(activities);

//
