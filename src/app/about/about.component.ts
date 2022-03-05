import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  fontChange: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.fontSize.subscribe(
      data => {
       
        this.fontChange =  data
        console.log(this.fontChange)
      }
      )
  }
}
