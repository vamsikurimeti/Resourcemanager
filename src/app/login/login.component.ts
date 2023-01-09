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
      clientname:['',[Validators.required]],
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
    console.log(this.LoginForm.value.email, this.LoginForm.value.password,this.LoginForm.value.clientname)
    console.log(item);
    this.resource.getClientResourceData(item).subscribe((data) => {
      this.userResult = data
      console.log(this.userResult.data);
      console.log(this.userResult.data.map((x: any) => x.clientname));
      let listData = this.userResult.data.map((x: any) => x.clientname)
      console.log(listData)
      let userdata =this.userResult.data.filter((s: { clientname: any; password: any;email:any })=>s.clientname && s.password && s.email)
      console.log(userdata.clientname)
      this.resource.besubject.next(item);
      // this.userResult.data.forEach((element: {
      //   password: boolean; clientname: any;
      // }) => {
        if (userdata[0]?.clientname === this.LoginForm.value.clientname && userdata[0]?.password === this.LoginForm.value.password && userdata[0]?.email === this.LoginForm.value.email ) {
          this.route.navigate(['/home'])
        }
        else {
          window.alert("invalid credentials")
        }
      });
    // })
  }
  onSelect() {
    this.route.navigate(['/signup'])
  }
}
