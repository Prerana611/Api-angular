import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
}) 
export class PostService {
  baseUrl='https://dummyapi.io/data/v1/post'
  constructor(private http:HttpClient) { }
 
  addpost(newpost:any){
    const headers = new HttpHeaders().set('app-id', '64218647d287a2592ad30dec ');
return this.http.post<any>('https://dummyapi.io/data/v1/post/create', newpost , { headers })
.pipe(
  map((res: any) => {
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
deletepost(id: any){
  const headers = new HttpHeaders().set('app-id', '64218647d287a2592ad30dec ');
  const url = `${this.baseUrl}/${id}`;
  return this.http.delete(url ,{ headers});
}
  }

