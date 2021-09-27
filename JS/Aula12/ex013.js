agora = new Date()
diaSem = agora.getDay(); //Escreve o dia da semana

switch(diaSem){
    case 0:
        Console.log('Domingo')
        break
    
    case 1: 
        console.log('Segunda')
        break
    
    case 2:
        console.log('Terça')
        break
    
    case 3:
        console.log('Quarta')
        break

    case 4:
        console.log('Quinta')
        break

    case 5:
        console.log('Sexta')
        break

    case 6: 
        console.log('Sábado')
        break

    default:
        console.log('ERRO, dia invalido')
        break
}