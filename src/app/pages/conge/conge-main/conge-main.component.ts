import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-conge-main',
  templateUrl: './conge-main.component.html',
  styleUrls: ['./conge-main.component.css'],
})
export class CongeMainComponent implements OnInit {
  tab: number = 1;
  constructor() {}

  ngOnInit(): void {}
}
