import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  //variables
  nuevasCanciones:any[]=[];
  loading:boolean;
  error:boolean;
  mensajeError:string;

  constructor(private _spotify:SpotifyService) {

    this.loading=true;
    this.error=false;

    this._spotify.getNewReleases().subscribe((respuesta:any)=>{
      console.log(respuesta);
      this.nuevasCanciones=respuesta;

      this.loading=false;

    }, (errorServicio)=>{
      this.loading=false;
      this.error=true;
      console.log(errorServicio);
      this.mensajeError= errorServicio.error.error.message;
    });

   }

}
