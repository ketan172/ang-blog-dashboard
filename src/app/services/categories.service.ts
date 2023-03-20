import { Category } from './../models/category';

import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, getFirestore, getDocs, doc, updateDoc, deleteDoc} from '@angular/fire/firestore'; 
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})

export class CategoriesService {
 

  constructor(private afs: Firestore , private toastr: ToastrService){
      
  }

  saveData(data: any){
    const collectionInstance = collection(this.afs,'categories'); 

    addDoc(collectionInstance,data).then((docRef: any) =>{
      console.log(docRef);
      this.toastr.success('Data Insert Successfully  ..!');
     }).catch((err: any) => {console.log(err)})
  }
  

  
  //  loadData() {
  //   const collectionInstance = collection(this.afs,'categories'); 
  //   // const docsSnap = await getDocs(collectionInstance);
    

    
  
  //   return collectionData(collectionInstance).pipe(
  //       map(actions => {
  //         return actions.map(async a =>{
  //           const docsSnap =  await getDocs(collectionInstance);
  //           // const data = a.doc.data();
  //           // console.log(data);
  //           // const id = doc.id;
  //           // console.log(id);
  //           docsSnap.forEach(doc => {
  //             const data  = doc.data()
  //             console.log(data)
  //             const id = doc.id;
  //             console.log(id)
  //             return{ id, data }    
  //           })
            
  //         })
  //       })
  //   )

  // }

    loadData() {
      const collectionInstance = collection(this.afs,'categories'); 
       return collectionData(collectionInstance,{ idField:'id'}).pipe( val =>{
        console.log(val);
        return val;
      })

    }

    updateData(id:string , editData : any){
      const docInstance = doc(this.afs,'categories',id);
      updateDoc(docInstance, editData).then(docRef =>{
        this.toastr.success('Data Updated Successfully  ..!');
      })

    }

    deleteData(id:string) {
      const docInstance = doc(this.afs,'categories',id);
      deleteDoc(docInstance).then(docRef =>{
        this.toastr.success('Data Deleted Successfully  ..!');
      })
    }
}
