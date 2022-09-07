window.onload=()=>{
    const $ = document.querySelector.bind(document);
const $All = document.querySelectorAll.bind(document);

document.querySelectorAll('.navlink').forEach(l=>l.addEventListener('click',e => document.getElementById('menu__toggle').click()));

}