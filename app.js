const manuToggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// for toggle...
manuToggle.onclick = ()=>{
    document.body.classList.toggle('show-nav');
}

// open sign up
open.onclick = ()=>{
     modal.classList.add('show-modal')
}
// for close sign up
close.onclick = ()=>{
    modal.classList.remove('show-modal')
}

window.onclick = (e)=>{
    e.target === modal ? modal.classList.remove('show-modal') : false; 
}