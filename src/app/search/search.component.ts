import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
	@Input()
	searchName : string = '';

    @Output()
    searchButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();
	
	public contentList = [ "Romantic Comedy","Comedy","Wastern","Horror" ];
    public filteredList = [];

	constructor(private router: Router) { }

	filter() {
    	if (this.searchName !== ""){
        	this.filteredList = this.contentList.filter(function(el){
            	return (el.toLowerCase().substr(0,this.searchName.length) === this.searchName.toLowerCase()) == true;
        	}.bind(this));
        	if(this.filteredList.length === 0){
        		this.filteredList.push("no search result");
        	}
    	}else{
        	this.filteredList = [];
    	}
	}
 
	select(item){
    	this.searchName = item;
    	this.filteredList = [];
	}
    
	searchMovie() {
		this.router.navigate(['/searchList',this.searchName]);
        this.searchButtonSelectionChanged.emit(this.searchName);
    }
}