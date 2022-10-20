//////////////////////////////////////////////////////////////////////////////////////////////
//BOTON DE CARRITO PRINCIPAL//

//SELECTORES//
const botonPrincipalCarrito = document.querySelector('.details__button');
const botonPrincipalAdicion = document.querySelector('.details__input-plus');
const botonPrincipalSustraccion = document.querySelector('.details__input-minus');
const botonPrincipalValor = document.querySelector('.details__input-number');

//FUNCIONES DE ADICION Y SUSTRACCION//

let inicio = 0;

let adicion = () =>{
    botonPrincipalValor.value = ++inicio;
}

let sustraccion = () =>{
    botonPrincipalValor.value = --inicio;
}

//EVENT LISTENERS//

botonPrincipalAdicion.addEventListener('click',()=>{
    if(botonPrincipalValor.value <5){                         //SE LE PONE UN LIMITE DE 5 ARTICULOS Y UN MINIMO DE 0 PARA QUE NO HAYA NUMEROS NEGATIVOS//
        adicion();
    }
});
botonPrincipalSustraccion.addEventListener('click',()=>{
    if(botonPrincipalValor.value > 0){
        sustraccion();
    }
});

console.log(botonPrincipalValor);

////////////////////////////////////////////////////////////////////////////////////////////////

//CARRITO Y PROFILE PICTURE //

const carrito = document.querySelector('.header__avatar'); //CARRITO//
const notification = document.querySelector('.header__cart--notification'); //NOTIFICACION//

const conversion = (value) =>{
    const string = value.toString();
    return string;
}


