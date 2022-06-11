import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AiComponent } from './ai/ai.component';
import { HomeComponent } from './home/home.component';
import { CryptographyComponent } from './cryptography/cryptography.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { CompressionComponent } from './compression/compression.component';
import { InternetComponent } from './internet/internet.component';
import { ProgrammingComponent } from './programming/programming.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'ai', component: AiComponent, pathMatch: 'full' },
  { path: 'cryptography', component: CryptographyComponent, pathMatch: 'full' },
  { path: 'algorithms', component: AlgorithmsComponent, pathMatch: 'full' },
  { path: 'compression', component: CompressionComponent, pathMatch: 'full' },
  { path: 'internet', component: InternetComponent, pathMatch: 'full' },
  { path: 'programming', component: ProgrammingComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
