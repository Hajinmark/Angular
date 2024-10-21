import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component'; 
import { FundamentalService } from '../services/fundamental.service';
@Component({
  selector: 'app-activity1',
  templateUrl: './activity1.component.html',
  styleUrl: './activity1.component.css'
})
export class Activity1Component implements OnInit{
  firstName : string = 'Mark Gregory';
  lastName : string = 'Corpin';
  fullName? : string;

  username? : string;
  nickname? : string;
  checker? : any;
  message? : any;
  output : any;
  
  declarator : boolean = false; 
  display : boolean = false;
  colors = ['P','A','K','Y','U'];

  //passing data to child component
  result = 'Berns';

  users : any[] = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
    { id: '3', name: 'Bob Johnson', email: 'bob@example.com' }
  ];

  searchOutput? : any;
  userId? : any;
  employees! : any[];
  resultChange : any;
  userOutput ? : any;

  creditorOutput? : any;

  constructor(private service : FundamentalService){}

  ngOnInit()
  {
    //this.displayEmployees();
  }

    populateCreditor(param : any)
    {
      this.creditorOutput = this.service.displayCreditor(param);
    }

  textChange(event: any) 
  {
    /*this.resultChange = event.target.value;
    console.log('triggerred');*/

    this.userOutput = this.service.userStatus(event.target.value);

    if(this.userOutput)
    {
      console.log(this.userOutput);
    }
    else
    {
      console.log(this.userOutput);
    }
  }

  displayEmployees()
  {
    return this.employees = this.service.getEmployees();
  }

  displayUser() 
  { 
    this.searchOutput = this.users.find(u => u.id === this.userId);
  }

  clear()
  {
    this.checker = '';
    this.display = false;
  }

  submitCheck()
  {
    var check = this.checker;

    if(check !== '')
    {
      this.display = true;
      return check;
    }

    else
    {
      this.display = false;
    }
  }

  completeName() : string
  {
    return this.fullName = `Welcome to family ${this.lastName}, ${this.firstName}`;
  }

  submitMe()
  {
    var username = this.username;
    var nickname = this.nickname;

    if(username === 'weakneverdies')
    {
      alert(`Invasion ${nickname}`);
    }

    else
    {
      alert(`hakdog ${nickname}`);
    }
  }

  logMessage(sample : any, sample2 : any)
  {
    this.output = `${sample} ${sample2}`;
  }

  submitDeclare()
  {
    this.declarator = !this.declarator;
    console.log(this.declarator);
  }
}
