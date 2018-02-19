import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';



const baseUrl = "http://cdogan.info:5000/api/members";

@Injectable()
export class PersonService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(baseUrl);
  };

  getMemberId(persnr: number): Observable<any> {
    return this.http.get<any>(`${baseUrl}/${persnr}`);
  };

  updatePutPerson(member: any): Observable<any> {
    return this.http.put(`${baseUrl}/${member.persnr}`, member);
  };

  removePerson(persnr: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${persnr}`);
  };

  createPostPerson(member: any): Observable<any> {
    return this.http.post(`${baseUrl}`, member);
  };


}















/* findAll(): Observable<any> {
  return this.http.get<any>(baseUrl);
}
findOne(a): Observable<any> {
  return this.http.get<any>(`${baseUrl}/${a}`);
}
createPerson(person : any): Observable<any> {
  return this.http.post(baseUrl,person);
}
deletePerson(): Observable<any> {
  return this.http.get<any>(baseUrl);
} */