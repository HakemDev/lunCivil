
//declartion des elements
let verifier=document.querySelector('.verifier');
let impression=document.querySelector('.imprimer');
let font=document.querySelector('.fontt');
let font_ex=document.getElementById('faan');



//contruire des fonctions events
let changer=(e)=>{
    e.preventDefault();
    e.returnValue="";
    console.log(e.target);
    console.log(e.currentTarget);
    verifier.classList.toggle('btn-danger');
    verifier.classList.toggle('btn-warning');
    verifier.classList.toggle('disabled');

    impression.classList.toggle('btn-success');
    impression.classList.toggle('disabled');
    impression.classList.toggle('btn-secondary');

    let i=document.createElement('i');
    i.classList.add('fa');
    i.classList.add('fa-smile-o','bg-light');
    i.setAttribute('style','font-size:36px');
    font_ex.after(i);
    font_ex.remove();
    
    
}

//declation events
verifier.addEventListener('click', changer);
