import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compression',
  templateUrl: './compression.component.html',
  styleUrls: ['./compression.component.scss']
})
export class CompressionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = {
    subject: "Compression",
    headline: "What is Compression?",
    description: "In signal processing, data compression, source coding, or bit-rate reduction is the process of encoding information using fewer bits than the original representation. Any particular compression is either lossy or lossless. Lossless compression reduces bits by identifying and eliminating statistical redundancy. No information is lost in lossless compression. Lossy compression reduces bits by removing unnecessary or less important information. Typically, a device that performs data compression is referred to as an encoder, and one that performs the reversal of the process (decompression) as a decoder.",
    related: [
      "Machine learning",
      "Natural language processing",
      "Artificial intelligence",
      "Machine translation",
      "Speech recognition"
    ]
  }

}
