(()=>{const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s),R=document.documentElement,hd=$('#hd'),yr=new Date().getFullYear();
const MQ={ar:['مطار الرياض','موانئ ومطارات الدمام','جدة: مطار وميناء','محطات السكك الحديدية','منفذ الحديثة','تخليص جمركي'],en:['Riyadh Airport','Dammam Ports & Airports','Jeddah: Airport & Port','Railway Stations','Al-Haditha Border Crossing','Customs Clearance']};
const TT={ar:'محمد جودة | مستخلص جمركي · عالم التخليص',en:'Mohamed Gouda | Customs Broker · Alam Al-Takhlis'};
const save=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}},load=k=>{try{return localStorage.getItem(k)}catch(e){return null}};
$('#yrs').dataset.to=yr-1970;
$$('[data-en]').forEach(el=>el.dataset.ar=el.innerHTML);$$('[data-en-label]').forEach(el=>el.dataset.arLabel=el.getAttribute('aria-label'));
function lang(lg){R.lang=lg;R.dir=lg==='ar'?'rtl':'ltr';
$$('[data-en]').forEach(el=>el.innerHTML=lg==='en'?el.dataset.en:el.dataset.ar);
$$('[data-en-label]').forEach(el=>el.setAttribute('aria-label',lg==='en'?el.dataset.enLabel:el.dataset.arLabel));
document.title=TT[lg];$$('.y').forEach(e=>e.textContent=yr);
const it=MQ[lg].map(t=>'<span>'+t+'</span><i>✦</i>').join('');$('#mq').innerHTML=it.repeat(4);$('#lg').setAttribute('aria-checked',lg==='en')}
$('#lg').addEventListener('click',()=>{const n=R.lang==='en'?'ar':'en';lang(n);save('lang',n)});
$('#tg').addEventListener('click',()=>{const n=R.dataset.theme==='dark'?'light':'dark';R.dataset.theme=n;save('theme',n)});
lang(load('lang')==='en'?'en':'ar');
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
const sc=()=>hd.classList.toggle('sc',scrollY>30);sc();addEventListener('scroll',sc,{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});$$('.rv').forEach(e=>io.observe(e));
/* العدّاد: من 1 حتى الرقم عند الوصول إليه بالسكرول */
const count=el=>{const t=+el.dataset.to;if(rm){el.textContent=t;return}const d=1800,s=performance.now();(function f(n){const p=Math.min((n-s)/d,1),e=1-Math.pow(1-p,3);el.textContent=Math.round(1+(t-1)*e);if(p<1)requestAnimationFrame(f)})(s)};
const co=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){count(e.target);co.unobserve(e.target)}}),{threshold:.6});$$('[data-to]').forEach(e=>co.observe(e));
const c=$('#net');if(!c||rm)return;const x=c.getContext('2d');let W,H,P=[],m={x:-999,y:-999};
const rs=()=>{W=c.width=c.offsetWidth;H=c.height=c.offsetHeight;P=Array.from({length:innerWidth<700?34:70},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*1.6+.6}))};rs();addEventListener('resize',rs);
addEventListener('pointermove',e=>{const b=c.getBoundingClientRect();m.x=e.clientX-b.left;m.y=e.clientY-b.top},{passive:true});
let vis=true;new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(c);
(function f(){requestAnimationFrame(f);if(!vis)return;x.clearRect(0,0,W,H);const dk=R.dataset.theme==='dark';
for(const p of P){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;const dx=p.x-m.x,dy=p.y-m.y,d=Math.hypot(dx,dy);if(d<110){p.x+=dx/d*1.2;p.y+=dy/d*1.2}
x.beginPath();x.arc(p.x,p.y,p.r,0,6.3);x.fillStyle=dk?'rgba(243,220,174,.75)':'rgba(169,119,47,.6)';x.fill()}
for(let i=0;i<P.length;i++)for(let j=i+1;j<P.length;j++){const a=P[i],b=P[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<130){x.strokeStyle=(dk?'rgba(201,160,99,':'rgba(169,119,47,')+(.28*(1-d/130))+')';x.lineWidth=.8;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}})()})();
