import { Component, OnInit } from '@angular/core';
import {QuoteService} from '../services/quote.service';

@Component({
  selector: 'app-saved-quotes',
  templateUrl: './saved-quotes.component.html',
  styleUrls: ['./saved-quotes.component.css']
})
export class SavedQuotesComponent implements OnInit {
  quotes: any = [];
  constructor(private service:QuoteService) { }

  ngOnInit() {
    this.service.getSavedQuotes().subscribe(data =>{
      this.quotes = data;
    })
  }

  deleteQuote(_id: String){
    this.service.deleteQuote(_id).subscribe(()=>{
      this.ngOnInit();
    });
 }

}
