import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AiComponent } from './ai/ai.component';
import { FormComponent } from './form/form.component';
import { AwesomeifyPipe } from './awesomeify.pipe';
import { SortAlphabeticallyPipe } from './sort-alphabetically.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AiComponent,
    FormComponent,
    AwesomeifyPipe,
    SortAlphabeticallyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
