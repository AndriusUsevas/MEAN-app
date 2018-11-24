import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatTabsModule  } from '@angular/material';
import { AppComponent } from './app.component';
import { QuoteGenComponent } from './quote-gen/quote-gen.component';
import { RouterModule, Routes} from '@angular/router';
import { SavedQuotesComponent } from './saved-quotes/saved-quotes.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/quote-gen', pathMatch: 'full' },
  { 
    path: 'quote-gen',
    component: QuoteGenComponent
  },  
  {
    path:'saved-quotes',
    component:SavedQuotesComponent
  }  

];


@NgModule({
  declarations: [
    AppComponent,
    QuoteGenComponent,
    SavedQuotesComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
