import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StellaComponent } from './condivisa/stella.component';
import { ProdottiListComponent } from './prodotti/prodotti-list.component';
import { ConvertToSpacePipe } from './condivisa/convert-to-space.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    StellaComponent,
    ProdottiListComponent,
    ConvertToSpacePipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
