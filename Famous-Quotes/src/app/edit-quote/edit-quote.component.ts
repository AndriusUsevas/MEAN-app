import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import {QuoteService} from '../services/quote.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.css']
})
export class EditQuoteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service:QuoteService, private router:Router) { }

  persquote:any=[];

  ngOnInit() {
    this.service.getQuote(this.route.snapshot.params['id']).subscribe(data=>{
      this.persquote = data;
    });
  }

  onEditQuote(form: NgForm){
    this.service.updatePost(this.persquote._id, form.value.author, form.value.quote).subscribe(()=>{
      this.router.navigate(['/personal-quotes']);
    });

  }
  
}