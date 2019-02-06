import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Github} from '../github-class/github';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  github:Github;

  constructor(private http:HttpClient) { 
    this.github=new Github("","",0,0 ,"",0);
  }
  githubRequest(name){
    var userInput = name
    interface ApiResponse{
        
      name:string;
      avatar_url:string;
      followers:number;
      following:number;
      repos_url:string;
      public_repos:number;
  }

  let promise =new Promise((resolve,reject)=>{
    this.http.get<ApiResponse>('https://api.github.com/users/' + userInput+ '?access_token=33b16a8f7dda204f8be34d47222412140e31df0e').toPromise().then(response=>{
        
        this.github.name=response.name
        this.github.avatar_url=response.avatar_url
        this.github.followers=response.followers
        this.github.following=response.following
        this.github.repos_url=response.repos_url
        this.github.public_repos=response.public_repos
        
        resolve()
    },
    error=>{
      this.github.name="never,never"
      this.github.followers=0
      this.github.following=0
      this.github.repos_url="http...."
      this.github.public_repos=0
       
      
            reject(error)
        }
    )
})

return promise
}
}
