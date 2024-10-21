import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateUser, IDisplayUser, IUser } from '../model/user';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  getAllUserDetails() : Observable<IUser[]>
  {
    const userAPI = 'https://localhost:7154/api/User/DisplayUser';
    var displayUser = this.http.get<IUser[]>(userAPI);

    return displayUser;
  }

  addNewUser(user : ICreateUser) : Observable<ICreateUser>
  {
    const userApi = 'https://localhost:7154/api/User/CreateNewUser';
    var postUser = this.http.post<ICreateUser>(userApi,user)

    return postUser;
  }
  

  getExcelFile(): Observable<Blob> {
    const extractUser = 'https://localhost:7154/api/User/ExtractUser';

    return this.http.get(extractUser, {
      responseType: 'blob', 
      headers: new HttpHeaders({
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      })
    });
  }

  displayUser(userId : any): Observable<IDisplayUser[]>
  {
    const apiUrl = 'https://localhost:7154/api/User/GetUserID';
    const params = new HttpParams()
      .set('userId', userId)

    return this.http.get<IDisplayUser[]>(apiUrl, {params});
    
  }
}
