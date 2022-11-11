import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bsoin',
  templateUrl: './bsoin.component.html',
  styleUrls: ['./bsoin.component.css']
})
export class BsoinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  anotherFunction(event: Event ) {
    throw new Error('Function not implemented.');
  }
}
