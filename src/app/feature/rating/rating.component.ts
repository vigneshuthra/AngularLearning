import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() rating: any;
  @Input() isReadOnly: boolean= false;
  constructor() { }

  ngOnInit(): void {
  }

}
