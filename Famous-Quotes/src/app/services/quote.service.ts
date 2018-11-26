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


  getQuoteData(): Observable<any> {
    
    return this.http.get("https://talaikis.com/api/quotes/random/");
  }

  get100QuoteData(): Observable<any> {
    return this.http.get("https://talaikis.com/api/quotes/");
  }

  saveQuote(quote: String, author: String, cat: String): Observable<any> {
    const saveQuote: Quote = {quote: quote, author: author, cat: cat};

    return this.http.post("http://localhost:8081/quote-gen",saveQuote);
   
    //this.postsUpdated.next([...this.posts]);
  }


  getSavedQuotes(): Observable<any> {    
    return this.http.get("http://localhost:8081/saved-quotes");
  }

  deleteQuote(id:String):Observable<any>{    

    return this.http.delete("http://localhost:8081/saved-quotes/" + id);
  }





}
