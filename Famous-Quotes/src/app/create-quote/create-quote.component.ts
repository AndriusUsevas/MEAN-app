import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import {QuoteService} from '../services/quote.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {

  constructor(private service: QuoteService, private router:Router) { }
  

  onAddQuote(form: NgForm) {
    this.service.createPersonalQuote(form.value.author, form.value.quote).subscribe();    
    form.resetForm();
    // without a timeout wont display a quote in My quotes tab...
    //navigation is instantaneous,but http request(create quote) needs 30-50ms on avg
    setTimeout(()=> this.router.navigate(['/personal-quotes']),70); 
  }

  ngOnInit() {
  }



}
