
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MfeServiceService } from 'src/mfe/mfe-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (mfeService: MfeServiceService) => () =>
        mfeService.init(),
      deps: [MfeServiceService],
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
