import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { InvitationComponent } from './invitation/invitation.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Importez HttpClientModule
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';



export const routes: Routes = [
  { path: "user", component: UserComponent },
  { path: "register", component: RegisterComponent },
  { path: "invitation", component: InvitationComponent },
  { path: "**", component: MenuComponent },

];

@NgModule({
  declarations: [InvitationComponent, RegisterComponent ],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule, // Importez HttpClientModule ici
    CommonModule,
    FormsModule,



  ],
  exports: [RouterModule],
  providers: [ HttpClient ,

  ]
})
export class AppRoutingModule {
}
