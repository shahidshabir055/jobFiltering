import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }
  jobList: any = [];
  jobList1: any = [];
  showCss: any = true;
  showFrontend: any = true;
  showJavascript: any = true;
  ngOnInit(): void {
    this.getData();
}
 filterData(tag: any) {
  this.jobList1 = this.jobList.filter((d:any) => d.languages.includes(tag) || d.role.includes(tag) );
  console.log(this.jobList1);
  this.jobList =this.jobList1;

}
getData(){
  this.httpClient.get("assets/data.json").subscribe(data =>{
    console.log(data);
    this.jobList = data;
  })
}

}
