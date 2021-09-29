function verificar(){
    var data = new Date()
    var ano = data.getFullYear() //ele pega os 4 números do ano
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fAno.value.length == 0 || fAno.value > ano  || fAno.value.length < 4){
        window.alert('[ERRO] O ano tem que conter 4 números e ser menor que o ano atual')
    }else {
        var fSex = document.getElementsByName('radsex') //pegará os dois, mas caso quiser selecionar apenas um use '[0]' que ele pegará o primeiro ou o '[1]' que ele pegará o segundo
        var idade = ano - Number(fAno.value)  
        var imagem = document.createElement('img') //estou criando a tag <img>
        imagem.setAttribute('id','foto')//estou adicionando o id na tag 'img' como foto --> <img id="foto"> 
        if(fSex[0].checked){
            var genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //Criança
            }else if(idade < 21){
                //Jovem
            }else if(idade < 50){
                //Adulto
            }else {
                //Idoso
            }
        }else{
            var genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                //Criança
            }else if(idade < 21){
                //Jovem
            }else if(idade < 50){
                //Adulto
            }else {
                //Idoso
            }
        }
        res.innerHTML = `Você tem ${idade} anos e é ${genero}`
    }
}