import { collection, collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private afs:Firestore,private toastr: ToastrService) { }
  
  loadData() {
    const collectionInstance = collection(this.afs,'subscribers'); 
     return collectionData(collectionInstance,{ idField:'id'}).pipe( val =>{
      console.log(val);
      return val;
    })

  }

  deleteData(id:string) {
    const docInstance = doc(this.afs,'subscribers',id);
    deleteDoc(docInstance).then(docRef =>{
      this.toastr.success('Data Deleted Successfully  ..!');
    })
  }

}
