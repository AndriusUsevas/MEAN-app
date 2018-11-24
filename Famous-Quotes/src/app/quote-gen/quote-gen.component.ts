import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from 'rxjs';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-quote-gen',
  templateUrl: './quote-gen.component.html',
  styleUrls: ['./quote-gen.component.css']
})
export class QuoteGenComponent {
  asyncTabs: Observable<ExampleTab[]>;

  constructor() { }
   
  

 
}
