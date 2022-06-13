import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  @Input() data: { subject: string; headline: string; description: string; related: string[]; } = {
    subject: String(),
    headline: String(),
    description: String(),
    related: []
  };

  constructor() { }

  ngOnInit(): void {
  }

}
