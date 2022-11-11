import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consltoppo',
  templateUrl: './consltoppo.component.html',
  styleUrls: ['./consltoppo.component.css']
})
export class ConsltoppoComponent implements OnInit {
  [x: string]: any;

  constructor() { }

  ngOnInit(): void {
  }
   anotherFunction(event: Event ) {
    throw new Error('Function not implemented.');
  }

}
