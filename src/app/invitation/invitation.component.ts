import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {
  users: {email:String ,dateEnvoi:Date}[] = [];
  isLoading: boolean = true;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.fetchUsers(); // Appeler fetchUsers() dans ngOnInit()
  }

  fetchUsers() {
    this.http.get<any[]>('http://localhost:5271/api/Admin/invitations/emails-with-date')
      .subscribe(
        users => {
          console.log(users);
          this.users = users;
          console.log(this.users);
          this.isLoading = false;
        },
        error => {
          console.error('Error fetching users:', error);
          this.isLoading = false;
        }
      );
  }

  navigateToRegisterPage() {
    this.router.navigate(['/register']);
  }
}
