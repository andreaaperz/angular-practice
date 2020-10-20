import { Component } from '@angular/core';

//Interfaz, puede estar declarada en el ts o en un proyecto aparte
export interface IUSer {
  name:String;
  id:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //Inicializa variables
  title = 'salle-app';
  imagen = './../assets/Imagenes/3fc59640f60a8e3d4ea3bb0701c59861.jpg';
 /*  items = new Array(10); */
 // items = [{name: 'omar'}, {name: 'Juan'}];
 showText = false;
 value = 2;
 addClass = false; 

 date = new Date().toString();

 //Arreglo de Usuarios
 items: IUSer[] = [
{name: 'Omar', id: 1},
{name: 'Juan', id: 2},
{name: 'Vic', id: 3},
 ];

 constructor(){
 }

 //cambiar URL de la imágen
  onChangeImage(url:string){
    this.imagen=url;
  }

  onValidate(){
    console.log('entró');
    return this.showText;
  }

  //Funcion para desplegar y ocultar 
  onChangeShow(){
    this.showText = !this.showText;
  }

  //Manda las propiedades del componente a la consola
  outUserMethod(user: IUSer): void{
    console.log(user)
  }
}
