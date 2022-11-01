import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ResourceManagerService } from '../resource-manager.service';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailsComponent implements OnInit {

  userResult: any = []
  submitForm: FormGroup 
  constructor(private fb:FormBuilder,private router:Router,private resource: ResourceManagerService) { 
    this.submitForm=this.fb.group({
      id:[''],
      corporateemail:[''],
      name:[''],
      status:[''],
      skills:['']
    })
  }

  ngOnInit(): void {
  }

  cancel(){
    this.router.navigate(['/login'])
  }

  onSubmit(data:any){
    this.resource.insertResourceDetails(data).subscribe((data) => { 
      console.log(data)
      window.alert("successfully added resources");
      this.router.navigate(['/login'])
      this.userResult = data
  })

}

}
