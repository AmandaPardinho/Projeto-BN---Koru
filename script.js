
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

//evento para disparar mensagem de saída da página
// document.addEventListener('mouseleave', (event) =>{
//     alert('Você já vai embora? T-T');
// });

//enviar e-mail


function enviarForms(){
    var nome = document.querySelector('#nome').value;
    var empresa = document.querySelector('#empresa').value;
    var setor = document.querySelector('#setor').value;
    var email = document.querySelector('#email').value;
    var numero = document.querySelector('#number');
    //não estou conseguindo pegar o valor do imput do tipo number....
    var mensagem = document.querySelector('#mensagem').value;

    if(nome == '' || empresa == '' || email == '' || numero == ''){
        alert('Por favor complete os campos obrigatórios corretamente!')
    }else{

        alert("Formulário enviado com sucesso! " + nome);
        console.log(nome);
    }

}

var enviarEmail = document.querySelector('#enviarEmail');
enviarEmail.onclick = enviarForms;

/*
//função para enviar o formulário por e-mail
function enviarForms(){    
    const nodemailer = require('nodemailer');
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'projeto.korubn@gmail.com',
            pass: 'grUp04d&v'
        }
    });

    let mailOption = {
        from: 'projeto.korubn@gmail.com',
        to: 'projeto.korubn@gmail.com',
        subject: 'Formulário de Contato',
        text: `Nome: ${document.getElementById('nome').value}
        \nEmpresa: ${document.getElementById('empresa').value}
        \nSetor: ${document.getElementById('setor').value}
        \nEmail: ${document.getElementById('email').value}
        \nWhatsApp: ${document.getElementById('campoNumero').value}
        \nMensagem: ${document.getElementById('mensagem').value}`
    };

    transporter.sendMail(mailOption, function(error, info){
        if(error){
            alert(' Falha ao enviar o formulário');
        }else{
            alert('Formulário enviado com sucesso! ' + info.response)
        }
    });
}*/

/* enviando o e-mail ao clicar no botão enviar
var enviarEmail = document.querySelector('#enviarEmail');
enviarEmail.onclick = enviarForms;
*/






