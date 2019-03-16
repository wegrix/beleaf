import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notifications } from './publicity.model';

@Injectable({
  providedIn: 'root'
})
export class PublicityService {

  constructor(private http: HttpClient) {
  }


  sendAdNotification(body: Notifications): Observable<Notifications> {
    return this.http.post<Notifications>(`https://beleaf-api.herokuapp.com/ads`, body);
  }

}

