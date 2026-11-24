(() => {
  const curtain = document.getElementById('introCurtain');
  let opened = false;
  function openInvite(){ if(opened) return; opened=true; curtain.classList.add('open'); setTimeout(()=>curtain.classList.add('dismissed'),1550); document.body.classList.add('invite-open'); }
  curtain.addEventListener('click',openInvite); curtain.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openInvite();}});
  // Reveal elements gently as they enter view.
  const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  // Scroll progress bar.
  const progress=document.querySelector('.scrollProgress');
  function updateProgress(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%';}
  window.addEventListener('scroll',updateProgress,{passive:true});updateProgress();
  // Responsive nav toggle.
  const toggle=document.querySelector('.menuToggle'), nav=document.querySelector('.topNav nav');
  toggle.addEventListener('click',()=>nav.classList.toggle('show')); nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('show')));
  // Countdown to the wedding day. Change target date here if needed.
  const countdown=document.getElementById('countdown'), target=new Date('2026-12-15T21:00:00+05:30').getTime();
  function tick(){const diff=Math.max(0,target-Date.now());const d=Math.floor(diff/86400000),h=Math.floor(diff%86400000/3600000),m=Math.floor(diff%3600000/60000),s=Math.floor(diff%60000/1000);countdown.innerHTML=`<div class="countUnit"><b>${d}</b><span>DAYS</span></div><div class="countUnit"><b>${String(h).padStart(2,'0')}</b><span>HOURS</span></div><div class="countUnit"><b>${String(m).padStart(2,'0')}</b><span>MIN</span></div><div class="countUnit"><b>${String(s).padStart(2,'0')}</b><span>SEC</span></div>`;}
  tick();setInterval(tick,1000);
  // Light falling-petal ambience, intentionally sparse on mobile.
  const layer=document.querySelector('.petalLayer');
  function petal(){if(document.hidden)return;const p=document.createElement('i');p.className='petal';p.style.left=Math.random()*100+'vw';p.style.setProperty('--drift',(Math.random()*140-70)+'px');p.style.animationDuration=(8+Math.random()*8)+'s';p.style.opacity=(.3+Math.random()*.4);layer.appendChild(p);setTimeout(()=>p.remove(),17000);}
  const petalInterval=setInterval(petal,850);for(let i=0;i<8;i++)setTimeout(petal,i*250);
})();
