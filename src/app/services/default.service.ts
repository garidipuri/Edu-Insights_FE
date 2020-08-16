import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DefaultService {
 
  apiUrl = "https://education-insights.herokuapp.com";
  constructor(private httpClient: HttpClient) { }

  start_exam (data){
    return this.httpClient.post(`${this.apiUrl}/user/api/start_test`, data).toPromise();
  }
  end_exam (data){
    return this.httpClient.post(`${this.apiUrl}/user/api/end_test`, data).toPromise();
  }
}
