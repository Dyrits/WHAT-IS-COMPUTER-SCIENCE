import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Artificial Intelligence';
  object = {
    headline: "What is Artificial Intelligence?",
    description: "Artificial intelligence (AI) is a branch of computer science that emphasizes the creation of intelligent machines that can perform tasks that humans can do. The term was coined by a German computer scientist in the early 1950s. The field has evolved from simple machines to complex systems, such as computer systems, intelligent agents, and natural language processing. The field is now commonly referred to as AI, but the term \"artificial intelligence\" is still used for the general case. The field has been subdivided into subfields, such as computer science, information technology, and artificial life."
  };
  array = [
    "Machine learning",
    "Natural language processing",
    "Artificial intelligence",
    "Machine translation",
    "Speech recognition"
  ];
  private static callMe(): void {
    console.log("I am called!");
  }
  ngOnInit() {
    AppComponent.callMe();
  }
}
