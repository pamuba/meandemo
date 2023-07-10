import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() public videos!: Video[];
  @Output() public SelectVideo = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
