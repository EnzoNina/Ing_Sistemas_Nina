var animation = anime.timeline({
    autoplay:true
});

  animation
  .add({
    targets:'#texto',    
    top:'10%',
    marginLeft:'0',
    duration:1000,
    easing: 'easeInOutSine',
    }) 
  .add({
      targets:'#btn',
      top:'50%',      
      left: '50%',
      duration:500,
      easing: 'easeInOutSine',
  })     
    .add({
        targets:'#mountains',
        bottom:'0',
        duration:1000,
        easing: 'easeInOutSine',
        })
    .add({
        targets:'#rocks',
        bottom:'0',
        duration:1000,
        easing: 'easeInOutSine',
        })
    .add({
        targets:'#particles-js',    
        top:'0px',
        duration:1000,
        easing: 'easeInOutSine',
        })