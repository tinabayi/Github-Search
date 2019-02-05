import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Github} from '../github-class/github';
import {GithubRequestService} from '../github-http/github-request.service'




@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  providers:[GithubRequestService], 
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {

  github:Github;

  constructor(private githubService:GithubRequestService) { 
    
  }

  ngOnInit() {

    this.githubService.githubRequest()
    this.github=this.githubService.github

  }

}

















