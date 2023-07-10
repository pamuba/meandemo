import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  constructor(private _videoService:VideoService) { }

  videos: Video[] = []

  ngOnInit(): void {
    this._videoService.getVideos()
        .subscribe(resVideoData =>{
          for(const d of (resVideoData as any)){
            this.videos.push(d)
          }
        })
  }
  onSubmitAddVideo(video:Video){
    this._videoService.addVideo(video)
          .subscribe(resNewVideo => {
            this.videos.push(resNewVideo)
            // this.hidenewVideo = true
            this.selectedVideo = resNewVideo
          })
  }

  selectedVideo!:Video
  onSelectVideo(video:any){
    this.selectedVideo = video;
    console.log(this.selectedVideo)
  }
}
