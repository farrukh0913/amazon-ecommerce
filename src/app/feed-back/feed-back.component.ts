import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/requestService';

@Component({
  selector: 'app-feed-back',
  standalone: true,
  imports: [],
  templateUrl: './feed-back.component.html',
  styleUrl: './feed-back.component.scss'
})
export class FeedBackComponent implements OnInit{
  feedbackList:any[] = [];
  loading:boolean = false;
  constructor(private requestService:RequestService){}

  ngOnInit(): void {
      this.getAllFeedbackList();
  }

  getAllFeedbackList(){
    this.loading = true;
    this.requestService.getAllFeedback().subscribe(res =>{
      console.log('res: ', res);
      if(res){
        this.loading = false;
        this.feedbackList = res.data
      }
    },err =>{
      this.loading = false;
    })
  }

  deleteFeedback(id:any){
    this.loading = true;
    this.requestService.removeFeedbackById(id).subscribe(res =>{
      if(res){
        this.getAllFeedbackList()
      }
    },err =>{
      this.loading = false;
      
    })
  }
}
