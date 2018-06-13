import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/Observable/throw';
//import { Iitem } from './rawMaterial';



@Injectable()
export class MovieService {
	constructor(private _http:Http){}
	getMovieList(search_name:string,pageno:number): Observable<any[]> {
		if(search_name === 'Romantic Comedy')
        return this._http.get('/assets/CONTENTLISTINGPAGE-PAGE'+pageno+'.json')
        	.map((response:Response)=> <any[]> response.json());
    }
}