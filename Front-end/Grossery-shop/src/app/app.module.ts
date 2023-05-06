import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExploreCategoryComponent } from './shared/components/explore-category/explore-category.component';
import { FeatureProductsComponent } from './shared/components/feature-products/feature-products.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './shared/interceptor/auth.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FrontModule } from './modules/front/front.module';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';


@NgModule({
  declarations: [
    AppComponent,
    ExploreCategoryComponent,
    FeatureProductsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    AppRoutingModule,
    IvyCarouselModule,
    HttpClientModule,
    MatExpansionModule,
    FrontModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true, 
    }),
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    })
    
  ],
 
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
