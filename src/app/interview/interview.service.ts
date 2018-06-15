import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import { User } from './user';

@Injectable()
export class InterviewService {
	private _productUrl = '/api/rawSilver';
	private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });
    user:User[] = [
    	{ 	id: "0",
    		name: "name0",                   
    		surname: "surname0",                    
    		birthDate: "24-8-1981",                    
    		phone: "634523125",                    
    		city: "Wroclaw",                    
    		street: "Mydlana",                    
    		number: "1"},
    	{                  
    		id: "1",                    
    		name: "name1",                   
    		surname: "surname1",                    
    		birthDate: "28-9-1983",                    
    		phone: "812312312",                    
    		city: "Warsaw",                    
    		street: "Domaniewska",                   
    		number: "2"},
    	{                    
    		id: "2",                    
    		name: "name2",                    
    		surname: "surname2",                    
    		birthDate: "01-6-1983",                    
    		phone: "987654412",                   
    		city: "Wroclaw",                    
    		street: "Mydlana",               
    		number: "2"},
    	{                    
    		id: "3",                    
    		name: "name3",                    
    		surname: "surname3",                    
    		birthDate: "05-5-1978",                    
    		phone: "812312312",                    
    		city: "Wroclaw",                    
    		street: "Himalajska"}

    ]
	constructor(private _http:Http){}
	 handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
	findAll() : Observable<User[]> {
		return this._http.get('/findall',{headers: this.headers})
        	.map((response:Response)=> <User[]> response.json())
        	.catch(this.handleError);
	}
	find() : Observable<User[]> {
		return this._http.get('/find',{userId: userId},{headers: this.headers})
        	.map((response:Response)=> <User[]> response.json())
        	.catch(this.handleError);
	}
	edit() : Observable<User[]> {
		return this._http.post('/edit'',{userId: userId},{headers: this.headers})
        	.map((response:Response)=> <User[]> response.json())
        	.catch(this.handleError);
	}
	remove() : Observable<User[]> {
		return this._http.post('/edit'',{userId: userId},{headers: this.headers})
        	.map((response:Response)=> <User[]> response.json())
        	.catch(this.handleError);
	}
}