
function openNav(){
    /*alert("clicou no menu");*/
    document.getElementById("myNav").style.width = '100%';
}

function closeNav(){
    document.getElementById("myNav").style.width = '0%';
}

//clicar no menu para abrir
var abrirMenu = document.querySelector('#button-menu');
abrirMenu.onclick = openNav;

//clicar no X para fechar o menu
var fecharMenu = document.querySelector('#fechar-menu');
fecharMenu.onclick = closeNav;

//fecha o menu quando clicar no item formulario e direciona para o mesmo
var fecharMenuForms = document.querySelector('#forms');
fecharMenuForms.onclick = closeNav;

//fecha o menu ao clicar em redes sociais e direciona para o mesmo
var fecharMenuRedes = document.querySelector('#social-media');
fecharMenuRedes.onclick = closeNav;

//fecha o menu ao clicar em baixar App e direcionao ao mesmo
var fecharMenuBaixarApp = document.querySelector('#baixar-app');
fecharMenuBaixarApp.onclick = closeNav;

