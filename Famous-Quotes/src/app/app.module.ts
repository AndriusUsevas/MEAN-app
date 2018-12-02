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
import { Quotes100GenComponent } from './quotes100-gen/quotes100-gen.component';
import { PersonalQuotesComponent } from './personal-quotes/personal-quotes.component';
import { FormsModule } from '@angular/forms';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';

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
  },
  {
    path:'quotes100-gen',
    component:Quotes100GenComponent
  },
  {
    path:'personal-quotes',
    component:PersonalQuotesComponent
  },
  {
    path:'edit-quote/:id',
    component:EditQuoteComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    QuoteGenComponent,
    SavedQuotesComponent,
    CreateQuoteComponent,
    Quotes100GenComponent,
    PersonalQuotesComponent,
    EditQuoteComponent
  ],
  imports: [
    FormsModule,
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
