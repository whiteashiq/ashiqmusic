const songs = [
  {id:"4uLU6hMCjMI75M1A2tKUQC",title:"Never Gonna Give You Up",artist:"Rick Astley",album:"Whenever You Need Somebody",duration:"3:32",icon:"♪",a:"#d94d73",b:"#5a45aa",embed:"https://open.spotify.com/embed/track/4uLU6hMCjMI75M1A2tKUQC",lyrics:"Demo lyrics — replace this text with lyrics you are licensed to display.\n\nAshiq Music keeps the lyrics beside the official Spotify player."},
  {id:"11dFghVXANMlKmJXsNCbNl",title:"Dreams",artist:"Fleetwood Mac",album:"Rumours",duration:"4:17",embed:"https://open.spotify.com/embed/track/11dFghVXANMlKmJXsNCbNl",icon:"♫",a:"#e19a45",b:"#4d6cc9",lyrics:"Demo lyrics — replace with licensed lyrics for this track.\n\nUse the Spotify embed for official playback."},
  {id:"0VjIjW4GlUZAMYd2vXMi3b",title:"Blinding Lights",artist:"The Weeknd",album:"After Hours",duration:"3:20",embed:"https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b",icon:"♪",a:"#e43f67",b:"#e99b4b",lyrics:"Demo lyrics — replace with licensed lyrics for this track.\n\nUse the Spotify embed for official playback."},
  {id:"31VfHqUvcbjrfEKwtVV5KT",title:"Take On Me",artist:"a-ha",album:"Hunting High and Low",duration:"3:48",embed:"https://open.spotify.com/embed/track/31VfHqUvcbjrfEKwtVV5KT",icon:"♩",a:"#46b8a5",b:"#5367d9",lyrics:"
    Tere bin main yun kaise jiya
    Kaise jiya tere bin
    Tere bin main yun kaise jiya
    Kaise jiya tere bin
    Lekar yaadien teri raatein meri kati
    Lekar yaadien teri raatein meri kati
    Mujhse baaten teri karti hai chandni
    Tanha hai tujh bin raaten meri
    Din mere din ke jaise nahi
    Tanha badan tanha hai ruh nam meri aankhen rahe
    Aaja mere ab rubaru
    Jeena nahi bin tere"}
];

const artists = [
  {name:"Atif Aslam",genre:"Bollywood",icon:"A",a:"#d94d73",b:"#5a45aa",bio:"Pakistani playback singer known for Bollywood and South Asian music.",songs:[
    {title:"Tera Bin",embed:"https://open.spotify.com/embed/track/31VfHqUvcbjrfEKwtVV5KT"},
    {title:"Tera Hone Laga Hoon",embed:"https://open.spotify.com/embed/track/0dLbrlAVPPjpPqnYfmJsWk"},
    {title:"Dil Diyan Gallan",embed:"https://open.spotify.com/embed/track/5MnAi6ZF7cE8pAz7wYr9Ta"}
  ]},
  {name:"Mustafa Zahid",genre:"Bollywood",icon:"M",a:"#e19a45",b:"#4d6cc9",bio:"Pakistani singer, songwriter and composer known for emotional Bollywood soundtracks.",songs:["Toh Phir Aao","Tera Mera Rishta","Bharam"]},
  {name:"Shreya Ghoshal",genre:"Indian Playback",icon:"S",a:"#e43f67",b:"#e99b4b",bio:"One of India's most celebrated playback singers.",songs:["Teri Ore","Manwa Laage","Deewani Mastani"]},
  {name:"Palak Muchhal",genre:"Indian Playback",icon:"P",a:"#46b8a5",b:"#5367d9",bio:"Indian playback singer known for Hindi film songs and melodic performances.",songs:["Kaun Tujhe","Meri Aashiqui","Chahun Main Ya Naa"]},
  {name:"Mithoon",genre:"Indian Playback",icon:"M",a:"#46b8a5",b:"#795cff",bio:"Indian composer, singer and songwriter known for Bollywood music.",songs:["Tum Hi Ho","Sanam Re","Phir Mohabbat"]},
  {name:"Yuvan Shankar Raja",genre:"Tamil Music",icon:"Y",a:"#8a5cf6",b:"#d94885",bio:"Tamil composer, singer and music producer.",songs:["Oru Naalil","Loosu Penne","Mun Paniya"]}
];

const $ = s => document.querySelector(s);

function songCard(s){
  return `<article class="card" data-song="${s.id}"><div class="cover" style="--a:${s.a};--b:${s.b}">${s.icon}</div><div class="info"><strong>${s.title}</strong><span>${s.artist}</span></div></article>`;
}

function artistCard(a){
  return `<article class="artist" data-artist="${a.name}"><div class="artist-pic" style="--a:${a.a};--b:${a.b}">${a.icon}</div><strong>${a.name}</strong><p>${a.genre}</p></article>`;
}

function render(){
  $("#homeSongs").innerHTML = songs.map(songCard).join("");
  $("#homeArtists").innerHTML = artists.slice(0,4).map(artistCard).join("");
  $("#artistsGrid").innerHTML = artists.map(artistCard).join("");
  $("#songsList").innerHTML = songs.map(s => `
    <div class="song-editor">
      <div class="row" data-song="${s.id}">
        <div class="row-cover" style="--a:${s.a};--b:${s.b}">${s.icon}</div>
        <strong>${s.title}</strong><span class="row-artist">${s.artist}</span><span class="duration">${s.duration}</span>
      </div>
      <div class="embed-editor">
        <label>SPOTIFY EMBED URL</label>
        <input class="embed-input" data-id="${s.id}" value="${s.embed || `https://open.spotify.com/embed/track/${s.id}`}" spellcheck="false">
        <button class="embed-play" data-embed-id="${s.id}">Use Embed</button>
      </div>
    </div>`).join("");
}

function showSection(id){
  const page = $("#" + id);
  if(!page) return;
  document.querySelectorAll(".page").forEach(x => x.classList.remove("active"));
  page.classList.add("active");
  document.querySelectorAll(".nav").forEach(x => x.classList.toggle("active", x.dataset.section === id));
  window.scrollTo({top:0,behavior:"smooth"});
  $("#sidebar").classList.remove("open");
}

function setPlayer(embedUrl,title,artist,lyrics){
  if(!embedUrl) return;
  const separator = embedUrl.includes("?") ? "&" : "?";
  $("#nowTitle").textContent = title || "Selected song";
  $("#nowArtist").textContent = artist || "";
  $("#frame").src = embedUrl + separator + "utm_source=generator&theme=0";
  $("#lyricsText").textContent = lyrics || "Lyrics will appear here when you add licensed lyrics for this song.";
  $("#status").textContent = "Demo / licensed text";
  $("#player").style.display = "block";
  $("#player").scrollIntoView({behavior:"smooth",block:"start"});
}

function playSong(id){
  const s = songs.find(x => x.id === id);
  if(!s) return;
  setPlayer(s.embed || `https://open.spotify.com/embed/track/${s.id}`, s.title, `${s.artist} • ${s.album}`, s.lyrics);
}

function openArtist(name){
  const a = artists.find(x => x.name === name);
  if(!a) return;

  $("#artistName").textContent = a.name;
  $("#artistGenre").textContent = a.genre;
  $("#artistBio").textContent = a.bio;
  $("#artistAvatar").textContent = a.icon;
  $("#artistAvatar").style.setProperty("--a", a.a);
  $("#artistAvatar").style.setProperty("--b", a.b);

  $("#artistSongs").innerHTML = a.songs.map((item,i) => {
    const song = typeof item === "string" ? {title:item,embed:""} : item;
    const mainSong = songs.find(s => s.title.toLowerCase() === song.title.toLowerCase());
    const embed = song.embed || (mainSong ? mainSong.embed : "");
    return `<div class="artist-song">
      <div class="artist-song-num">${String(i+1).padStart(2,"0")}</div>
      <div><strong>${song.title}</strong><span>${a.name}</span></div>
      ${embed ? `<button class="artist-play" data-artist-embed="${embed}" data-title="${song.title}" data-artist="${a.name}">▶</button>` : `<span class="unavailable">Spotify link not added</span>`}
    </div>`;
  }).join("");

  $("#artistProfile").classList.add("show");
  $("#artistProfile").scrollIntoView({behavior:"smooth",block:"start"});
}

render();

document.addEventListener("click", e => {
  const nav = e.target.closest("[data-section]");
  if(nav){ showSection(nav.dataset.section); return; }

  const go = e.target.closest("[data-go]");
  if(go){ showSection(go.dataset.go); return; }

  const artistButton = e.target.closest("[data-artist-embed]");
  if(artistButton){
    setPlayer(artistButton.dataset.artistEmbed, artistButton.dataset.title, artistButton.dataset.artist, "Lyrics will appear here when you add licensed lyrics for this song.");
    return;
  }

  const embedButton = e.target.closest("[data-embed-id]");
  if(embedButton){
    const id = embedButton.dataset.embedId;
    const input = document.querySelector(`.embed-input[data-id="${id}"]`);
    const value = input ? input.value.trim() : "";
    const s = songs.find(x => x.id === id);
    if(s && value){ s.embed = value; playSong(id); }
    return;
  }

  const song = e.target.closest("[data-song]");
  if(song){ playSong(song.dataset.song); return; }

  const artist = e.target.closest("[data-artist]");
  if(artist){ openArtist(artist.dataset.artist); return; }
});

$("#explore").onclick = () => showSection("songs");
$("#menu").onclick = () => $("#sidebar").classList.toggle("open");
$("#close").onclick = () => $("#player").style.display = "none";
$("#closeArtist").onclick = () => $("#artistProfile").classList.remove("show");

$("#search").addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  document.querySelectorAll(".card").forEach(c => c.style.display = c.innerText.toLowerCase().includes(q) ? "" : "none");
  document.querySelectorAll(".row").forEach(r => r.style.display = r.innerText.toLowerCase().includes(q) ? "" : "none");
  document.querySelectorAll(".artist").forEach(a => a.style.display = a.innerText.toLowerCase().includes(q) ? "" : "none");
});
