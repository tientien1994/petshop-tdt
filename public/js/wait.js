waiting=new TimelineMax();

     waiting.from($('.wait'),0.7,{opacity:0.3})
     .from($('.wait'),0.7,{opacity:1})
     .from($('.wait'),0.7,{opacity:0.3})
     .to($('.wait-img'),0,{opacity:0, scale:0.1})
     .to($('.wait-img'),0.6,{opacity:1, scale:1})
     .to($('.wait-water'),0,{opacity:1})
     .to($('.wait-water'),1,{opacity:1, y:300})
     .to($('.wait-img'),0.3,{opacity:1, scale:1.2})
     .to($('.wait-water'),0,{opacity:1,y:-300})
     .to($('.wait-water'),1,{opacity:1, y:300})
     .to($('.wait-img'),0.3,{opacity:1, scale:1.4})
     .to($('.wait-water'),0,{opacity:1,y:-300})
      .to($('.wait-water'),1,{opacity:1, y:300})
     .to($('.wait-img'),0.3,{opacity:1, scale:1.6})
     .to($('.wait'),1.5,{x:"100%"})
     .then($('.main-2'),2,{x:"-100%"})

     waiting_2=new TimelineMax();
     waiting_2.from($('.main, .main-2'),1.5,{x:"-100%", delay:6.6})

     setTimeout(function() {
        $('.first-layer1,.first-layer2,.first-layer3,.first-layer4,.first-layer5,.first-layer6').addClass('layerac')
        $('.first-img').addClass('layerscale')
        
     },
     6800)
     