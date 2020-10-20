import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CompontenteComponent } from './compontente/compontente.component';
import { UserComponent } from './user/user.component';
import { MyPipePipe } from './pipes/my-pipe/my-pipe.pipe';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    CompontenteComponent,
    UserComponent,
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
