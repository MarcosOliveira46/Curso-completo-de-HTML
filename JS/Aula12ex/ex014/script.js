/* 
O método 'serInterval' serve unicamente pra carregar os parâmetros a cada (nesse caso) 1000 
milésimos de segundos, nesse caso, eu ja declarei uma função (funcional = que eu estou usando na tag 'body') 
dentro desse método (setInterval) para atualizar a cada 1 segundo, porém, caso você ja tenha o método feito 
você pode coloca-lo, somente, dentro do método ao inves de fazer tudo direto dentro do método 'setInverval'. 
Além disso, é possível declarar uma função dentro do método sem dar nome a eleda seguinte maneira: 
    setInterval(() => {...}, 1000) -- que é a mesma coisa que --> setInterval(function () {...}, 1000)  
*/

setInterval(function carregar(){ 

    
    const zeroFill = n => { /* O 'n' vai ser aquele que ele vai pegar do método. Mesma coisa que isso:
                            const zeroFill (function(n){...}) 'acho'*/ 
    return ('0' + n).slice(-2);
    }
    

    var horario = window.document.getElementById('horario');
    var img = window.document.getElementById('imagem');
    var now = new Date();
    var horas = now.getHours(); 
    var minutos = now.getMinutes();
    var segundos = now.getSeconds();
    
    horario.innerHTML = `${zeroFill(horas)}:${zeroFill(minutos)}:${zeroFill(segundos)}`;

    if(horas >= 6 && horas < 13){
        img.src = './img/manhã-new.png'
        document.body.style.background = '#98b0b2'
    } else if (horas >= 13 && horas < 19){
        img.src = './img/tarde-new.png'
        document.body.style.background = '#d0bcab'
    } else {
        img.src = './img/noite-new.png'
        documento.body.style.background = '#387cb1'
    }
}, 1000)  

/*  
    A seguinte maneira também é possível:

        function moveRelogio() {
        momentoAtual = new Date()
        hora = momentoAtual.getHours() --> não é obrigatório colocar o 'var' nesse caso.
        minuto = momentoAtual.getMinutes()
        segundo = momentoAtual.getSeconds()

        horaImprimivel = hora + "h" + " : " + minuto + "m : " + segundo + "s"

        document.form_relogio.relogio.value = horaImprimivel

        setTimeout("moveRelogio()", 1000)
    }
*/ 
/*
DIFERENÇA ENTRE "setTimeout()" e "setInterval()":

setTimeout() Executa um bloco específico uma vez depois de um determinado tempo. 
setInterval() Executa um bloco específico repetidamente com um intervalo fixo entre cada chamada.
*/
