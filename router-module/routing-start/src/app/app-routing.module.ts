import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent  },
    { path: 'users', component: UsersComponent, 
          children: [
            { path: ':id/:name', component: UserComponent  }
    ]}, 
    { 
        path: 'servers', 
        // canActivate: [AuthGuard], 
        canActivateChild:[AuthGuard],
        component: ServersComponent,
        children: [
            { path: ':id', component: ServerComponent  },
            { path: ':id/edit', component: EditServerComponent  }
    ]},
    {path: 'not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: 'not-found'}
  ];


@NgModule({
    //we don't need to add declarations here 
    //becasue these modules already are declared in my app module
    //we will add app-routing module to the app module 
    //so there is no need to redeclare them

    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    //exports tells angular, from this module
    //if I need to import this module from another module 
    //what should be accessible through this module
    exports: [RouterModule]
})

export class AppRoutingModule {

}