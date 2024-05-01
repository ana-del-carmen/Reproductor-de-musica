const songs = [
  // Estructura de cada canción: {nombre, album, artista, duracion, imagen, audio}
  {
    nombre: "Brillas",
    album: "Solstis",
    artista: "León Larregui",
    duracion: "4:10",
    imagen: "imagenes/Brillas.jpg",
    audio: "música/brillas.mp3",
  },
  {
    nombre: "Flowers",
    album: "Endless Summer Vacation",
    artista: "Miley Cyrus",
    duracion: "3:22",
    imagen: "imagenes/flowers.jpg",
    audio: "música/flowers.mp3",
  },
  {
    nombre: "Cupid",
    album: "The Beginning",
    artista: "Fifty Fifty",
    duracion: "3:22",
    imagen: "imagenes/Cupid.jpg",
    audio: "música/Cupid.mp3",
  },
  {
    nombre: "Save Your Tears",
    album: "After Hours",
    artista: "The Weeknd",
    duracion: "4:08",
    imagen: "imagenes/SaveYourTears.jpg",
    audio: "música/SaveYourTears.mp3",
  },
  {
    nombre: "Can I Call You Tonight?",
    album: "Fuzzybrain",
    artista: "Dayglow",
    duracion: "5:00",
    imagen: "imagenes/CallYouTonight.jpg",
    audio: "música/CallYouTonight.mp3",
  },
  {
    nombre: "No Control",
    album: "Four",
    artista: "Liam Payne, John Ryan, Julian Bunetta, Jamie Scott, Louis Tomlinson",
    duracion: "5:00",
    imagen: "imagenes/NoControl.jpg",
    audio: "música/NoControl.mp3",
  },
  {
    nombre: "Love Story",
    album: "Mini World",
    artista: "Indila",
    duracion: "4:45",
    imagen: "imagenes/LoveStory.jpg",
    audio: "música/Lovestory.mp3",
  },
  {
    nombre: "As It Was",
    album: "Harry's House",
    artista: "Harry Styles",
    duracion: "2:249",
    imagen: "imagenes/AsItWas.jpg",
    audio: "música/AsItWas.mp3",
  },
  {
    nombre: "Still Dancing",
    album: "Clover",
    artista: "OR3O",
    duracion: "3:54",
    imagen: "imagenes/stillDancing.jpg",
    audio: "música/StillDancing.mp3",
  },
  {
    nombre: "Homage",
    album: "Skiptracing",
    artista: "Mild High Club",
    duracion: "2:58",
    imagen: "imagenes/Homage.jpg",
    audio: "música/Homage.mp3",
  },
  {
    nombre: "Words",
    album: "Words (Original Album)",
    artista: "F.R.David",
    duracion: "3:24",
    imagen: "imagenes/Words.jpg",
    audio: "música/words.mp3",
  },
  {
    nombre: "I Can't Stop The Loneliness!",
    album: "Pure Baby Maker [Rewind]",
    artista: "Night Tempo",
    duracion: "4:23",
    imagen: "imagenes/Anri.jpg",
    audio: "música/Anri.mp3",
  },
  {
    nombre: "Fly-day Chinatown",
    album: "Transit",
    artista: "Yasuha",
    duracion: "3:29",
    imagen: "imagenes/Chinatown.avif",
    audio: "música/Chinatown.mp3",
  },
  {
    nombre: "4:00 A.M.",
    album: "Mignonne",
    artista: "Taeko Ohnuki",
    duracion: "5:37",
    imagen: "imagenes/400AM.jpg",
    audio: "música/4_00 A.M.mp3",
  },
  {
    nombre: "Bad Guy",
    album: "When We All Fall Asleep, Where Do We Go?",
    artista: "Billie Eilish",
    duracion: "3:17",
    imagen: "imagenes/bad.jpg",
    audio: "música/bad.mp3",
  },
];

class Reproductor {
  constructor(songs) {
    this.songs = songs;
    this.isPlaying = false;
    this.nowPlayingIndex = 0;
    this.audioPlayer = document.getElementById("audio-player");
    this.albumCover = document.getElementById("album-cover");
    this.songInfo = document.getElementById("song-info");
  }

  playPause() {
    if (this.isPlaying) {
      this.audioPlayer.pause();
      this.isPlaying = false;
      console.log("Haz pausado la reproducción");
    } else {
      this.audioPlayer.play();
      this.isPlaying = true;
      this.showSongInSite();
    }
  }

  stop() {
    this.audioPlayer.pause();
    this.audioPlayer.currentTime = 0;
    this.isPlaying = false;
    console.log("Haz detenido la reproducción");
  }

  shuffle() {
    this.nowPlayingIndex = Math.floor(Math.random() * this.songs.length);
    this.showSongInSite();
  }

  next() {
    if (this.nowPlayingIndex < this.songs.length - 1) {
      this.nowPlayingIndex++;
      this.showSongInSite();
    }
  }

  prev() {
    if (this.nowPlayingIndex > 0) {
      this.nowPlayingIndex--;
      this.showSongInSite();
    }
  }

  play(songIndex) {
    if (songIndex >= 0 && songIndex < this.songs.length) {
      this.nowPlayingIndex = songIndex;
      this.showSongInSite();
    }
  }

  showSongInSite() {
    const song = this.songs[this.nowPlayingIndex];
    this.albumCover.src = song.imagen;
    this.songInfo.innerHTML = `<b>Cación:</b> ${song.nombre}<br>`;
    this.songInfo.innerHTML += `<b>Artista:</b> ${song.artista}<br>`;
    this.songInfo.innerHTML += `<b>Álbum:</b> ${song.album}<br>`;
    this.songInfo.innerHTML += `<b>Duración:</b> ${song.duracion}<br>`;
    this.audioPlayer.src = song.audio;
    if (this.isPlaying) {
      this.audioPlayer.play();
    }
  }

  songsList() {
    let html = "<ul>";
    this.songs.forEach((song, index) => {
      html += `<li onclick="reproductor.play(${index})">${song.nombre}</li>`;
    });
    html += "</ul>";
    document.getElementById("song-list").innerHTML = html;
  }
}

const reproductor = new Reproductor(songs);
reproductor.songsList();

document
  .getElementById("play-pause")
  .addEventListener("click", () => reproductor.playPause());
document
  .getElementById("stop")
  .addEventListener("click", () => reproductor.stop());
document
  .getElementById("shuffle")
  .addEventListener("click", () => reproductor.shuffle());
document
  .getElementById("next")
  .addEventListener("click", () => reproductor.next());
document
  .getElementById("prev")
  .addEventListener("click", () => reproductor.prev());
