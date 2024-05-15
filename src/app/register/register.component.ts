import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  postJsonValue: any;
  postSuccess: boolean = false;

  constructor(private http: HttpClient) {}

  public postMethod(formData: any) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      email: formData.email,
      subject: formData.subject,
      body: formData.body,
      userId: 1 ,// Suppose we get the user ID from somewhere else, or you can adjust this accordingly
      status: "string",
      createdDate: "string",
    };

    this.http.post('http://localhost:5271/api/invitation/send', JSON.stringify(body), { headers: header, responseType: 'text' }).subscribe((data) => {
      console.log(data);
      this.postJsonValue = data;
      this.postSuccess = true; // Définir postSuccess à true après l'envoi réussi
    }, (error) => {
      console.error('Erreur lors de la requête : ', error);
    });
  }
}
