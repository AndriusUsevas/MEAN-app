import { Injectable } from '@angular/core';
import { Quote } from '../quote.model';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private quote : Quote[]=[];

  constructor(private http: HttpClient) { }


  getQuoteData(): Observable<any> {  ///// NEED FIXING!!!!!!!!!!!!!!!!!!!!
    
    return this.http.get("http://localhost:8081/quote-gen");
  }

  get100QuoteData(): Observable<any> {  /// NEED IMPLEMENTING AFTER getQuoteData() IS FIXED!!!!!!
    return this.http.get("http://localhost:8081/quote100-gen");
  }

  saveQuote(quote: String, author: String, cat: String): Observable<any> {
    const saveQuote: Quote = {quote: quote, author: author, cat: cat};

    return this.http.post("http://localhost:8081/quote-gen",saveQuote);
  }


  getSavedQuotes(): Observable<any> {    
    return this.http.get("http://localhost:8081/saved-quotes");
  }

  deleteQuote(id:String):Observable<any>{    

    return this.http.delete("http://localhost:8081/saved-quotes/" + id);
  }



  //==============EXPERIMENTAL================================

  getQuote100Data(): Observable<any> {  ///// NEED FIXING!!!!!!!!!!!!!!!!!!!!
    
    return this.http.get("http://localhost:8081/quote100-gen");
  }













}
