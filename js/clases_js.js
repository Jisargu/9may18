"use strict";

class Restaurante {
    constructor(nombre, domicilio, telefono) {
        //Invoca el set porque primero set y luego get
        this.nombre = nombre;
        this.domicilio = domicilio;
        this.telefono = telefono;
    }
    
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set domicilio(domicilio) {
        this._domicilio = domicilio;
    }
    set telefono(telefono) {
        this._telefono = telefono;
    }

    get nombre() {
        return this._nombre;
    }
    get domicilio() {
        return this._domicilio;
    }
    get telefono() {
        return this._telefono;
    }
    mostrarDatos() {
        alert(this.nombre + '\n' + this.domicilio + '\n' + this.telefono);
    }

}//fin clase Restaurante

//comentarios para 1 sola clase
/*    let nuevoRestaurante = new Restaurante();
   let nombre = prompt("Escribe el nombre del restaurante");
   let domicilio = prompt("Escribe el domicilio del restaurante");
   let telefono = prompt("Escribe el telefono del restaurante");
   nuevoRestaurante.nombre = nombre;
   nuevoRestaurante.domicilio = domicilio;
   nuevoRestaurante.telefono = telefono;
   nuevoRestaurante.mostrarDatos(); */


function restaurante() {
    let cantidad_restaurantes = prompt("Escribe la cantidad de restaurantes: ");
    var arreglo = [];
    let i;
    for (i = 0; i < cantidad_restaurantes; i++) {
        arreglo.push(new Restaurante());
        let nombre = prompt("Escribe el nombre del restaurante: " + (i + 1));
        let domicilio = prompt("Escribe el domicilio del restaurante" + (i + 1));
        let telefono = prompt("Escribe el telefono del restaurante" + (i + 1));
        arreglo[i].nombre = nombre;
        arreglo[i].domicilio = domicilio;
        arreglo[i].telefono = telefono;
    }
    for (i = 0; i < cantidad_restaurantes; i++) {
        arreglo[i].mostrarDatos();
    }

}