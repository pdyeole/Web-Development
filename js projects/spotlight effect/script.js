addEventListener('mousemove',(evt)=>{
    document.body.style.setProperty('--x', evt.clientX + 'px');
    document.body.style.setProperty('--y', evt.clientY + 'px');

})