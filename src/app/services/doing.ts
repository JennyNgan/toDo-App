import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

export interface Doing {
  id?: string;
  title: string;
  description: string;
  done?: boolean;
  status: string;
}
@Injectable({
  providedIn: 'root'
})
export class DoingService {
  private apiUrl = 'https://68f8452fdeff18f212b59f2f.mockapi.io/todo/doing';

  private refresh = new Subject<void>();
  refresh$ = this.refresh.asObservable();
  notifyRefresh(){
    this.refresh.next();
  }

  constructor(private http: HttpClient) {}

  getDoing(): Observable<Doing[]>{
    return this.http.get<Doing[]>(this.apiUrl)
  }

  addDoing(doing: Partial<Doing>): Observable<Doing> {
    return this.http.post<Doing>(this.apiUrl, doing);
  }

  updateDoingg(id: string, update: Partial<Doing>): Observable<Doing> {
    return this.http.put<Doing>(`${this.apiUrl}/${id}`, update);
  }

  deleteDoing(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
