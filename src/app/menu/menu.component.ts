import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importez Router depuis '@angular/router'

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private router: Router) {} // Injectez Router dans le constructeur
ngOnInit(): void {

}
  navigateToInvitationPage() {
    this.router.navigate(['/invitation']);
  }

}


