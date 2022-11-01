import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResourceManagerService } from '../resource-manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup
  value: string | undefined;
  loginbutton: boolean = true;
  userResult: any = []
  user: any

  constructor(private fb: FormBuilder, private resource: ResourceManagerService, private route: Router) {
    this.LoginForm = this.fb.group({
      email: ['', [Validators.required]],
      //Validators.pattern(/^[a-z0-9._%+-]+@[gmail]+\.com*$/)]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {

  }
  submitForm() {
    this.route.navigate(['/signup'])
  }
  fetchByData(item: any) {
    // this.route.navigate(['/signup'])
    console.log(item.email)
    this.resource.getClientResourceData(item).subscribe((data) => {
      // console.log(data)
      this.userResult = data
      console.log(this.userResult.data);

      console.log(this.userResult.data.map((x: any) => x.email));
      let listData = this.userResult.data.map((x: any) => x.email)
      console.log(listData)
      this.resource.besubject.next(item);
      this.userResult.data.forEach((element: {
        password: boolean; email: any;
      }) => {
        if (element.email == item.email && element.password == item.password) {
          this.route.navigate(['/home'])
        }
        else {
          window.alert("invalid credentials")
        }
      });
    })
  }
  onSelect() {
    this.route.navigate(['/signup'])
  }
}
