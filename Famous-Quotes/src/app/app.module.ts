import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatTabsModule,
         MatInputModule,
         MatMenuModule,
         MatCardModule,
         MatButtonModule,
         MatIconModule,
         MatToolbarModule,
         MatExpansionModule  } from '@angular/material';
import { AppComponent } from './app.component';
import { QuoteGenComponent } from './quote-gen/quote-gen.component';
import { RouterModule, Routes} from '@angular/router';
import { SavedQuotesComponent } from './saved-quotes/saved-quotes.component';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { QuoteService } from './services/quote.service';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: '', redirectTo: '/quote-gen', pathMatch: 'full' },
  { 
    path: 'quote-gen',
    component: QuoteGenComponent
  },  
  {
    path:'saved-quotes',
    component:SavedQuotesComponent
  },  
  {
    path:'create-quote',
    component:CreateQuoteComponent
  }

];


@NgModule({
  declarations: [
    AppComponent,
    QuoteGenComponent,
    SavedQuotesComponent,
    CreateQuoteComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatTabsModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)    

  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
