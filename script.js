//ESCONDER E APARECER COM O MENU
document .querySelector("#ativa")
    .addEventListener("click", function(){
        document 
            .querySelector(".menu")
            .classList.toggle('hide')
    })


//PARA MOSTRAR A SENHA
document.getElementById('olho').addEventListener('mousedown', function(){
    document.getElementById('senha').type = "text";
});

//PARA OCULTAR A SENHA
document.getElementById('olho').addEventListener('mouseup', function(){
    document.getElementById('senha').type = "password";
});

//PARA QUE O PASSWORD NÃO FIQUE EXPOSTO APOS MOVER A IMAGEM
document.getElementById('olho').addEventListener('mousemove', function(){
    document.getElementById('senha').type = "password";
});