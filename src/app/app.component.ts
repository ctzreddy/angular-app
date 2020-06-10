import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  private heroesUrl = 'https://localhost:44316/';  // URL to web api
  forecast: any;

  constructor(
    private httpService: HttpService) {
    this.getForecast();
  }

  private getForecast() {
    var a = this.httpService.getForecast().subscribe(list => {
      this.forecast = list.json();
      console.log(this.forecast);
    }, (error) => error);
    //   var a = this.httpService.getBooks();
    //   a.subscribe(data => data.json());
    //   console.log(a);
    //   console.log(this.forecast);
    // }
  }
}
