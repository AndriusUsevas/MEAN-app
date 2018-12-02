import { Component, OnInit } from '@angular/core';
import {QuoteService} from '../services/quote.service';

@Component({
  selector: 'app-personal-quotes',
  templateUrl: './personal-quotes.component.html',
  styleUrls: ['./personal-quotes.component.css']
})
export class PersonalQuotesComponent implements OnInit {

  constructor(private service:QuoteService) { }

  quotes: any = [];

  ngOnInit() {
    this.service.getPersonalQuotes().subscribe(data =>{
      this.quotes = data;
    })
  }

  deletePersonalQuote(_id: String){
    this.service.deletePersonalQuote(_id).subscribe(()=>{
      this.ngOnInit();
    });
 }

}
