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

//SELECTORES//
const carrito = document.querySelector('.header__avatar'); //CARRITO//
const notification = document.querySelector('.header__cart--notification'); //NOTIFICACION//

//FUNCION PARA CONVERTIR EL VALUE DEL IMPUT A STRING, PARA PASARSELO COMO INNERHTML A LA NOTIFICACION DEL CARRITO//
const conversion = (value) =>{
    const string = value.toString();
    return string;
}

let resultado;

//EVENT LISTENER PARA MANDAR EL VALUE DEL INPUT CUANDO SE HAGA CLICK EN EL BOTON PRINCIPAL,//
//A LA NOTIFICACION DEL CARRITO, SE LE AGREGA UNA VALIDACION, EN EL CASO DE QUE EL VALOR SEA//
//DISTINTO A 0, SE LE CAMBIA EL ESTILO DE DISPLAY A ESTA NOTIFICACION PARA QUE SE MUESTRE//
//EN CASO DE QUE SEA 0, SE VUELVE A DISPLAY NONE//

botonPrincipalCarrito.addEventListener('click',()=>{
    resultado = conversion(botonPrincipalValor.value);
    notification.innerHTML = resultado;
    if(botonPrincipalValor.value != 0){
        notification.style.display = 'inline-block';
    }else if(botonPrincipalValor.value == 0){
        notification.style.display = 'none';
    }
})


