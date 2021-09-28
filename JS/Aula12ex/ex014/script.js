function carregar(){
    setInterval(function (){ //OU '(() => {...}' essa seta representa função tmb, junto com o '()'
        /*const zeroFill = n => {
            return ('0' + n).slice(-2);
        }*/
            var msg = window.document.getElementById('msg');
            var img = window.document.getElementById('imagem');
            var now = new Date();
            var horas = now.getHours();
            var minutos = now.getMinutes();
            var segundos = now.getSeconds();
            
            msg.innerHTML = `${horas}:${minutos}:${segundos}`;

            if(horas >= 6 && horas < 13){
                //BOM DIA!!
            } else if (horas >= 13 && horas < 19){
                //BOA TARDE
            } else if ( horas >= 19 && horas < 6){
                //BOA NOITE
            }
    }, 1000)  
}