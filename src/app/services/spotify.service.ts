import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';  


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http:HttpClient) { 
    console.log("Servicio spotify listo");
  }

  getQuery(query:string){
    const URL=`https://api.spotify.com/v1/${query}`;

    const headers=new HttpHeaders({
      'Authorization':'Bearer BQABC9Pcq4glmWzuBctBS0lOKramGXPR-PVMXms1EbJ-S9Kz98H66n9OSg575JqXrNo3nxPtlFew8vq_6p0'
    });

    return this._http.get(URL,{headers});
  }

  getNewReleases(){

    // const headers=new HttpHeaders({
    //   'Authorization':'Bearer BQD5XN3x_5eaOn1cBGFVfJMqCnor5gjTYwRJtOzW1f2_OTNVdkyO-Q0EwNbK2uIqzqjpY29ESZDpcu2HNC4'
    // });
    return this.getQuery('browse/new-releases')
                .pipe(map(respuesta=>{
                    return respuesta['albums'].items;
              }));
    // return this._http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
    // .pipe(map(respuesta=>{
    //   return respuesta['albums'].items;
    // }));

  }

  getArtistas(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                .pipe(map(respuesta=>{
                    return respuesta['artists'].items;
              }));
    // return this._http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers})
    // .pipe(map(respuesta=>{
    //   return respuesta['artists'].items;
  }

getArtista(id:string){

    return this.getQuery(`artists/${id}`);
              //   .pipe(map(respuesta=>{
              //       return respuesta['artists'].items;
              // }));
            }

getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=mx`)
            .pipe(map(respuesta=>{
                  return respuesta['tracks']
    }));

            }

}
