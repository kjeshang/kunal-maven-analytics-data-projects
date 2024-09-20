import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  // declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  // bootstrap: [AppComponent]
})
export class AppModule { }