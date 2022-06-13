import { Component, OnInit } from '@angular/core';
import { RequestsService} from "../requests.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public mathString: any;

  constructor(private request: RequestsService) {
    request.makeRequest("http://numbersapi.com/random/year").then(response => {
      this.mathString = response
    });
  }

  ngOnInit(): void {
  }

  makeRequest() {
    this.request.makeRequest("http://numbersapi.com/random/year").then(response => {
      this.mathString = response
    });
  }

}
