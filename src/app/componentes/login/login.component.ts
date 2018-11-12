import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
  })
  export class LoginComponent implements OnInit {
  private authService: AuthService
  constructor() { }

  ngOnInit() {
  }
onClickGoogleLogin(){
this.authService.loginGoogle()
.then((res) => {
  console.log(res);
}).catch( err => console.log(err.message));
}
}
