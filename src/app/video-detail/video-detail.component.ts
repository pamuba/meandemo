import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  @Input() public video!:Video
  public editTitle: boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  onTitleClick(){
    this.editTitle = true
  }

}
