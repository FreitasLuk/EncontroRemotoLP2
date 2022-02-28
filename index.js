let ListaDeAlunos = 20

console.log('////////Sistema de contagem')
for (cont=0;cont<=ListaDeAlunos;cont++){
    if(cont == 0){
        console.log('\no numero é zero', cont)

    }
    else if(cont%2 == 0){
            console.log('\no numero é par:   ', cont)
        }
        else{
            console.log('\no numero é impar: ', cont)

        }
}
