import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FundamentalService  {

  employees : any[] = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
    { id: '3', name: 'Bob Johnson', email: 'bob@example.com' }
  ];

  creditors : any[] = [
    { id: '1', name: 'Cred Doe', email: 'Credjohn@example.com' },
    { id: '2', name: 'Cred Smith', email: 'Credjane@example.com' },
    { id: '3', name: 'Cred Johnson', email: 'Credbob@example.com' }
  ];

  resultCreditor? : any[];

  constructor() { }
  
  getEmployees()
  {
    return this.employees;
  }

  getCreditor()
  {
    return this.creditors;
  }

  displayCreditor(creditorId : any)
  {
    this.resultCreditor = this.creditors.find(c => c.id === creditorId);

    if(this.resultCreditor){
      alert("has value "+JSON.stringify(this.resultCreditor));
      return this.resultCreditor;
    }

    else
    {
      alert('no value');
      return this.resultCreditor;
    }
  }

  userStatus(userType:string)
  {
    if(userType === 'Employee')
    {
      return this.getEmployees(); 
    }  

    else if(userType === 'Creditor')
    {
      return this.getCreditor();
    }

    else
    {
      return console.log('Empty');
    }
  }
}
