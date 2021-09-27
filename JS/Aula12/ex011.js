/*var idade = 22
var nacio = 'brasil'
if(idade < 16 && nacio == 'brasil'){
    console.log('Não pode votar')
}else if (idade >= 16 && nacio == 'brasil'){
    console.log('pode votar')
}else if (idade >= 64 && nacio.toUpperCase == 'BRASIL'){
    console.log('opcional')
}*/



var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes();
var segundos = agora.getSeconds();
var dia = agora.getDate();
var nomeSemana = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
var nomeMes = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho","julho", "agosto",
"setembro", "outubro", "novembro", "dezembro")

console.log(`Hoje é ${nomeSemana[agora.getDay()]}, ${agora.getDate()} de ${nomeMes[agora.getMonth()]} de ${agora.getFullYear()}`) /*o 'getDay()' mostra o dia da semana, 
enquanto 'getDate' mostra o dia em si*/
var horas = (`${hora}:${minutos}:${segundos}`)
console.log('horas: ' + horas)

var nome = 'Marcos Vinícius'
if(hora >= 6 && hora < 13){
 console.log('Bom dia,' + nome)
}else if(hora >= 13 && hora < 19){
    console.log('Boa tarde, '+nome)
}else{
    console.log('Boa noite, ' +nome)
}
