import { AppRoutingModule } from './app-routing.module';
import { NgModule } from "@angular/core";
import {AppComponent} from "./app.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
    imports: [
        AppRoutingModule,
    ],
    bootstrap: [AppComponent],
    providers: [
      provideAnimationsAsync()
    ]
})
export class AppModule { }
