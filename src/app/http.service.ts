import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }



    bookUrl = "https://localhost:44316/weatherforecast";
    getBooks(): Observable<any[]> {
        return this.http.get<any[]>(this.bookUrl);
    }

    public getForecast(): Observable<Response> {
        return this.http.get<Response>(this.bookUrl);
    }
}