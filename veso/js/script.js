let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

const btn = document.querySelector('.navbar');

btn.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
})


window.onscroll = () =>{
    navbar.classList.remove('active');
}
