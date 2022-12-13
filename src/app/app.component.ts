import { Component, OnInit } from '@angular/core';
import { AppConfiguration } from "read-appsettings-json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'alternative_to_environment_in_Angular15';
  apiUrl = AppConfiguration.Setting().apiUrl;
  token = AppConfiguration.Setting().token;
  saludo = AppConfiguration.Setting().saludo;

  ngOnInit(): void {
    console.log(this.apiUrl);
    console.log(this.token);
  }


}
