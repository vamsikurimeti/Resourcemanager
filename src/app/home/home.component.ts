import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ResourceManagerService } from '../resource-manager.service';
import {ConfirmationService, ConfirmEventType} from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class HomeComponent implements OnInit {

  email: any
  pwd: any
  userResult: any
  userResult1: any = [];
  constructor(private confirmationService: ConfirmationService,private route: ActivatedRoute, private messageService: MessageService, private resource: ResourceManagerService, private router: Router) { }

  ngOnInit(): void {

    this.resource.besubject.subscribe(d => {
      console.log(d)
      this.get(d)
    })
  }

  get(u: any) {
    this.resource.getClientResourceData(u).subscribe(data => {
      console.log(data)
      this.userResult = data
      this.userResult1 = this.userResult.data
      console.log(this.userResult.data)
    })
  }

  delete(id: any) {
    // this.messageService.clear();
    // this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
    this.resource.deleteResource(id).subscribe((y) => {
      console.log('deleted successfully' + y);
      window.alert('deleted successfully')
      this.router.navigate(['/home'])
      this.ngOnInit()
    })
  }

  onSelect(columns: any) {

    this.router.navigate(['/update', columns.id])

  }

  onSubmit() {
    this.router.navigate(['/update'])
  }

  onSave() {

    this.router.navigate(['/resourceDetails'])
  }
confirm2(id:any) {
    this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
            this.messageService.add({severity:'info', summary:'Confirmed', detail:'Record deleted'});
            this.resource.deleteResource(id).subscribe((y) => {
              console.log('deleted successfully' + y);
              window.alert('deleted successfully')
              this.router.navigate(['/home'])
              this.ngOnInit()
            })
        },
        reject: (type:any) => {
            switch(type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
                break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
                break;
            }
        }
    });
}
}
