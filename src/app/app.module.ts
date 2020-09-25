import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { GamestartComponent } from './gamestart/gamestart.component';
import { ElsoFelvonasComponent } from './elso-felvonas/elso-felvonas.component';
import { MasodikFelvonasComponent } from './masodik-felvonas/masodik-felvonas.component';
import { MatDialogModule } from '@angular/material';
import { Dialog1Component } from './dialog1/dialog1.component';
import { CsapdaComponent } from './csapda/csapda.component';
import { Csapda2Component } from './csapda2/csapda2.component';
import { HarmadikFelvonasComponent } from './harmadik-felvonas/harmadik-felvonas.component';
import { NegyedikFelvonasComponent } from './negyedik-felvonas/negyedik-felvonas.component';
import { Csapda3Component } from './csapda3/csapda3.component';
import { NyertesDialogComponent } from './nyertes-dialog/nyertes-dialog.component';
import { TovabbDialogComponent } from './tovabb-dialog/tovabb-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    GamestartComponent,
    ElsoFelvonasComponent,
    MasodikFelvonasComponent,
    Dialog1Component,
    CsapdaComponent,
    Csapda2Component,
    HarmadikFelvonasComponent,
    NegyedikFelvonasComponent,
    Csapda3Component,
    NyertesDialogComponent,
    TovabbDialogComponent

  ],
  entryComponents: [Dialog1Component,NyertesDialogComponent,TovabbDialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
