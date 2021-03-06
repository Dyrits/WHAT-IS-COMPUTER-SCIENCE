import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { AwesomeifyPipe } from './awesomeify.pipe';
import { SortAlphabeticallyPipe } from './sort-alphabetically.pipe';
import { MagnifyDirective } from './magnify.directive';
import { NavigationComponent } from './navigation/navigation.component';
import { SubjectComponent } from './subject/subject.component';
import { HomeComponent } from './home/home.component';
import { AiComponent } from './ai/ai.component';
import { CryptographyComponent } from './cryptography/cryptography.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { CompressionComponent } from './compression/compression.component';
import { InternetComponent } from './internet/internet.component';
import { ProgrammingComponent } from './programming/programming.component';
import { SecretComponent } from './secret/secret.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    AiComponent,
    FormComponent,
    AwesomeifyPipe,
    SortAlphabeticallyPipe,
    MagnifyDirective,
    NavigationComponent,
    SubjectComponent,
    HomeComponent,
    CryptographyComponent,
    AlgorithmsComponent,
    CompressionComponent,
    InternetComponent,
    ProgrammingComponent,
    SecretComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
