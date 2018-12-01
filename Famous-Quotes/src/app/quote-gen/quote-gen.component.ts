import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services/quote.service';
import { HttpClient } from '@angular/common/http';
import { Quote } from '@angular/compiler';
import { nextTick } from 'q';



@Component({
  selector: 'app-quote-gen',
  templateUrl: './quote-gen.component.html',
  styleUrls: ['./quote-gen.component.css']
})
export class QuoteGenComponent implements OnInit{
  quote:any=[];
  

  constructor(private service:QuoteService) { }
   
  ngOnInit(){
    this.service.getQuoteData().subscribe(data =>{          
      this.quote = data;  
      console.log(this.quote);  
    })
  }

  getQuote(){
    this.ngOnInit()
  }

  // get100Quotes(){
  //   this.service.get100QuoteData().subscribe(data =>{        
  //     this.quote = data;      
  //   })    
  // }

  addQuote() {
    this.service.saveQuote(this.quote.quote, this.quote.author, this.quote.cat).subscribe();
    this.ngOnInit();
    console.log("post saved to mongoDB")
  }


}
