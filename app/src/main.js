import "./style.css";
let song = [
  {
    title: "The Power of Madonna",
    artist: "Devon Hendryx",
    length: "5:36",
    cover: "/jcw.jpg",
    genre: "Hip-Hop",
  },
  {
    title: "soulja boy 2009",
    artist: "Illusion Hills",
    length: "3:44",
    cover: "/sb2009.webp",
    genre: "Hip-Hop",
  },
  {
    title: "BREAKUP",
    artist: "Tiffany Day",
    length: "3:44",
    cover: "/breakup.png",
    genre: ["EDM", "Pop"],
  },
  {
    title: "Baby I'm Bleeding",
    artist: "JPEGMAFIA",
    length: "2:32",
    cover: "/babyimbleeding.png",
    genre: ["Hip-Hop", "EDM"],
  },
  {
    title: "We Don't Leave the House",
    artist: "glaive",
    length: "2:25",
    cover: "/yall.png",
    genre: ["Hip-Hop", "EDM"],
  },
  {
    title: "MONDAY",
    artist: "Quadeca",
    length: "4:03",
    cover: "/monday.webp",
    genre: ["Folk", "Pop"],
  },
  {
    title: "It's You",
    artist: "Ninajirachi, daine",
    length: "2:49",
    cover: "/ilmc.jpg",
    genre: "EDM",
  },
  {
    title: "PIXELATED KISSES",
    artist: "Joji",
    length: "1:50",
    cover: "/pixelatedkisses.webp",
    genre: ["R&B", "Hip-Hop"],
  },
  {
    title: "BLEACH",
    artist: "BROCKHAMPTON",
    length: "4:33",
    cover: "/sat3.png",
    genre: ["Hip-Hop", "Pop"],
  },
  {
    title: "Stateside",
    artist: "PinkPantheress",
    length: "2:48",
    cover: "/stateside.webp",
    genre: ["EDM", "Pop"],
  },
  {
    title: "Bodys",
    artist: "Car Seat Headrest",
    length: "6:46",
    cover: "/csh.jpg",
    genre: "Rock",
  },
  {
    title: "Self Control",
    artist: "Frank Ocean",
    length: "4:09",
    cover: "/blonde.jpg",
    genre: "R&B",
  },
  {
    title: "Baby - Justin Bieber (Cover)",
    artist: "Geese",
    length: "3:51",
    cover: "/babygeese.jpg",
    genre: "Rock",
  },
];

function inject(item) {
  const container = document.querySelector(".app");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" genre-id="${item.genre}" song-id="${item.title}">
        <img class="png" src="${item.cover}"> 
        <h2>${item.title}</h2>
        <h2 class="artist">${item.artist}</h2>
        <h3 class="length">${item.length}</h3>
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

function addSong() {
  let image = document.getElementById("image").value;
  let input = document.getElementById("input").value;
  let ainput = document.getElementById("ainput").value;
  let length = document.getElementById("length").value;
  if (image === "" || input === "" || ainput === "" || length === "") {
    alert("Enter Something");
  } else {
    const container = document.querySelector(".app");
    container.insertAdjacentHTML(
      "afterbegin",
      `<div class="card" song-id="${input}">
        <img class="png" src="${image}"> 
        <h2>${input}</h2>
        <h2 class="artist">${ainput}</h2>
        <h3 class="length">${length}</h3>
      </div>`
    );
  }
}
const addButton = document.querySelector(".addSongButton");
addButton.addEventListener("click", function () {
  addSong();
});

function filterButton() {
  const container = document.querySelector(".app");
  container.innerHTML = "";
  let filteredSongs = song;
  if (type !== "all")
    filteredSongs = song.filter((item) => item.genre === type);
  filteredSongs.forEach((item) => inject(item));
}
const filterBtn = document.querySelectorAll(".filter");
filterBtn.forEach((thing) => {
  thing.addEventListener("click", () => {
    const yes = filterBtn.getAttribute("genre-id");
    filterButton(yes);
  });
});

/*Create array
inject array

*/
