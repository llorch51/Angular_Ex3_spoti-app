import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  //variables
  artista:any={};
  loadingArtist:boolean;
  topTracks:any[]=[];

  constructor(private _route:ActivatedRoute,
              private spotify:SpotifyService) {
      
    this.loadingArtist=true;
    _route.params.subscribe(params =>{//nombre de la respuesta del servicio, puede ser cualquiera
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
   }

   getArtista(id:string){
    this.loadingArtist=true;
     this.spotify.getArtista(id).subscribe(respuesta=>{//nombre de la respuesta del servicio, puede ser cualquier nombre
        console.log(respuesta);
        this.artista=respuesta;
        this.loadingArtist=false;
     });
   }

   getTopTracks(id:string){
     this.spotify.getTopTracks(id).subscribe(respuesta=>{
       console.log(respuesta);
       this.topTracks=respuesta;
     });
   }

}
