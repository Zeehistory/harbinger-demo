// Harbinger Labs — shared article behaviour: scroll reveals + bar fills.
(function(){
  const R = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const io = new IntersectionObserver((es)=>{
    es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold:0.12, rootMargin:'0px 0px -6% 0px' });
  document.querySelectorAll('.rv').forEach(el=>io.observe(el));

  const bio = new IntersectionObserver((es)=>{
    es.forEach(e=>{ if(e.isIntersecting){
      e.target.querySelectorAll('.bar-fill').forEach((f,i)=>{ const w=f.dataset.w||'0'; setTimeout(()=>{ f.style.width=w; }, R?0:150+i*110); });
      e.target.classList.add('is-in'); bio.unobserve(e.target);
    }});
  }, { threshold:0.3 });
  document.querySelectorAll('.bars').forEach(el=>bio.observe(el));
})();
