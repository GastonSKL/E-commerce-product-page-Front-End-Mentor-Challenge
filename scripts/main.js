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

//FUNCIONALIDAD AL CARRITO//

const carritoModal = document.querySelector('.cart-modal');
const botonCompra = document.querySelector('.cart-modal__buy');

carrito.addEventListener('click',()=>{
      carritoModal.style.display = 'block';

})

botonCompra.addEventListener('click',()=>{
    carritoModal.style.display = 'none';
});

//////////////////////////////////////////////////////////////////////////////////

//Galeria principal//

const imagenMain = document.querySelector('.gallery__image-container'); //CONTENEDOR CON EL BACKGROUND_IMAGE
const modalBackground = document.querySelector('.modal-gallery__background'); //GALERIA MODAL
const botonCierre = document.querySelector('.modal-gallery__close'); //BOTON DE CIERRE DE GALERIA MODAL
const imagenSmall = document.querySelector('.gallery__thumnail');  //THUMBNAILS PRINCIPALES
const imagenSmall1 = document.querySelector('.gallery__thumnail-1');
const imagenSmall2 = document.querySelector('.gallery__thumnail-2');
const imagenSmall3 = document.querySelector('.gallery__thumnail-3');
const imagenSmall4 = document.querySelector('.gallery__thumnail-4');
const imagenSmallModal1 = document.querySelector('.modal-gallery_thumnail-1'); //THUMBNAILS MODALES
const imagenSmallModal2 = document.querySelector('.modal-gallery_thumnail-2');
const imagenSmallModal3 = document.querySelector('.modal-gallery_thumnail-3');
const imagenSmallModal4 = document.querySelector('.modal-gallery_thumnail-4');
const contenedorImagen = document.querySelector('.modal-gallery__image-container'); //CONTENEDOR CON EL BACKGROUND_IMAGE MODAL
const botonSiguiente = document.querySelector('.modal-gallery__next'); //BOTONES DE SIGUIENTE Y ANTERIOR MODALES
const botonAnterior = document.querySelector('.modal-gallery__previus');
const botonAnteriorPrincipal = document.querySelector('.gallery__previus');
const botonSiguientePrincipal = document.querySelector('.gallery__next');

//EVENT LISTENERS PARA LA SELECCION DE IMAGENES

         

botonCierre.addEventListener('click',()=>{
    modalBackground.style.display = 'none';
})

imagenSmall1.addEventListener('click',()=>{
    modalBackground.style.display = 'block';
    contenedorImagen.style.backgroundImage = 'url(images/image-product-1.jpg)'
})

imagenSmall2.addEventListener('click',()=>{
    modalBackground.style.display = 'block';
    contenedorImagen.style.backgroundImage = 'url(images/image-product-2.jpg)'
})

imagenSmall3.addEventListener('click',()=>{
    modalBackground.style.display = 'block';
    contenedorImagen.style.backgroundImage = 'url(images/image-product-3.jpg)'
})

imagenSmall4.addEventListener('click',()=>{
    modalBackground.style.display = 'block';
    contenedorImagen.style.backgroundImage = 'url(images/image-product-4.jpg)'
})

imagenSmallModal1.addEventListener('click',()=>{
    contenedorImagen.style.backgroundImage = 'url(images/image-product-1.jpg)'
})

imagenSmallModal2.addEventListener('click',()=>{
    contenedorImagen.style.backgroundImage = 'url(images/image-product-2.jpg)'
})

imagenSmallModal3.addEventListener('click',()=>{
    contenedorImagen.style.backgroundImage = 'url(images/image-product-3.jpg)'
})

imagenSmallModal4.addEventListener('click',()=>{
    contenedorImagen.style.backgroundImage = 'url(images/image-product-4.jpg)'
})

//FUNCIONES PARA LOS EVENT LISTENERS DE LOS BOTONES DE SIGUIENTE Y ANTERIOR DEL MODAL GALLERY

let contador = 1;
const siguiente =()=>{
    if(contador == 1){
        contenedorImagen.style.backgroundImage = 'url(images/image-product-2.jpg)';
        contador++;
    }else if(contador == 2){
        contenedorImagen.style.backgroundImage = 'url(images/image-product-3.jpg)';
        contador++;
    }else if(contador == 3){
        contenedorImagen.style.backgroundImage = 'url(images/image-product-4.jpg)';
        contador++;
    }else if(contador == 4){
        contenedorImagen.style.backgroundImage = 'url(images/image-product-1.jpg)';
        contador = 1;
    }
    return contador;
}

const anterior = () =>{
    if(contador == 1){
        contenedorImagen.style.backgroundImage = 'url(images/image-product-4.jpg)';
        contador= 4;
    }else if(contador == 2){
        contenedorImagen.style.backgroundImage = 'url(images/image-product-1.jpg)';
        contador--;
    }else if(contador == 3){
        contenedorImagen.style.backgroundImage = 'url(images/image-product-2.jpg)';
        contador--;
    }else if(contador == 4){
        contenedorImagen.style.backgroundImage = 'url(images/image-product-3.jpg)';
        contador --;
    }
    return contador;
}

botonSiguiente.addEventListener('click',()=>{
    siguiente();
})

botonAnterior.addEventListener('click',()=>{
    anterior();
})

const anterior1 = () =>{
    if(contador == 1){
        imagenMain.style.backgroundImage = 'url(images/image-product-4.jpg)';
        contador= 4;
    }else if(contador == 2){
        imagenMain.style.backgroundImage = 'url(images/image-product-1.jpg)';
        contador--;
    }else if(contador == 3){
        imagenMain.style.backgroundImage = 'url(images/image-product-2.jpg)';
        contador--;
    }else if(contador == 4){
        imagenMain.style.backgroundImage = 'url(images/image-product-3.jpg)';
        contador --;
    }
    return contador;
}

const siguiente1 =()=>{
    if(contador == 1){
        imagenMain.style.backgroundImage = 'url(images/image-product-2.jpg)';
        contador++;
    }else if(contador == 2){
        imagenMain.style.backgroundImage = 'url(images/image-product-3.jpg)';
        contador++;
    }else if(contador == 3){
        imagenMain.style.backgroundImage = 'url(images/image-product-4.jpg)';
        contador++;
    }else if(contador == 4){
        imagenMain.style.backgroundImage = 'url(images/image-product-1.jpg)';
        contador = 1;
    }
    return contador;
}

botonAnteriorPrincipal.addEventListener('click',()=>{
    anterior1();
})

botonSiguientePrincipal.addEventListener('click',()=>{
    siguiente1();
})

////////////////////////////////////////////////////////////

//MODAL CHECKOUT//

const precio = document.querySelector('.cart-modal__price');
const precioTotal = document.querySelector('.cart-modal__price-price');

const conversionStringInt = (string) =>{
    numero = parseInt(string);
    return numero;
}


let total = 0;



carrito.addEventListener('click',()=>{
    if(notification.innerHTML != "0"){
        total = conversionStringInt(notification.innerHTML);
        precioTotal.innerHTML = `${125 * botonPrincipalValor.value}`;
        precio.innerHTML = `$125 x${botonPrincipalValor.value}`;
    }

})


/////////////////////////////////////////////////////////////////////////

//MODAL NAVBAR//

const botonCierreModal = document.querySelector('.modal-close');
const modalNavbar = document.querySelector('.modal-navbar');
const botonHamburguesa = document.querySelector('.header__menu');
const modalNavBarBackground = document.querySelector('.modal-navbar__background');

botonHamburguesa.addEventListener('click',()=>{
    modalNavBarBackground.style.display = 'block';
    modalNavbar.style.display = 'block';
})

botonCierreModal.addEventListener('click',()=>{
    modalNavBarBackground.style.display = 'none';
    modalNavbar.style.display = 'none';
})


