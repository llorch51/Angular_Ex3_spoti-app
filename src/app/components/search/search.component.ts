import { Component} from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  //variables
  artistas:any[]=[];
  loading:boolean;
  

  constructor(private _spotify:SpotifyService) {  }

buscar(termino:string){
  console.log(termino);
  this.loading=true;

  this._spotify.getArtistas(termino).subscribe(respuesta=>{
    console.log(respuesta);
    this.artistas=respuesta;
    
    this.loading=false;
  });
}

}
