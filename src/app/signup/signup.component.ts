import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ResourceManagerService } from '../resource-manager.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userResult: any = []
  submitForm: FormGroup 
  constructor(private fb:FormBuilder,private router:Router,private resource: ResourceManagerService) {
    this.submitForm=this.fb.group({
      id:[''],
      clientname:[''],
      category:[''],
      location:[''],
      email:[''],
      password:[''],
      confirmpassword:['']
    })
   }

  ngOnInit(): void {
  }

  cancel(){
    this.router.navigate(['/login'])
  }

  onSubmit(data:any){
    this.resource.insertClientDetails(data).subscribe((data) => { 
      console.log(data)
      window.alert("successfully registered")
      this.router.navigate(['/resources'])
      this.userResult = data
  })

}
}
