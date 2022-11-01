import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-resources',
  templateUrl: './add-resources.component.html',
  styleUrls: ['./add-resources.component.css']
})
export class AddResourcesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  onSelect(){
    this.route.navigate(['/resourceDetails'])
  }
  no(){
    this.route.navigate(['/login'])
  }
}
