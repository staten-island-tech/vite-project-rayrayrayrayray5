import "./style.css";
song = [
  {
    title: "The Power of Madonna",
    artist: "Devon Hendryx",
    length: 2,
    cover: "public/jcw.jpg",
  },
  {
    title: "The Power of Madonna",
    artist: "Devon Hendryx",
    length: 2,
    cover: "public/jcw.jpg",
  },
];
/* function inject(item) {
  const container = document.querySelector(".app");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div><img src="${item.cover}"> 
        <h2>"${item.title}"</h2>
        <h2>"${item.artist}"</h2>
        <h2>"${item.length}"</h2>
      </div>`
  );
}
song.forEach((element) => {
  inject(element);
});
 */

function inject(item) {
  //query the html where we inject the card
  const container = document.querySelector(".app");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" data-id="${item.title}" data-price="${item.length}">
            <h2 class="card-header">${item.title}</h2>
            <img class="card-img" src="${item.cover}" alt="${item.title}" />
            <h3 class="card-price">$${item.length}</h3>
            <button class="button">Buy Now</button>
        </div>`
  );
}

song.forEach((element) => {
  inject(element);
});
