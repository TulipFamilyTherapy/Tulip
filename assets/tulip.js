(function(){
  var b=document.getElementById('burger'), n=document.getElementById('nav');
  if(b&&n){
    b.addEventListener('click',function(){
      var open=n.classList.toggle('open');
      b.setAttribute('aria-expanded',open?'true':'false');
    });
    n.addEventListener('click',function(e){
      if(e.target.tagName==='A'){n.classList.remove('open');b.setAttribute('aria-expanded','false');}
    });
  }
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var r=document.getElementById('rootsWrap');
  if(r&&!reduce){
    requestAnimationFrame(function(){
      r.style.transition='clip-path 2s cubic-bezier(.22,.7,.3,1) .25s';
      requestAnimationFrame(function(){ r.style.clipPath='inset(0 0 0 0)'; });
    });
  } else if(r){ r.classList.remove('roots-clip'); }
  if(reduce||!('IntersectionObserver' in window)){
    document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in');});
  } else {
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    },{rootMargin:'0px 0px -12% 0px'});
    document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
  }
})();
