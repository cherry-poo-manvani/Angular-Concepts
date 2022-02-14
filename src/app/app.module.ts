import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { PhonemaskDirective } from './phonemask.directive';
import { SharedModule } from './shared/shared.module';
import { ResumeBuilderModule } from './resume-builder/resume-builder.module';
import { AuserModule } from './auser/auser.module';


@NgModule({
  declarations: [
    AppComponent,
    PhonemaskDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    ResumeBuilderModule,
    AuserModule
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


