import { CategoriesService } from './../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { Firestore,collection, addDoc } from '@angular/fire/firestore';
import 'firebase/firestore';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
   
  constructor(private categoryService: CategoriesService){

  }
  
  categoryArray: Array<any> = [];
  //categoryArray!: Observable<any>; 
  formCategory : string | undefined;
  formStatus: string = 'Add';
  categoryId!: string;

  ngOnInit() : void {
    this.categoryService.loadData().subscribe(value =>{
      this.categoryArray = value;
      console.log(value)
      //console.log(this.categoryArray);
    });
  }
  
  onSubmit (formData: any){
    
     let categoryData: Category = {
      category: formData.value.category
     }   

     if(this.formStatus =='Add') {
     
      this.categoryService.saveData(categoryData);
      formData.reset();

     } else if (this.formStatus =='Edit'){
       this.categoryService.updateData(this.categoryId,categoryData);
       formData.reset();
       this.formStatus='Add';
     }

     
     
  }

  onEdit(category: any, id: string) {
     console.log(category)
     this.formCategory = category;
     this.formStatus = 'Edit';
     this.categoryId= id;
  }

  onDelete(id:string){
    this.categoryService.deleteData(id);
  }

}
