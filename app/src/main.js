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
    genre: "EDM",
  },
  {
    title: "Baby I'm Bleeding",
    artist: "JPEGMAFIA",
    length: "2:32",
    cover: "/babyimbleeding.png",
    genre: "Hip-Hop",
  },
  {
    title: "We Don't Leave the House",
    artist: "glaive",
    length: "2:25",
    cover: "/yall.png",
    genre: "EDM",
  },
  {
    title: "MONDAY",
    artist: "Quadeca",
    length: "4:03",
    cover: "/monday.webp",
    genre: "Folk",
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
    genre: "R&B",
  },
  {
    title: "BLEACH",
    artist: "BROCKHAMPTON",
    length: "4:33",
    cover: "/sat3.png",
    genre: "Hip-Hop",
  },
  {
    title: "Stateside",
    artist: "PinkPantheress",
    length: "2:48",
    cover: "/stateside.webp",
    genre: "EDM",
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
  {
    title: "Every Knife In The House Was Mine",
    artist: "Sugar Cherry",
    length: "3:01",
    cover: "/landofpine.jpg",
    genre: "Folk",
  },
  {
    title: "Magic I Want U",
    artist: "Jane Remover",
    length: "4:58",
    cover: "/magiciwantu.jpg",
    genre: "Pop",
  },
  {
    title: "Yamaha",
    artist: "Dijon",
    length: "4:28",
    cover: "/baby.jpg",
    genre: "R&B",
  },
  {
    title: "White Keys",
    artist: "Dominic Fike",
    length: "2:24",
    cover: "/whitekeys.jpg",
    genre: "Pop",
  },
  {
    title: "Doggy",
    artist: "Geezer, Love Spells, Truly Young",
    length: "2:52",
    cover: "/doggy.jpg",
    genre: "Pop",
  },
  {
    title: "American Boyfriend",
    artist: "Kevin Abstract",
    length: "3:58",
    cover: "/abf.jpg",
    genre: "Rock",
  },
  {
    title: "Ain't No Way",
    artist:
      "Denzel Curry, 6LACK, Rico Nasty, JID, Powers Pleasant, Jasiah, Kitty Ca$h",
    length: "4:24",
    cover: "/mmesyfs.jpg",
    genre: "Hip-Hop",
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

function filterButton(type) {
  const container = document.querySelector(".app");
  container.innerHTML = "";
  let filteredSongs = song;
  if (type !== "all") {
    filteredSongs = song.filter((item) => item.genre === type);
  }

  filteredSongs.forEach((item) => inject(item));
}
const filterBtn = document.querySelectorAll(".filter");
filterBtn.forEach((thing) => {
  thing.addEventListener("click", () => {
    const yes = thing.getAttribute("genre-id");
    filterButton(yes);
  });
});
filterButton("all");
/*Create array
inject array

*/
