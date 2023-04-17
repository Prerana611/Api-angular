import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AddapiService {
  baseUrl ='https://dummyapi.io/data/v1/user';
  constructor(private http:HttpClient) { }

  deleteuser(id: any){
    const headers = new HttpHeaders().set('app-id', '64218647d287a2592ad30dec ');
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url ,{ headers});
  }
  getdata(){
    const headers = new HttpHeaders().set('app-id', '64218647d287a2592ad30dec ');
    return this.http.get<any>('https://dummyapi.io/data/v1/user', { headers })
    .pipe(
      map((res) => {
        return res;
      })
    );
    }
  getpost(){
    const headers = new HttpHeaders().set('app-id', '64218647d287a2592ad30dec ');
    return this.http.get<any>('https://dummyapi.io/data/v1/post', { headers })
    .pipe(
      map((res) => {
        return res;
      })
    );
  }
 fetchdata(firstName: string) {
    const headers = new HttpHeaders().set('app-id', '64218647d287a2592ad30dec ');
    return this.http
      .get<any>('https://dummyapi.io/data/v1/user?created=1?page=1&limit=50', {
        headers,
      })
      .toPromise()
      .then((res) =>
        res.data.find(
          (user: { firstName: string }) => user.firstName === firstName
        )
      );
  }

adddata(newUser: any) {
  const headers = new HttpHeaders().set('app-id', '64218647d287a2592ad30dec ');
return this.http.post<any>('https://dummyapi.io/data/v1/user/create', newUser , { headers })
.pipe(
  map((res) => {
    return res; 
  })
);
} 
  
getcreatedpost(){
  const headers = new HttpHeaders().set('app-id', '64218647d287a2592ad30dec ');
  return this.http.get<any>('https://dummyapi.io/data/v1/post?created=1', { headers })
  .pipe(
    map((res) => {
      return res;
    })
  );
}
}

