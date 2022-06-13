import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.scss']
})
export class SecretComponent implements OnInit {

  key: string | null | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void { this.key = this.route.snapshot.paramMap.get("key"); }

}
