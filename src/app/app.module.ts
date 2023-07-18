import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './component/products/products.component';
import { ContentLimitterPipe } from './pipe/content-limitter.pipe';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [AppComponent, ProductsComponent, ContentLimitterPipe, AddProductComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
