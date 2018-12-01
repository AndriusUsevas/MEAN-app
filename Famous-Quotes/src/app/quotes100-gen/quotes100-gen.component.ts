import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-quotes100-gen',
  templateUrl: './quotes100-gen.component.html',
  styleUrls: ['./quotes100-gen.component.css']
})
export class Quotes100GenComponent implements OnInit {

  constructor(private service: QuoteService) { }
  quotes:any=[];


  ngOnInit() {
    this.service.get100QuoteData().subscribe(data =>{        
      this.quotes = data;    
    })  
  }

  get100Quotes(){
    this.ngOnInit();
  }

  addQuote(index) {
    this.service.saveQuote(this.quotes[index].quote, this.quotes[index].author, this.quotes[index].cat).subscribe();
    this.quotes.splice(index,1);
    console.log("post saved to mongoDB")
  }



}
