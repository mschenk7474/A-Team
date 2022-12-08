const activities = await fetch("../data/activities.json").then((res) =>
  res.json()
);

console.log(activities);
var currentIndex = 0;

// Change the image
const changeImage = (index) => {
  const main_image = document.getElementById("featured-img");
  main_image.src = activities[index].icon;
};

const spawnButton = () => {
  const featured_iterator = document.getElementById("featured-iterator");
  activities.map((activity, index) => {
    const div = document.createElement("div");
    div.innerHTML = index;
    featured_iterator.appendChild(div);
  });
};

const changeInfo = (index) => {
  const featured_content_div = document.getElementById("featured-content");
  const featured_header = document.createElement("h1");
  featured_header.innerHTML = activities[index].name;
  const featured_p = document.createElement("p");
  const featured_p_value = document.createTextNode(
    activities[index].description
  );
  featured_p.appendChild(featured_p_value);
  featured_content_div.appendChild(featured_header);
  featured_content_div.appendChild(featured_p);
};

const loadAll = (index) => {
  changeImage(index);
  spawnButton();
  changeInfo(index);
};

loadAll(0);
