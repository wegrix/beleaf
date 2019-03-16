import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendEmail(body: any): Observable<Contact> {
    return this.http.post<Contact>(`https://beleaf-api.herokuapp.com/contact`, body);
  }
}
