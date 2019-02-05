import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Github} from '../github-class/github';
import {GithubRequestService} from '../github-http/github-request.service'
import { Username } from '../username';




@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  providers:[GithubRequestService], 
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {

  github:Github;
  userInput=""
  
  submit(){
    this.githubService.githubRequest(this.userInput)
    // console.log(this.userInput)
}

  constructor(private githubService:GithubRequestService) { 
    
  }

  ngOnInit() {

    this.githubService.githubRequest("tinabayi")
    this.github=this.githubService.github

  }

}

















