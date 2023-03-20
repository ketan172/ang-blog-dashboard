import { PostService } from './../../services/post.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent {


    postArray: Array<any> = [];
  
    constructor(private postService:PostService) {

    }



    ngOnInit():void {
      this.postService.loadData().subscribe(val =>{
        console.log(val);
        this.postArray = val;
      })
     }

     onDelete (postImgPath: string , id: string) {
        this.postService.deleteImage( postImgPath,id);
     }

     onFeatured(id: any ,value: any) {
        const featuredData = {
          isFeatured:value,
        }

        this.postService.markFeatured(id,featuredData);
     }
}
