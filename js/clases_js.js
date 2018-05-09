"use strict";
function restaurante() {
    class Restaurante {
        constructor(nombre, domicilio, telefono) {
            this.nombre = nombre;
            this.domicilio = domicilio;
            this.telefono = telefono;
        }
        get nombre(){
            return this._nombre;
        }
        get domicilio(){
            return this._domicilio;
        }
        get telefono(){
            return this._telefono;
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
        mostrarDatos() {
            alert(this.nombre + '\n' + this.domicilio + '\n' + this.telefono);
        }

    }//fin clase Restaurante
    let nuevoRestaurante= new Restaurante();
    let nombre = prompt("Escribe el nombre del restaurante");
    let domicilio = prompt("Escribe el domicilio del restaurante");
    let telefono = prompt("Escribe el telefono del restaurante");
    nuevoRestaurante.nombre=nombre;
    nuevoRestaurante.domicilio=domicilio;
    nuevoRestaurante.telefono=telefono;
    nuevoRestaurante.mostrarDatos();
    

}