import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { IDisplayUser } from '../model/user';
0


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit{
  
  // parent to child
  @Input('parentData') herName? : string;
  @Output() childData : EventEmitter<any> = new EventEmitter();
  myCrush ? : string;
  displayCrush? : boolean;
  result? : string;
  passedValue? : string;
  setOfValue : any[] = [
    {id:'1', name:'hajinmark'},
    {id:'2', name:'dawn'},
    {id:'3', name:'no name'}
  ];
  userId : any;
  listUser : IDisplayUser[] = [];
  constructor(private route : ActivatedRoute, private userService : UserService){}
  
  ngOnInit(): void {
    // getting the value of the pass parameter in the url
    var userId = parseInt(this.route.snapshot.paramMap.get('userId')?? '0');
    // store the value
    this.userId = userId;
    this.getSpecificUser();
  }

  verifyMyCrush()
  {
    
    if(this.myCrush === null || this.myCrush === undefined)
    {
      this.displayCrush = false;
      this.result = 'Please fill out the field';
    }

    else if(this.myCrush.toLowerCase() === this.herName?.toLowerCase())
    {
      this.displayCrush = true;
    }

    else
    {
      this.displayCrush = false;
      this.result = 'Not your crush';
    }
  }

  passedEvent()
  {
    this.childData.emit(this.passedValue);
    //this.childData.emit(JSON.stringify(this.setOfValue));
  }
  
  getSpecificUser()
  {
    this.userService.displayUser(this.userId).subscribe({
      next: response => this.listUser = response,
      error : error => console.log('Error: ',error)
    });
  }

}
