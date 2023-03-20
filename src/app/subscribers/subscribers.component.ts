import { SubscribersService } from './../services/subscribers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit {
  
  subscribersArray!: Array<any>;
  constructor( private subService:SubscribersService){

  }

  ngOnInit(): void {
    this.subService.loadData().subscribe(val =>{
      this.subscribersArray= val;
    })
  }

  onDelete(id: string){
    this.subService.deleteData(id);
  }
}
