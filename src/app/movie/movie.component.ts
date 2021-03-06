import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from './movie.service';
import { InfiniteScroll } from 'angular2-infinite-scroll';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movie-root',
  templateUrl: './movie.component.html',
  providers: [MovieService]
})
export class MovieComponent implements OnInit{
	statusMessage:string = " ";
	pageNo:number = 1;
	movieList:any = [];
	totalRecords:number;
	currentRecord:number = 0;
	pageSize:number = 20;
	totalPage:number;
	throttle = 300;
  scrollDistance = 2;
  scrollUpDistance = 1.5;
  searchName:string = 'Romantic Comedy';
  private sub: any;
  hideSearch:boolean = true;
  hideElement:boolean = false;

  	constructor(private router: Router,private _movieService: MovieService,private route: ActivatedRoute) {
    }

    ngOnInit(){
       //this.sub = this.route.params.subscribe(params => {
       //this.searchName = params['searchName'];
       this.getSearchList(this.searchName,this.pageNo);
      //});
      }
    /*previousPage(){
      this.router.navigate(['/search']);
    } */
    getSearchList(search_name:string,page_no:number){
        this._movieService.getMovieList(search_name,page_no)
        .subscribe(data => {
        	this.totalRecords = +data['page']['total-content-items'];
        	this.pageNo = +data['page']['page-num-requested'];
        	this.pageSize = +data['page']['page-size-requested']; 
        	this.totalPage = Math.ceil(this.totalRecords/this.pageSize);
        	this.currentRecord = this.currentRecord + +data['page']['page-size-returned'];
        	let sub_content = data['page']['content-items']['content'];
        	for(let i in sub_content){
        		this.movieList.push(sub_content[i])
        	}
        },
        error => {
          this.statusMessage =
           'Problem with the service. Please try again after sometime'
             });
    }
    onScroll () {
      this.pageNo = this.pageNo+1;
      this.getSearchList(this.searchName,this.pageNo);
    }
    openSeachBox(){
      this.hideSearch = false; 
      this.hideElement = true;
    }
    newSearch(selectedRadioButtonValue: string){
      this.pageNo = 1;
      this.movieList = [];
      this.searchName = selectedRadioButtonValue;
      this.getSearchList(this.searchName,this.pageNo);
      this.hideSearch = true; 
      this.hideElement = false;
    }
   // ngOnDestroy() {
   //   this.sub.unsubscribe();
   // }
}