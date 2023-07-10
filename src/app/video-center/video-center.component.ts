import { Component, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedVideo!:Video

  videos: Video[] = [
    {"_id":"1", "title":"Title1", "url":"Url1", "description":"Description1"},
    {"_id":"2", "title":"Title2", "url":"Url2", "description":"Description2"},
    {"_id":"3", "title":"Title3", "url":"Url3", "description":"Description3"},
    {"_id":"4", "title":"Title4", "url":"Url4", "description":"Description4"},
  ]

  onSelectVideo(video:any){
    this.selectedVideo = video;
    console.log(this.selectedVideo)
  }
}
