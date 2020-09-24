import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',   //#id,.class,tagname (sử dụng selector như tagname)
  templateUrl: './demo.component.html', //nơi hiển thị nội dung ui của component
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
