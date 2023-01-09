import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ResourceManagerService {

  public besubject = new BehaviorSubject<any>("hello");
  constructor(private http: HttpClient) { }

  insertClientDetails(data:any){
    return this.http.post('http://localhost:8000/client/insertClient', data);
  }

  insertResourceDetails(data:any){
    return this.http.post('http://localhost:8000/client/insertResource', data);
  }

  getClientResourceData(data: any) {
    return this.http.post('http://localhost:8000/client/getAllClientResources', data);
  }

  deleteClient(id: any) {
    return this.http.delete('http://localhost:8000/client/deleteClient/' + id)
  }

  deleteResource(id: any) {
    return this.http.delete('http://localhost:8000/client/deleteResource/' + id)
  }

  updateClient(data: any) {
    return this.http.put('http://localhost:8000/client/updateClient', data)
  }

  updateResource(data: any) {
    return this.http.put('http://localhost:8000/client/updateResource', data)
  }

  getAllResources(){
    return this.http.get('http://localhost:8000/client/getAllResources')
  }
}
