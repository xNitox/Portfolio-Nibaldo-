var toggle= document.getElementById('container_toggle');
var body = document.querySelector('body');
var contenidoToggle = document.querySelector('.toggle')

toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    
    if(toggle.classList.contains('active')){
        contenidoToggle.innerHTML = '<img src="/images/icon-toggle/sol.png" alt="Modo oscuro">';
    } else{
        contenidoToggle.innerHTML = '<img src="/images/icon-toggle/luna.png" alt="Modo claro">';
    }
}
