(function(){
  var W = window.WEDDING, $ = function(id){return document.getElementById(id)};
  function fmt(d,o){return new Intl.DateTimeFormat('en-IN',Object.assign({timeZone:'Asia/Kolkata'},o)).format(d)}
  function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}

  // Names & text
  $('gName').textContent = W.groom; $('bName').textContent = W.bride;
  document.title = W.groom + ' & ' + W.bride + ' — Wedding Invitation';
  $('navLogo').textContent = W.groom[0] + ' & ' + W.bride[0];
  $('teluguLine').textContent = W.teluguLine || '';
  $('tagline').textContent = 'Join us for the celebrations of ' + W.groom + ' & ' + W.bride + '.'; $('hashtag').textContent = W.hashtag;
  $('footNames').textContent = W.groom + ' & ' + W.bride; $('footHash').textContent = W.hashtag;
  var wd = new Date(W.weddingDate);
  $('heroDate').textContent = fmt(wd,{day:'numeric',month:'long',year:'numeric'});

  // Story & families
  $('storyText').innerHTML = '<p>'+esc(W.tagline)+'</p>';
  $('famGroom').innerHTML = '<h3>'+esc(W.groom)+'</h3><p>The Groom</p>'; $('famBride').innerHTML = '<h3>'+esc(W.bride)+'</h3><p>The Bride</p>';
  $('heroPlace').textContent = W.place; $('inviteFor').textContent = W.inviteFor[W.side] || '';

  // Countdown
  function tick(){
    var diff = wd - new Date();
    if (diff < 0) { $('countdown').innerHTML = '<div style="min-width:0"><b style="font-size:28px">Happily married ❀</b></div>'; return; }
    var s = Math.floor(diff/1000);
    $('cd-d').textContent = Math.floor(s/86400);
    $('cd-h').textContent = String(Math.floor(s%86400/3600)).padStart(2,'0');
    $('cd-m').textContent = String(Math.floor(s%3600/60)).padStart(2,'0');
    $('cd-s').textContent = String(s%60).padStart(2,'0');
  }
  tick(); setInterval(tick,1000);

  // Events + calendar links
  function gcal(ev){
    var st = new Date(ev.start), en = new Date(st.getTime()+(ev.hours||2)*3600000);
    var z = function(d){return d.toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'')};
    return 'https://calendar.google.com/calendar/render?action=TEMPLATE&text='+encodeURIComponent(ev.title+' — '+W.groom+' & '+W.bride)+
      '&dates='+z(st)+'/'+z(en)+'&location='+encodeURIComponent(ev.venue+(ev.address?', '+ev.address:''))+'&details='+encodeURIComponent(ev.timeText||'');
  }
  function icsHref(ev){
    var st = new Date(ev.start), en = new Date(st.getTime()+(ev.hours||2)*3600000);
    var z = function(d){return d.toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'')};
    var t = function(s){return String(s).replace(/([,;])/g,'\\$1').replace(/\n/g,'\\n')};
    var ics = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Wedding//EN','BEGIN:VEVENT','UID:'+z(st)+'@wedding','DTSTAMP:'+z(new Date()),
      'DTSTART:'+z(st),'DTEND:'+z(en),'SUMMARY:'+t(ev.title+' — '+W.groom+' & '+W.bride),'LOCATION:'+t(ev.venue+(ev.address?', '+ev.address:'')),
      'DESCRIPTION:'+t(ev.timeText||''),'END:VEVENT','END:VCALENDAR'].join('\r\n');
    return 'data:text/calendar;charset=utf-8,'+encodeURIComponent(ics);
  }
  var EVENTS = (W.side === 'bride'
    ? [W.haldi, W.pellikuthuru, W.reception, W.wedding]
    : [W.haldi, W.pellikoduku, W.reception, W.wedding]
  ).slice().sort(function(a,b){return new Date(a.start)-new Date(b.start)});
  $('eventList').innerHTML = EVENTS.map(function(ev){
    var st = new Date(ev.start);
    var when = ev.tba ? 'Date &amp; time to be announced' : esc(ev.timeText);
    return '<article class="event reveal'+(ev.tba?' tba':'')+'"><div class="date">'+fmt(st,{weekday:'long',day:'numeric',month:'long'})+'</div>'+
      '<h3>'+esc(ev.title)+'</h3>'+(ev.telugu?'<div class="te">'+esc(ev.telugu)+'</div>':'')+
      '<div class="time">'+when+'</div>'+
      '<div class="tag">'+esc(ev.tagline)+'</div>'+
      '<div class="venue">'+esc(ev.venue)+'</div>'+(ev.address?'<div class="addr">'+esc(ev.address)+'</div>':'')+
      (ev.mapsLink?'<a class="maplink" href="'+esc(ev.mapsLink)+'" target="_blank" rel="noopener">View on map</a>':'')+
      (ev.tba?'':'<div class="cal"><a href="'+gcal(ev)+'" target="_blank" rel="noopener">Google Calendar</a>'+
      '<a href="'+icsHref(ev)+'" download="'+esc(ev.title.replace(/\s+/g,'-'))+'.ics">Apple / Outlook</a></div>')+'</article>';
  }).join('');

  // Gallery + lightbox
  var gi = 0, lb = $('lightbox'), lbImg = lb.querySelector('img');
  $('galleryGrid').innerHTML = W.gallery.map(function(g,i){
    return '<button data-i="'+i+'" aria-label="Open photo '+(i+1)+'"><img src="'+esc(g.src)+'" alt="'+esc(g.alt)+'" loading="lazy"></button>';
  }).join('');
  function show(i){gi=(i+W.gallery.length)%W.gallery.length;lbImg.src=W.gallery[gi].src;lbImg.alt=W.gallery[gi].alt;lb.hidden=false}
  $('galleryGrid').addEventListener('click',function(e){var b=e.target.closest('button');if(b)show(+b.dataset.i)});
  lb.querySelector('.lb-close').onclick=function(){lb.hidden=true};
  lb.querySelector('.lb-prev').onclick=function(){show(gi-1)};
  lb.querySelector('.lb-next').onclick=function(){show(gi+1)};
  lb.addEventListener('click',function(e){if(e.target===lb)lb.hidden=true});
  document.addEventListener('keydown',function(e){if(lb.hidden)return;if(e.key==='Escape')lb.hidden=true;if(e.key==='ArrowLeft')show(gi-1);if(e.key==='ArrowRight')show(gi+1)});

  // Venue / map
  var q = encodeURIComponent(W.mapQuery);
  $('venueName').textContent = 'Rahul Convention Centre — Tiruchanuru Road, Tirupati';
  $('mapFrame').src = 'https://www.google.com/maps?q='+q+'&output=embed';
  $('mapLink').href = W.mapsLink;
  $('mapDirections').href = 'https://www.google.com/maps/dir/?api=1&destination='+q;
  $('contacts').innerHTML = (W.contacts||[]).map(function(c){
    return '<div><h4>'+esc(c.name)+'</h4><a href="tel:'+esc(c.phone.replace(/[^+\d]/g,''))+'">'+esc(c.phone)+'</a></div>';
  }).join('');

  // Nav
  var nav = $('nav'), list = $('navList');
  function onScroll(){nav.classList.toggle('solid', window.scrollY > window.innerHeight*0.6)}
  onScroll(); window.addEventListener('scroll',onScroll,{passive:true});
  $('navToggle').onclick=function(){list.classList.toggle('open')};
  list.addEventListener('click',function(){list.classList.remove('open')});

  // Reveal on scroll
  document.querySelectorAll('.section h2,.couple-card,.family,.gallery button,.story,.lead').forEach(function(el){el.classList.add('reveal')});
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12}) : null;
  document.querySelectorAll('.reveal').forEach(function(el){io?io.observe(el):el.classList.add('in')});
})();
