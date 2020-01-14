import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorInterceptorProvider } from './Services/error.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUiLoaderModule, NgxUiLoaderConfig, POSITION, SPINNER, PB_DIRECTION } from 'ngx-ui-loader';
import {NgxUiLoaderRouterModule, NgxUiLoaderHttpModule} from 'ngx-ui-loader';
import { AuthGuard } from './guards/auth.guard';

const ngxUiLoadConfig: NgxUiLoaderConfig = {
  pbColor: 'red',
  bgsColor: 'red',
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 70,

  fgsPosition: POSITION.bottomRight,
  fgsSize: 70,
  fgsColor: 'red',

  bgsType: SPINNER.doubleBounce,
  fgsType: SPINNER.doubleBounce,
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 4,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'decreasing'
    }),
    HttpClientModule,
    // Import NgxUiLoaderModule
    NgxUiLoaderModule.forRoot(ngxUiLoadConfig),
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true})
    // NgProgressModule.withConfig({
    //   trickleSpeed: 200,
    //   min: 20,
    //   meteor: false,
    //   color: 'red',
    //   direction: 'rtl+'
    // }),
    // HttpClientModule,
    // NgProgressHttpModule, NgProgressRouterModule
  ],
  providers: [ErrorInterceptorProvider, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
