import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Moment } from '../Moment';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/moments`


  constructor(private http: HttpClient) { }

  createMoment(FormData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, FormData);
  }
}
