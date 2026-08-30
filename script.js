const tracks=[
 {t:"NEON RITUAL",m:"Original Mix · 150 BPM",f:"music/neon-ritual.mp3"},
 {t:"DARK CATHEDRAL",m:"Trance Edit · 148 BPM",f:"music/dark-cathedral.mp3"},
 {t:"MIDNIGHT RAVE",m:"Hard Mix · 155 BPM",f:"music/midnight-rave.mp3"}
];
const audio=document.querySelector("#audio"),play=document.querySelector("#play"),seek=document.querySelector("#seek"),vol=document.querySelector("#vol"),title=document.querySelector("#title"),meta=document.querySelector("#meta"),cur=document.querySelector("#cur"),dur=document.querySelector("#dur");let i=0;
const wave=document.querySelector("#wave");for(let n=0;n<46;n++){let x=document.createElement("i");x.style.height=(15+Math.random()*70)+"%";x.style.animationDelay=(Math.random()*.7)+"s";wave.append(x)}
function fmt(s){return Number.isFinite(s)?Math.floor(s/60)+":"+String(Math.floor(s%60)).padStart(2,"0"):"0:00"}
function load(n,auto=false){i=(n+tracks.length)%tracks.length;audio.src=tracks[i].f;title.textContent=tracks[i].t;meta.textContent=tracks[i].m;seek.value=0;if(auto)audio.play().catch(()=>{})}
function toggle(){if(!audio.src)load(0);if(audio.paused){audio.play().catch(()=>{});play.textContent="Ⅱ"}else{audio.pause();play.textContent="▶"}}
play.onclick=toggle;document.querySelector("#next").onclick=()=>{load(i+1,true);play.textContent="Ⅱ"};document.querySelector("#prev").onclick=()=>{load(i-1,true);play.textContent="Ⅱ"};
audio.onloadedmetadata=()=>dur.textContent=fmt(audio.duration);audio.ontimeupdate=()=>{if(audio.duration){seek.value=audio.currentTime/audio.duration*100;cur.textContent=fmt(audio.currentTime)}};audio.onended=()=>{load(i+1,true);play.textContent="Ⅱ"};seek.oninput=()=>{if(audio.duration)audio.currentTime=seek.value/100*audio.duration};vol.oninput=()=>audio.volume=vol.value;
document.querySelectorAll(".mini-play").forEach(b=>b.onclick=()=>{load(+b.dataset.track,true);play.textContent="Ⅱ";document.querySelector("#player").scrollIntoView({behavior:"smooth"})});
load(0);
const hamb=document.querySelector(".hamb"),nav=document.querySelector("nav");hamb.onclick=()=>{nav.style.display=nav.style.display==="flex"?"":"flex";nav.style.position="absolute";nav.style.top="76px";nav.style.left="0";nav.style.right="0";nav.style.padding="25px";nav.style.background="#08080d";nav.style.flexDirection="column"};
