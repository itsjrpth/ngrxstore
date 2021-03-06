import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from "@ngrx/store";
import { NgModule } from '@angular/core';
import { addCoinReducer } from "./reducers/blockchain.reducer";
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockchainComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      blockchain: addCoinReducer
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
