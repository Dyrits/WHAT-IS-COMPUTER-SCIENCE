import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internet',
  templateUrl: './internet.component.html',
  styleUrls: ['./internet.component.scss']
})
export class InternetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = {
    subject: "The Internet",
    headline: "What is the Internet?",
    description: "The Internet is the global system of interconnected computer networks that uses the Internet protocol suite (TCP/IP) to link devices worldwide. It is a network of networks that consists of private, public, academic, business, and government networks of local to global scope, linked by a broad array of electronic, wireless, and optical networking technologies. The Internet carries a vast range of information resources and services, such as the inter-linked hypertext documents and applications of the World Wide Web (WWW), electronic mail, telephony, and file sharing.",
    related: [
      "Machine learning",
      "Natural language processing",
      "Artificial intelligence",
      "Machine translation",
      "Speech recognition"
    ]
  }

}
