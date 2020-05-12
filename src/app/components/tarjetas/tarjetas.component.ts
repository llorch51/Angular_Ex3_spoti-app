import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})

export class TarjetasComponent {

  @Input() items:any[]=[];

  constructor(private _router:Router) { }

  verArtista(item:any){
    
    let artistaID;

    if(item.type==='artist'){
      artistaID=item.id;
    }else{
      artistaID=item.artists[0].id;
    }
    //console.log(artistaID);

    this._router.navigate(['/artist', artistaID])
  }
  

}
