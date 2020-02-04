import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService: HttpClient) { }

  // this is a basic API service; if your url = 'http://api.endpoint.com/'
  // and path = 'movies' it will try to access 'http://api.endpoint.com/movies'
  // options? is optional, so you dont't have to use it
  // example: get('http://test.com', 'movies')
  async get(url: string, path: string, options?: any) {
    return await this.httpService.get<any>(`${url}/${path}`, options).toPromise();
  }
}
