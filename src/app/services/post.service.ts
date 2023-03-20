import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference, AngularFireStorageModule } from '@angular/fire/compat/storage';
import { addDoc, collection, collectionData, Firestore, doc, getFirestore, updateDoc } from '@angular/fire/firestore';
import { Storage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { deleteDoc, getDoc } from 'firebase/firestore';
import { ToastrService } from 'ngx-toastr';
import { Post } from '../models/post';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private task!: AngularFireUploadTask;
  private ref!: AngularFireStorageReference;

  constructor(private storage:Storage , 
              private store:AngularFireStorage,
              private storage1:AngularFireStorageModule,
              private afs: Firestore,
              private toastr: ToastrService,
              private router: Router  ) { }

  
  
  uploadImage(selectedImage: any,postData: Post,formStatus: string | undefined,id: undefined) {
    const filePath =`postIMG/${Date.now()}`; 
    //console.log(filePath)
    
    this.store.upload(filePath,selectedImage).then(()=>{
      console.log('Post image uploaded successfully')

      this.store.ref(filePath).getDownloadURL().subscribe(URL =>{
          postData.postImgPath = URL;
          //console.log(postData)
          // insert query
          if(formStatus == 'Edit') {
            this.updateData(id,postData);
          } else  {
          this.saveData(postData); 
          }         
    })    
  })
}
  

  saveData(postData:Post) {
    const collectionInstance = collection(this.afs,'posts'); 

    addDoc(collectionInstance,postData).then((docRef: any) =>{
       // console.log(docRef);
       this.toastr.success('Data Insert Successfully  ..!');
       //this.router.navigate(['/posts]']); 
       this.router.navigate(['/posts']);
       
    });
 
  }

  loadData() {
    const collectionInstance = collection(this.afs,'posts'); 
     return collectionData(collectionInstance,{ idField:'id'}).pipe( val =>{
      console.log(val);
      return val;
    })

  }

  async loadOneData(id: any) {
    const collectionInstance = collection(this.afs,'posts'); 
    const docInstance = doc(this.afs,'posts',id);
    const docSnap = await getDoc(docInstance);
    //console.log(docSnap.data())
    return docSnap.data();

  }

  updateData(id:any,postData: any){
    const docInstance = doc(this.afs,'posts',id);
    updateDoc(docInstance, postData).then(docRef =>{
      this.toastr.success('Data Updated Successfully  ..!');
      this.router.navigate(['/posts']);
    })

  }
     
  deleteImage(postImgPath: string ,id: string) {
    this.store.storage.ref(postImgPath).delete().then(() =>{
       this.deleteData(id);   
    })
  }

  deleteData(id: string) {
    const docInstance = doc(this.afs,'posts',id);
    deleteDoc(docInstance).then(docRef =>{
      this.toastr.warning ('Data Deleted ...!');
    })
  }

  markFeatured(id: any,featuredData: any) {
    const docInstance = doc(this.afs,'posts',id);
    updateDoc(docInstance, featuredData).then(docRef =>{
      this.toastr.info (' Featured Post Updated  ..!');
    })
  }
  
}