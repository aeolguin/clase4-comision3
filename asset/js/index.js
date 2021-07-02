

function temporal () {
    setTimeout(()=> {
        console.log('Esto se imprime segundo.... ?????')
    },2000)
};

imprimeAlgo('Esto se imprime primero');
temporal();
imprimeAlgo('Esto se imprime tercero!')



function llamadora (call) {
    //lo que voy a hacer es llamar a una funcion call
    let texto = 'Este texto se imprime desde la llamada de una callb.'

    call(texto)
};



let numeros = [10,20,30,40];

llamadora(imprimeAlgo);

numeros.forEach(data => {
    if (data == 40){
        imprimeAlgo('La posicion 3 es igual a 30')
    }else {
        imprimeAlgo('no existe el numero 30 en la posicion 3')
    }
});

const accionar = document.getElementById('toco')

console.log(accionar)
const abrir = document.getElementById('abro')

accionar.addEventListener('click', ()=> {
    abrir.style.display = 'block'
    //Hacer el pedido a un servidor para que me devuelva informacion
    //Asincronico.
})





