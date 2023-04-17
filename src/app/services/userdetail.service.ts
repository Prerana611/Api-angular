import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class UserdetailService {

  constructor(private http:HttpClient) { }
  getdata(){
    const headers = new HttpHeaders().set('app-id', '64218647d287a2592ad30dec ');
    return this.http.get<any>('https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca', { headers })
    .pipe(
      map((res) => {
        return res;
      })
    );
    }
}
 