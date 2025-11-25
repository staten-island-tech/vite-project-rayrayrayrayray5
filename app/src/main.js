import "./style.css";
let song = [
  {
    title: "The Power of Madonna",
    artist: "Devon Hendryx",
    length: "5:36",
    cover: "/jcw.jpg",
  },
  {
    title: "soulja boy 2009",
    artist: "Illusion Hills",
    length: "3:44",
    cover: "/sb2009.webp",
  },
  {
    title: "BREAKUP",
    artist: "Tiffany Day",
    length: "3:44",
    cover: "/breakup.png",
  },
];

function inject(item) {
  const container = document.querySelector(".app");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div><img src="${item.cover}"> 
        <h2>${item.title}</h2>
        <h2>${item.artist}</h2>
        <h2>${item.length}</h2>
      </div>`
  );
}
song.forEach((element) => {
  inject(element);
});

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});
