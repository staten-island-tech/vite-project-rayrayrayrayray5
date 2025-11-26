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
  {
    title: "Baby I'm Bleeding",
    artist: "JPEGMAFIA",
    length: "2:32",
    cover: "/babyimbleeding.png",
  },
  {
    title: "We Don't Leave the House",
    artist: "glaive",
    length: "2:25",
    cover: "/yall.png",
  },
  {
    title: "MONDAY",
    artist: "Quadeca",
    length: "4:03",
    cover: "/monday.webp",
  },
  {
    title: "It's You",
    artist: "Ninajirachi, daine",
    length: "2:49",
    cover: "/ilmc.jpg",
  },
  {
    title: "PIXELATED KISSES",
    artist: "Joji",
    length: "1:50",
    cover: "/pixelatedkisses.webp",
  },
  {
    title: "BLEACH",
    artist: "BROCKHAMPTON",
    length: "4:33",
    cover: "/sat3.png",
  },
  {
    title: "Stateside",
    artist: "PinkPantheress",
    length: "2:48",
    cover: "/stateside.webp",
  },
];

function inject(item) {
  const container = document.querySelector(".app");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div><img class="png" src="${item.cover}"> 
        <h2>${item.title}</h2>
        <h2>${item.artist}</h2>
        <h2 >${item.length}</h2>
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
