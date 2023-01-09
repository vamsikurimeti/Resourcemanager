import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceManagerService } from '../resource-manager.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateForm: FormGroup;
  id: any
  userResult:any=[]
  user:any
  disable:boolean=false
  constructor(private fb:FormBuilder,private resource: ResourceManagerService,private route:ActivatedRoute,private router:Router) {
    this.updateForm=this.fb.group({
      id:[''],
      name:[''],
      status:[''],
      skills:[''],
      clientname:['']
    })
   }

  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('id')
    this.resource.getAllResources().subscribe((data)=>{
      // this.show=true
      console.log(data)
      this.userResult=data
      // console.log(data)
      this.user=this.userResult.filter((d:any)=>d.id==this.id)
      console.log(this.user)
      this.edit(this.user)
    })
  }

  edit(result:any){
    this.updateForm.patchValue({
      id:result[0].id,
      name:result[0].name,
      status:result[0].status,
      skills:result[0].skills,
      clientname:result[0].clientname
    })
    this.disable=true
  }

  update(upd:any){
    this.resource.updateResource(upd).subscribe((xyz)=>{
      console.log("update"+xyz);
      window.alert("updated successfully")
      this.router.navigate(['/home'])

    })
  }
  cancel(){
    this.router.navigate(['/home'])
  }
}
