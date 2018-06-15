import { Component } from '@angular/core';
import { InterviewService } from './inetrview.service';

@Component({
  selector: 'inetrview-root',
  templateUrl: './inetrview.component.html',
  providers: [ InterviewService ]
})
export class InterviewComponent implements OnInit{
	user:User;
	constructor(private _interview:InterviewService){
	}
	ngOnInit() { 
	}
	findAll() {
		this._interview.findAll()
        .subscribe(data => {
        	this.users = data
        },
        error => {
            this.statusMessage =
                'Problem with the service. Please try again after sometime'
        });
	}
 	find() {
		this._interview.find()
        .subscribe(data => {
        	this.router.navigate(['/userDetails']);
        },
        error => {
            this.statusMessage =
                'Problem with the service. Please try again after sometime'
        });
	}
	edit() {
		if (_.isArray(user)) {                    
		let ids = [];                    
		for (let i = 0; i < user.length; i++) {                        
			ids.push(user[i].id);                    
		}
		this._interview.edit()
        .subscribe(data => {
        	for (let i = 0; i < this.users.length; i+ +) { 
	        	 if(this.users[i].id === data.id) {                                
	        	 this.users[i] === data;                            
	        	 }                        
		 	}                        
		 	alert('User Updated');
        },
        error => {
            this.statusMessage =
                'Problem with the service. Please try again after sometime'
        });                    
       } 
       else { 
       	this._interview.edit()
        .subscribe(data => {
        	$this.users[this.users.indexOf(user.id)] = data;                        
                   alert('User Saved'); 
        },
        error => {
            this.statusMessage =
                'Problem with the service. Please try again after sometime'
        });
                   
	}
	}
	remove() {
		this._interview.remove()
        .subscribe(data => {
        	let index = this.users.indexOf(userId);                    
        	this.users.splice(index, 1);                    
        	alert('User Removed');
        },
        error => {
            this.statusMessage =
                'Problem with the service. Please try again after sometime'
        });
	}
}