  import { Component, OnInit } from '@angular/core';
  import { UserService } from '../services/user.service';
  import { ICreateUser, IDisplayUser, IUser } from '../model/user';
  import { formatDate } from '@angular/common';
  import { Router } from '@angular/router';
  import { ActivatedRoute } from '@angular/router';

  @Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
  })
  export class UserComponent implements OnInit{
[x: string]: any;

    users : IUser[] = []
    dateToday : Date = new Date();
    formattedDate! : string ;
    insertUser : ICreateUser = 
    {
      userId : 0,
      userName : '',
      userProfileId : 0,
      address : '',
      phoneNumber : '',
      isActive : true
    }
    userId : any;
    listUser : IDisplayUser[] = [];

    constructor(private userService : UserService, private router : Router, private route : ActivatedRoute)  
    {

    }

    ngOnInit()
    {
      this.getAllUsers();
      //var userId = parseInt(this.route.snapshot.paramMap.get(userId));
    }

    getAllUsers()
    {
      this.userService.getAllUserDetails().subscribe({
        next : response => this.users = response,
        error : error => console.log(`Error can't fetch any data ${error}`),
        complete : () => console.log('completed')
      });
    }

    createNewUser()
    {
      this.userService.addNewUser(this.insertUser).subscribe({
        next : response => this.insertUser = response,
        error : error => console.log('Failed to insert new user ',error),
        complete : () => console.log('completed')
      });
    }

    downloadExcel(): void {
      this.userService.getExcelFile().subscribe(
        (response: Blob) => {
          // Create a URL for the blob and trigger download
          const blobUrl = window.URL.createObjectURL(response);
          const a = document.createElement('a');
          a.href = blobUrl;
          var date = this.formattedDate = formatDate(this.dateToday,'yyyy-MM-dd','en-US');
          a.download = `users-${date}.xlsx`//'data.xlsx'; // Specify the name for the downloaded file
          document.body.appendChild(a); // Append anchor to body
          a.click(); // Trigger click
          document.body.removeChild(a); // Remove anchor from body
        },
        (error) => {
          console.error('Error downloading the file', error);
        }
      );
    }
    
    // pass data
    getUserId(userId : any)
    {
      this.router.navigate(['/child', userId]);
    }

    /*displayReceivedUserId()
    {
      this.userService.displayUser(this.userId).subscribe({
        next: response => this.listUser = response,
        error : error => console.log('Error: ',error)
      });
    }*/
  }
