const songs=[
{id:"4uLU6hMCjMI75M1A2tKUQC",title:"Never Gonna Give You Up",artist:"Rick Astley",album:"Whenever You Need Somebody",duration:"3:32",icon:"♪",a:"#d94d73",b:"#5a45aa",lyrics:"Demo lyrics — replace this text with lyrics you are licensed to display.\n\nSelect another song to update the Spotify player and lyrics panel."},
{id:"11dFghVXANMlKmJXsNCbNl",title:"Dreams",artist:"Fleetwood Mac",album:"Rumours",duration:"4:17",icon:"♫",a:"#e19a45",b:"#4d6cc9",lyrics:"Demo lyrics — replace with licensed lyrics for this track.\n\nAshiq Music keeps the lyrics beside the official Spotify embed."},
{id:"0VjIjW4GlUZAMYd2vXMi3b",title:"Blinding Lights",artist:"The Weeknd",album:"After Hours",duration:"3:20",icon:"♪",a:"#e43f67",b:"#e99b4b",lyrics:"Demo lyrics — replace with licensed lyrics for this track.\n\nUse the Spotify embed for official playback."},
{id:"1mea3bSkSGXuIRvnydlB5b",title:"Take On Me",artist:"a-ha",album:"Hunting High and Low",duration:"3:48",icon:"♩",a:"#46b8a5",b:"#5367d9",lyrics:"Demo lyrics — replace with licensed lyrics for this track.\n\nThis is a frontend demo of the Ashiq Music experience."}
];
const artists=[
{name:"Rick Astley",genre:"Pop",icon:"R",a:"#d94d73",b:"#5a45aa"},
{name:"Fleetwood Mac",genre:"Rock / Pop",icon:"F",a:"#e19a45",b:"#4d6cc9"},
{name:"The Weeknd",genre:"R&B / Pop",icon:"W",a:"#e43f67",b:"#e99b4b"},
{name:"a-ha",genre:"Synth-pop",icon:"A",a:"#46b8a5",b:"#5367d9"},
{name:"Daft Punk",genre:"Electronic",icon:"D",a:"#8a5cf6",b:"#d94885"}
];
const $=s=>document.querySelector(s);
function songCard(s){return `<article class="card" data-song="${s.id}"><div class="cover" style="--a:${s.a};--b:${s.b}">${s.icon}</div><div class="info"><strong>${s.title}</strong><span>${s.artist}</span></div></article>`}
function artistCard(a){return `<article class="artist"><div class="artist-pic" style="--a:${a.a};--b:${a.b}">${a.icon}</div><strong>${a.name}</strong><p>${a.genre}</p></article>`}
function render(){ $("#homeSongs").innerHTML=songs.map(songCard).join(""); $("#homeArtists").innerHTML=artists.slice(0,4).map(artistCard).join(""); $("#artistsGrid").innerHTML=artists.map(artistCard).join(""); $("#songsList").innerHTML=songs.map(s=>`<div class="row" data-song="${s.id}"><div class="row-cover" style="--a:${s.a};--b:${s.b}">${s.icon}</div><strong>${s.title}</strong><span class="row-artist">${s.artist}</span><span class="duration">${s.duration}</span></div>`).join("")}
function showSection(id){document.querySelectorAll(".page").forEach(x=>x.classList.remove("active"));$("#"+id).classList.add("active");document.querySelectorAll(".nav").forEach(x=>x.classList.toggle("active",x.dataset.section===id));window.scrollTo({top:0,behavior:"smooth"});$("#sidebar").classList.remove("open")}
function playSong(id){const s=songs.find(x=>x.id===id);if(!s)return;$("#nowTitle").textContent=s.title;$("#nowArtist").textContent=`${s.artist} • ${s.album}`;$("#frame").src=`https://open.spotify.com/embed/track/${s.id}?utm_source=generator&theme=0`;$("#lyricsText").textContent=s.lyrics;$("#status").textContent="Demo / licensed text";$("#player").scrollIntoView({behavior:"smooth",block:"start"})}
render();
document.addEventListener("click",e=>{const n=e.target.closest("[data-section]");if(n)showSection(n.dataset.section);const g=e.target.closest("[data-go]");if(g)showSection(g.dataset.go);const s=e.target.closest("[data-song]");if(s)playSong(s.dataset.song)});
$("#explore").onclick=()=>showSection("songs");$("#menu").onclick=()=>$("#sidebar").classList.toggle("open");$("#close").onclick=()=>$("#player").style.display="none";
$("#search").addEventListener("input",e=>{const q=e.target.value.toLowerCase();document.querySelectorAll(".card").forEach(c=>c.style.display=c.innerText.toLowerCase().includes(q)?"":"none");document.querySelectorAll(".row").forEach(r=>r.style.display=r.innerText.toLowerCase().includes(q)?"":"none")});
