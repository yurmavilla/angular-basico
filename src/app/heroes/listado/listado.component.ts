import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  
  heroes: string[] = ['Spiderman','Ironman','Hulk','MujerM'] // Es un arreglo de String 
  heroeBorrado: string = '';

  borrarHeroe(){   // Elimina el primer elemento del array y lo retorna  
    console.log('borrando...');
    this.heroeBorrado = this.heroes.shift() || ''; 

  }
}
