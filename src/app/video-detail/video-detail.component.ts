import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  @Input() public video!:Video
  @Output() public updateVideoEvent: EventEmitter<any> = new EventEmitter
  @Output() public deleteVideoEvent: EventEmitter<any> = new EventEmitter
  public editTitle: boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  onTitleClick(){
    this.editTitle = true
  }
  ngOnChanges(){
    this.editTitle = false
  }

  updateVideo(){
    this.updateVideoEvent.emit(this.video)
  }
  deleteVideo(){
    this.deleteVideoEvent.emit(this.video)
  }

}
