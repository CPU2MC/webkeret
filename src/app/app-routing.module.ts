import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ElsoFelvonasComponent } from './elso-felvonas/elso-felvonas.component';
import { ErrorComponent } from './error/error.component';
import { GamestartComponent } from './gamestart/gamestart.component';
import { MasodikFelvonasComponent } from './masodik-felvonas/masodik-felvonas.component';
import { CsapdaComponent } from './csapda/csapda.component';
import { Csapda2Component } from './csapda2/csapda2.component';
import { HarmadikFelvonasComponent } from './harmadik-felvonas/harmadik-felvonas.component';
import { NegyedikFelvonasComponent } from './negyedik-felvonas/negyedik-felvonas.component';
import { Csapda3Component } from './csapda3/csapda3.component';

const routes: Route[] = [
    {path: '', component: GamestartComponent},
    {path: 'felvonas4', component: NegyedikFelvonasComponent},
    {path: 'felvonas3', component: HarmadikFelvonasComponent},
    {path: 'felvonas2', component: MasodikFelvonasComponent},
    {path: 'felvonas1', component: ElsoFelvonasComponent},
    {path: 'csapda', component: CsapdaComponent},
    {path: 'csapda2', component: Csapda2Component},
    {path: 'csapda3', component: Csapda3Component},
    {path: '**', component: ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}