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
function inject(item) {
  const container = document.querySelector("#app");
  container.insertAdjacementHTML(
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
