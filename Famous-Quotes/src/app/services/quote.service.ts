import { Injectable } from '@angular/core';
import { PersonalQuotes } from '../personal-quotes';
import { Quote } from '../quote.model';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private quote : Quote[]=[];

  constructor(private http: HttpClient) { }

// "home page" loads single quote
  getQuoteData(): Observable<any> {      
    return this.http.get("http://localhost:8081/quote-gen");
  }

  //loads 100 quotes
  get100QuoteData(): Observable<any> {  
    return this.http.get("http://localhost:8081/quote100-gen");
  }

  //save quote from list of 100 or single
  saveQuote(quote: String, author: String, cat: String): Observable<any> {
    const saveQuote: Quote = {quote: quote, author: author, cat: cat};

    return this.http.post("http://localhost:8081/quote-gen",saveQuote);
  }

//get saved quotes
  getSavedQuotes(): Observable<any> {    
    return this.http.get("http://localhost:8081/saved-quotes");
  }

  //delete a quote(s) from list of saved quotes
  deleteQuote(id:String):Observable<any>{    
    return this.http.delete("http://localhost:8081/saved-quotes/" + id);
  }

  ///======================== My Quotes tab http requests(below)==================================

  //deletes personal quote saved in new collection of 'personal quotes'
  deletePersonalQuote(id:String):Observable<any>{   
    return this.http.delete("http://localhost:8081/personal-quotes/" + id);
  }

//display personal quotes created by 'you'
  getPersonalQuotes(): Observable<any>{
    return this.http.get("http://localhost:8081/personal-quotes");
  }

  //create a personal quote
  createPersonalQuote(author: String, quote: String): Observable<any>{
    const quotes : PersonalQuotes = {author: author, quote: quote};
    return this.http.post("http://localhost:8081/personal-quotes",quotes);
  }


//========== EDIT/UPDATE PERSONAL QUOTES ==============

getQuote(id: String): Observable<any>{
  return this.http.get("http://localhost:8081/personal-quotes/" + id);
}

updatePost(id:String, author: String, quote:String): Observable<any>{
  const quotes: PersonalQuotes = {author: author, quote: quote};
  return this.http.put("http://localhost:8081/personal-quotes/" + id,quotes);
}

///=================================================================================================

}
