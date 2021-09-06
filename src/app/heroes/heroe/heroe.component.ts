import { Component } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre: string = 'Ironman';
    edad  : number = 45

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase()
    }// propieddad que cuando la llame sea procesada

    obtenerNombre(): string{
        return`${this.nombre }- ${ this.edad}`; // construir un string, Concatenar
    }

    cambiarNombre(): void{
        this.nombre = 'Spiderman';
    }
    cambiarEdad(): void{
        this.edad = 60;
    }
        
}