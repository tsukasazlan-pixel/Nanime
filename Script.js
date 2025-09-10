function pindahHalaman() { window.location.href = "search.html";}

// Ganti status: "master", "vip", atau "free"
let userStatus = "master"; // contoh status

const button = document.getElementById("statusButton");

if (userStatus === "vip") {
  button.innerHTML = `<i class="fa fa-award"></i> VIP`;
  button.classList.remove("master", "free");
  button.classList.add("vip");
} else if (userStatus === "free") {
  button.innerHTML = `<i class="fa fa-award"></i> FREE`;
  button.classList.remove("master", "vip");
  button.classList.add("free");
} else {
  button.innerHTML = `<i class="fa fa-award"></i> MASTER`;
  button.classList.remove("vip", "free");
  button.classList.add("master");
}





    const track=document.querySelector('.track'),slides=[...document.querySelectorAll('.slide')];let index=0,startX=0,currentTranslate=0,prevTranslate=0,dragging=false;
    function update(smooth=true){const w=slides[0].offsetWidth+20,o=(track.parentElement.offsetWidth-slides[0].offsetWidth)/2;currentTranslate=-(index*w)+o;track.style.transition=smooth?"transform .35s ease":"none";track.style.transform=`translateX(${currentTranslate}px)`;prevTranslate=currentTranslate;updateClasses()}
    function updateClasses(){slides.forEach((s,i)=>{s.classList.remove('active','adjacent','far');i===index?s.classList.add('active'):Math.abs(i-index)===1?s.classList.add('adjacent'):s.classList.add('far')})}
    track.addEventListener('pointerdown',e=>{startX=e.clientX;dragging=true;track.style.transition="none"});
    window.addEventListener('pointermove',e=>{if(!dragging)return;const d=e.clientX-startX;currentTranslate=prevTranslate+d;track.style.transform=`translateX(${currentTranslate}px)`});
    /*window.addEventListener('pointerup',e=>{if(!dragging)return;dragging=false;const d=e.clientX-startX,w=slides[0].offsetWidth+20;if(d<-w/4&&index<slides.length-1)index++;else if(d>w/4&&index>0)index--;update(true)});
    window.addEventListener('resize',()=>update(false));
    update(false);*/
    window.addEventListener('pointerup', e => {
    if (!dragging) return;
    dragging = false;
    const d = e.clientX - startX;
    const w = slides[0].offsetWidth + 20;

    if (d < -w / 4) {
        index = (index + 1) % slides.length; // geser kanan, looping
    } else if (d > w / 4) {
        index = (index - 1 + slides.length) % slides.length; // geser kiri, looping
    }

    update(true);
});
    
    setInterval(() => {
        index = (index + 1) % slides.length;
      update(true);
    }, 3000)
    

function switchTab(i) {
  document.querySelectorAll('.tab').forEach((t, idx) => {
    t.classList.toggle('active', idx === i);
  });
  document.querySelectorAll('.content').forEach((c, idx) => {
    c.classList.toggle('active', idx === i);
  });
}


/*nav disableOnInteraction*/
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});


function showLabel(el) {
  // Sembunyikan label lain
  document.querySelectorAll('.nav-item').forEach(item => {if (item !== el) item.classList.remove('show');
  });

  // Toggle label aktif
  el.classList.toggle('show');
}


function activate(el, labelText) {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
    const oldLabel = item.querySelector('.active-label');
    if (oldLabel) oldLabel.remove();
  });

  el.classList.add('active');
  
  const icon = el.querySelector('i').cloneNode(true);
  const span = document.createElement('span');
  span.className = 'active-label';
  span.appendChild(icon);
  span.append(labelText);
  el.appendChild(span);
}


window.addEventListener('DOMContentLoaded', () => {
  const savedColor = localStorage.getItem('themeColor') || '#ff4081'; // default kalau belum dipilih

  document.documentElement.style.setProperty('--theme-color', savedColor);

  // Terapkan ke elemen tertentu kalau perlu
  document.querySelectorAll('.btn, .icon, .highlight').forEach(el => {
    el.style.backgroundColor = savedColor;
  });
});




const animeList = [
  {
    title: "Kaoru Hana wa Rin to Saku",
    desc: "Meskipun letaknya bersebelahan, SMA Chi...",
    image: "https://qu.ax/mJmUc.gif",
    view: "15.2k",
    rating: "8.71",
    status: "Ongoing",
    tags: ["Drama", "Romance", "School"]
  },
  {
    title: "Silent Witch: Chinmoku no Maj...",
    desc: "Monica Everett, si Penyihir Sunyi, adalah s...",
    image: "https://via.placeholder.com/220x120",
    view: "13.6k",
    rating: "8.0",
    status: "Ongoing",
    tags: ["Fantasy", "School"]
  },
  {
    title: "Demon Slayer: Kimetsu no Yaiba",
    desc: "Korps pembasmi iblis menghadapi musuh...",
    image: "https://qu.ax/mJmUc.gif",
    view: "12.2k",
    rating: "9.1",
    status: "Ongoing",
    tags: ["Action", "Adventure", "Fantasy"]
  }
];

const container = document.getElementById("animeCards");

animeList.forEach(anime => {
  const card = document.createElement("div");
  card.className = "anime-card";
  card.innerHTML = `
    <img src="anime.image" alt="{anime.title}">
    <div class="badges">
      <span class="badge view">👁 anime.view</span>
      <span class="badge rating">⭐{anime.rating}</span>
});<span class="badge status">anime.status</span>
    </div>
    <div class="anime-info">
      <div class="anime-title">{anime.title}</div>
      <div class="anime-desc">anime.desc</div>
      <div class="tags">{anime.tags.map(tag => <span class="tag">${tag}</span>).join("")}
      </div>
    </div>
  `;
  container.appendChild(card);
});