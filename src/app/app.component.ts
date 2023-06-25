import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  username: string = "";
  greeting: string = "";

  constructor(private http: HttpClient) {}

  submit() {
    this.http.post('https://v3dkv5bwfa.execute-api.us-east-1.amazonaws.com/test', { username: this.username })
      .subscribe((response: any) => {
        this.greeting = response.greeting;
      });
  }
}
