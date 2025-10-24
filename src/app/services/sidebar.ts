import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private apiUrl = 'https://68f8452fdeff18f212b59f2f.mockapi.io/todo/menu';
  constructor(private http: HttpClient) {}
  getSidebarItems(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl)
  }
}
